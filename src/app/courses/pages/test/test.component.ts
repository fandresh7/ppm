import { Dialog } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AsyncPipe } from '@angular/common'

import { Observable, tap } from 'rxjs'

import { sendExternal } from '@superlikers/api/entries'
import { FeedbackMessagesService } from '@shared/messages/services/feedback-messages.service'
import { VideoAttemptModalComponent } from '@courses/components/video-attempt-modal/video-attempt-modal.component'
import { canResponseTest } from '@courses/logic/helpers/courses'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { Question } from '@courses/logic/models/tests'
import { redeemLessonAttempt, validateAttempts } from '@courses/logic/tests'
import { CoursesService } from '@courses/services/courses.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { ProgressBarComponent } from '@courses/components/progress-bar/progress-bar.component'
import { testSliderOptions } from '@courses/utils/swipers'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SubmitButtonComponent,
    ProgressBarComponent,
    AsyncPipe
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestComponent implements OnInit {
  fb = inject(FormBuilder)
  route = inject(ActivatedRoute)
  router = inject(Router)

  coursesService = inject(CoursesService)
  messagesService = inject(FeedbackMessagesService)

  @ViewChild('formSlide', { static: true }) formSlide!: ElementRef
  swiperInit = false

  form: FormGroup = this.fb.group({})

  lesson$!: Observable<Lesson>

  loading = false

  questions: Question[] = []
  actualSlide = 1
  totalSlides = 0

  get percentage() {
    return this.totalSlides > 0
      ? (this.actualSlide / this.totalSlides) * 100
      : 0
  }

  constructor(
    public dialog: Dialog,
    public overlay: Overlay
  ) {}

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    const lessonCategory = this.route.snapshot.params['category']

    this.lesson$ = this.coursesService.getLesson(lessonCategory).pipe(
      tap(lesson => {
        if (!lesson) return
        console.log('here')

        if (lesson.initial) {
          this.validateInitialTest(lesson)
        } else {
          this.validateTest(lesson)
        }
      })
    )
  }

  validateInitialTest(lesson: Lesson) {
    const { TestContent, nextLessonUrl } = lesson

    if (!TestContent) return
    const { status } = TestContent

    if (status === LessonStatus.Done) {
      this.messagesService.showInitialTestFeedback().then(() => {
        this.router.navigate(nextLessonUrl ?? ['/home'])
      })
    }

    this.startTest(lesson)
  }

  validateTest(lesson: Lesson) {
    const status = lesson.TestContent?.status
    const nextLessonUrl = lesson.nextLessonUrl ?? ['/home']
    const answers = lesson.TestContent?.correctAnswers ?? 0
    const questions = lesson.TestContent?.amountQuestions ?? 0
    const attempts = lesson.TestContent?.attempts ?? []
    const canRedeemAttempt = validateAttempts(attempts)
    const canResponse = canResponseTest(lesson)

    if (canResponse) {
      this.startTest(lesson)
      return
    }

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
          this.reddemAttempt(lesson)
        }
      })
    } else {
      this.messagesService.showVideoAttemptFeedback().then(result => {
        if (result.isConfirmed) {
          this.router.navigate(nextLessonUrl)
          return
        }

        this.dialog.open(VideoAttemptModalComponent, {
          data: { lesson },
          disableClose: true
        })

        this.dialog.afterAllClosed.subscribe(() => {
          this.loading = false
          this.reset()
        })
      })
    }
  }

  async reddemAttempt(lesson: Lesson) {
    const response = await redeemLessonAttempt(lesson)
    if (response !== 'success') return

    this.coursesService.updateLesson(lesson).subscribe(() => {
      this.reset()
    })
  }

  onSubmit(lesson: Lesson) {
    this.loading = true

    if (this.form.invalid) {
      this.loading = false
      this.messagesService.showTestIncomplete()
      return
    }

    const data = this.form.value
    const event = lesson.TestContent?.external ?? ''

    sendExternal({ event, properties: data }).then(response => {
      if (response !== 'success') return

      this.coursesService.updateLesson(lesson).subscribe()
    })
  }

  startTest(lesson: Lesson) {
    const questionsSlides = lesson?.TestContent?.amountQuestions ?? 0
    this.totalSlides = questionsSlides + 1
    this.questions = lesson?.TestContent?.questions ?? []

    this.assignFieldsToForm()
    this.initializeSlide()
  }

  assignFieldsToForm() {
    this.questions.forEach(question => {
      const formControl = this.fb.control(null, Validators.required)
      this.form.addControl(question.name, formControl)
    })
  }

  initializeSlide() {
    if (this.swiperInit) return

    Object.assign(this.formSlide.nativeElement, testSliderOptions)
    this.formSlide.nativeElement.initialize()
    this.swiperInit = true
  }

  reset() {
    this.form.reset()
    this.actualSlide = 1
    this.loading = false
    this.formSlide.nativeElement.swiper.slideTo(0)
  }

  onSwiperChange() {
    const index = this.formSlide.nativeElement.swiper.realIndex
    this.actualSlide = index + 1
  }

  nextSlide() {
    this.formSlide.nativeElement.swiper.slideNext()

    const step = this.formSlide.nativeElement.swiper.realIndex
    const nextStep = step + 1
    if (nextStep <= this.totalSlides) this.actualSlide = nextStep
  }

  previousSlide() {
    this.formSlide.nativeElement.swiper.slidePrev()

    const step = this.formSlide.nativeElement.swiper.realIndex
    const previousStep = step + 1
    if (previousStep >= 0) this.actualSlide = previousStep
  }

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement
    const questionValue = this.form.controls[target.name].value

    const values = questionValue ? questionValue.split(',') : []
    const index = values.indexOf(target.value)

    if (index === -1) values.push(target.value)
    else values.splice(index, 1)

    this.form.controls[target.name].setValue(values.join(','))
  }
}
