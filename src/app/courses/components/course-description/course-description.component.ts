import { Component, Input, inject } from '@angular/core'
import { CourseStateCardComponent } from '../course-state-card/course-state-card.component'
import { Course } from '@courses/logic/models/courses'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'
import { Lesson } from '@courses/logic/models/lessons'
import { CourseService } from '@courses/services/course.service'

@Component({
  selector: 'app-course-description',
  standalone: true,
  imports: [CourseStateCardComponent, RoundedProgressComponent],
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent {
  courseService = inject(CourseService)

  @Input({ required: true }) course!: Course
  @Input({ required: true }) requirementsCourses: Course[] = []

  getPercentage(lessons: Lesson[]) {
    return this.courseService.getPercentage(lessons)
  }
}
