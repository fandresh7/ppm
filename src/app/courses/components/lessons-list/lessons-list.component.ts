import { Component, Input } from '@angular/core'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { LessonStateCardComponent } from '../lesson-state-card/lesson-state-card.component'
import { Course } from '@courses/logic/models/courses'

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [LessonStateCardComponent],
  templateUrl: './lessons-list.component.html',
  styleUrl: './lessons-list.component.css'
})
export class LessonsListComponent {
  @Input({ required: true }) course!: Course
  @Input() activeLesson!: Lesson

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
