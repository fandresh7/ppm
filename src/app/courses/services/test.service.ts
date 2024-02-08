import { Dialog } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { EventEmitter, Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { defer } from 'rxjs'

import { canResponseTest } from '@courses/logic/helpers/courses'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { redeemLessonAttempt, validateAttempts } from '@courses/logic/tests'
import { LevelsStore } from '@courses/store/levels.store'
import { FormsService } from '@shared/features/forms/services/forms.service'
import { FeedbackMessagesService } from '@shared/messages/services/feedback-messages.service'
import { sendExternal } from '@superlikers/api/entries'
import { VideoAttemptModalComponent } from '@courses/components/video-attempt-modal/video-attempt-modal.component'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  router = inject(Router)
  messagesService = inject(FeedbackMessagesService)
  formService = inject(FormsService)
  levelsStore = inject(LevelsStore)

  public resetSwiperEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    public dialog: Dialog,
    public overlay: Overlay
  ) {}

  validate(lesson: Lesson) {
    if (lesson.initial) {
      return this.validateInitialTest(lesson)
    } else {
      return this.validateTest(lesson)
    }
  }

  // validate if participant can response the initial test
  validateInitialTest(lesson: Lesson) {
    const { TestContent, nextLessonUrl } = lesson
    if (!TestContent) return

    const { status } = TestContent

    if (status === LessonStatus.Done) {
      this.messagesService.showInitialTestFeedback().then(() => {
        this.router.navigate(nextLessonUrl ?? ['/home'])
      })
    }
  }

  // validate if participant can response the test
  validateTest(lesson: Lesson) {
    const status = lesson.TestContent?.status
    const nextLessonUrl = lesson.nextLessonUrl ?? ['/home']
    const answers = lesson.TestContent?.correctAnswers ?? 0
    const questions = lesson.TestContent?.amountQuestions ?? 0
    const attempts = lesson.TestContent?.attempts ?? []
    const canRedeemAttempt = validateAttempts(attempts)
    const canResponse = canResponseTest(lesson)

    if (canResponse) return

    if (status === LessonStatus.Done) {
      this.messagesService.showDownloadMessage(answers, questions).then(() => {
        this.router.navigate(['/certificates'])
      })

      return
    }

    if (canRedeemAttempt) {
      this.messagesService.showTestWrongMessage().then(result => {
        if (!result.isConfirmed) {
          this.router.navigate(nextLessonUrl)
        } else {
          this.redeemAndResetSwiper(lesson)
        }
      })
    } else {
      this.showDialogAndResetSwiper(lesson, nextLessonUrl)
    }
  }

  async redeemAndResetSwiper(lesson: Lesson) {
    const response = await redeemLessonAttempt(lesson)
    if (response === 'success') {
      this.levelsStore.updateLesson(lesson).subscribe(() => {
        this.resetSwiperEvent.emit()
      })
    }
  }

  showDialogAndResetSwiper(lesson: Lesson, nextLessonUrl: string[]) {
    this.messagesService.showVideoAttemptFeedback().then(result => {
      if (result.isDismissed) return

      if (result.isDenied) {
        this.router.navigate(nextLessonUrl)
        return
      }

      this.dialog.open(VideoAttemptModalComponent, {
        data: { lesson },
        disableClose: true
      })

      this.dialog.afterAllClosed.subscribe(() => this.resetSwiperEvent.emit())
    })
  }

  submit(event: string, properties: Record<string, string>) {
    return defer(() => sendExternal({ event, properties }))
  }
}
