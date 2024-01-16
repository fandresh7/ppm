import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CdkAccordionModule } from '@angular/cdk/accordion'

import { getPercentage } from '@courses/logic/helpers/courses'
import { Course } from '@courses/logic/models/courses'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { ProgressBarComponent } from '../progress-bar/progress-bar.component'
import { LessonStateCardComponent } from '../lesson-state-card/lesson-state-card.component'

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordionModule,
    ProgressBarComponent,
    LessonStateCardComponent
  ],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent implements OnInit {
  @Input() course!: Course

  lessons: Lesson[] = []

  ngOnInit() {
    this.lessons = this.getCourseLessons(this.course.lessons)
  }

  getCoursePercentage(course: Course) {
    const lessons = course.lessons ?? []
    const percentage = getPercentage(lessons) * 100
    return percentage
  }

  getCourseLessons(lessons?: Lesson[]) {
    if (!lessons) return []

    const initialLesson = lessons.find(lesson => lesson.initial)

    if (
      initialLesson &&
      initialLesson.TestContent?.status === LessonStatus.Done
    ) {
      return lessons.filter(lesson => !lesson.initial)
    }

    return [initialLesson] as Lesson[]
  }
}
