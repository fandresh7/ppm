import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core'

import { trigger, state, style, transition, animate } from '@angular/animations'
import { RouterLink } from '@angular/router'
import { DecimalPipe, NgClass } from '@angular/common'
import { CdkAccordionModule } from '@angular/cdk/accordion'

import { Course } from '@courses/logic/models/courses'
import { getLessonStatus, getPercentage } from '@courses/logic/helpers/courses'
import { ProgressBarComponent } from '../progress-bar/progress-bar.component'
import { LessonsListComponent } from '../lessons-list/lessons-list.component'
import { LessonStatus } from '@courses/logic/models/lessons'

@Component({
  selector: 'app-courses-accordion',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    CdkAccordionModule,
    DecimalPipe,
    ProgressBarComponent,
    LessonsListComponent
  ],
  templateUrl: './courses-accordion.component.html',
  styleUrl: './courses-accordion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('expand', [
      state(
        'collapsed',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'visible',
          opacity: 1
        })
      ),
      transition('collapsed <=> expanded', [
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class CoursesAccordionComponent {
  @Input() courses: Course[] = []

  @ViewChild('accordionItemHeader') accordionItemHeader!: ElementRef

  scrollToHeader() {
    const container = document.querySelector('#sticky-course-container')
    if (!container) return

    const headerOffset = this.accordionItemHeader.nativeElement.offsetTop
    container.scrollTop = headerOffset
  }

  getCoursePercentage(course: Course) {
    const lessons = course.lessons ?? []
    const percentage = getPercentage(lessons) * 100
    return percentage
  }

  getFirstLessonNotCompletedUrl(course: Course) {
    const lessons = course.lessons ?? []
    const lesson = lessons.find(
      lesson => getLessonStatus(lesson) !== LessonStatus.Done
    )

    if (!lesson) return ['/course', course.category]

    return lesson.nextLessonUrl
  }
}
