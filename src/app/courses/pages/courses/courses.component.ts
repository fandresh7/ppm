import { Component, inject } from '@angular/core'
import { Observable } from 'rxjs'

import { Course } from '@courses/logic/models/courses'
import { Lesson } from '@courses/logic/models/lessons'
import { CoursesService } from '@courses/services/courses.service'
import { CourseCardComponent } from '@courses/components/course-card/course-card.component'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent, BreadcrumbComponent, AsyncPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesService = inject(CoursesService)

  courses$: Observable<Course[]>
  recommendedLessons$: Observable<Lesson[]>

  constructor() {
    this.courses$ = this.coursesService.loadCourses()
    this.recommendedLessons$ = this.coursesService.getRecommendedLessons()
  }
}
