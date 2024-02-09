import { Injectable, inject } from '@angular/core'

import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop'
import { Observable, first, map } from 'rxjs'

import { CustomData } from '@courses/logic/dragdrop'
import { DragDropQuestion } from '@courses/logic/models/dragdrop'
import { Lesson } from '@courses/logic/models/lessons'
import { FeedbackMessagesService } from '@shared/messages/services/feedback-messages.service'
import { sendExternal } from '@superlikers/api/entries'
import { Router } from '@angular/router'
import { LevelsStore } from '@courses/store/levels.store'

interface dragDropData {
  options: DragDropQuestion[]
  dropzones: DragDropQuestion[][]
}

@Injectable({
  providedIn: 'root'
})
export class DragdropService {
  router = inject(Router)
  private levelsStore = inject(LevelsStore)
  private messagesService = inject(FeedbackMessagesService)

  lesson$!: Observable<Lesson>

  answers: CustomData = {}

  setLesson(category: string) {
    this.lesson$ = this.levelsStore.getLesson(category)
  }

  initializeDragdrop() {
    return this.lesson$.pipe(
      map(lesson => {
        const [...questions] = lesson?.DragdropContent?.questions ?? []
        const dropzones = questions.map(() => [])

        const randomQuestions = questions.sort(() =>
          Math.random() > 0.5 ? 1 : -1
        )

        return {
          options: randomQuestions,
          dropzones
        } as dragDropData
      })
    )
  }

  addAnswer(containerId: string, value: string) {
    this.answers[containerId] = value
  }

  removeAnswer(containerId: string) {
    const { [containerId]: removedQuestion, ...rest } = this.answers
    console.log({ removedQuestion })
    this.answers = rest
  }

  onDrop(event: CdkDragDrop<DragDropQuestion[]>) {
    const { previousContainer, container, previousIndex, currentIndex } = event
    const dropInOptionsContainer =
      container.element.nativeElement.classList.contains('options')

    if (container.data.length > 0 && !dropInOptionsContainer) return
    if (previousContainer === container) return

    const item = previousContainer.data[previousIndex]

    if (!dropInOptionsContainer) {
      this.addAnswer(container.id, item.value)
    } else {
      this.removeAnswer(previousContainer.id)
    }

    transferArrayItem(
      previousContainer.data,
      container.data,
      previousIndex,
      currentIndex
    )
  }

  validateQuestions(questions: DragDropQuestion[], answers: CustomData) {
    const correctAnswers = questions.filter(question => {
      const answer = answers[question.question].toString()
      return answer.localeCompare(question.value) === 0
    })

    const validation = correctAnswers.length === questions.length

    return { validation, correctAnswers }
  }

  async sendData(lesson: Lesson, answers: CustomData) {
    const {
      name,
      category,
      DragdropContent,
      nextLessonUrl,
      courseCategory,
      courseName
    } = lesson

    if (!DragdropContent) return
    const { questions, external } = DragdropContent

    if (questions.length !== Object.entries(answers).length) {
      this.messagesService.showTestIncomplete()
      return
    }

    const { validation, correctAnswers } = this.validateQuestions(
      questions,
      answers
    )

    const resumeProperties: Record<string, string | number> = {
      amount_questions: questions.length,
      correct_answers: correctAnswers.length,
      type: 'quiz',
      lesson: name,
      course: courseName ?? '',
      course_category: courseCategory ?? ''
    }

    const dragdropData = sendExternal({ event: external, properties: answers })
    const resumeData = sendExternal({
      event: 'resume',
      properties: resumeProperties,
      category
    })

    await Promise.all([dragdropData, resumeData])

    this.levelsStore.updateLesson(lesson).subscribe(() => {
      if (validation) {
        this.messagesService.showDragdropSuccessMessage().then(() => {
          this.router.navigate(nextLessonUrl ?? ['/home'])
        })
      } else {
        this.messagesService.showDragdropWrongMessage().then(result => {
          if (result.isConfirmed) {
            this.router.navigate(nextLessonUrl ?? ['/home'])
          }
        })
      }
    })
  }

  submit() {
    this.lesson$
      .pipe(
        first(),
        map(lesson => this.sendData(lesson, this.answers))
      )
      .subscribe()
  }
}
