import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, combineLatest, map } from 'rxjs'

import { CourseCardComponent } from '@courses/components/course-card/course-card.component'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { Course } from '@courses/logic/models/courses'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent, BreadcrumbComponent, AsyncPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  levelsStore = inject(LevelsStore)
  loadingService = inject(LoadingService)

  data$!: Observable<{ loading: boolean; courses: Course[] }>

  constructor() {
    this.data$ = combineLatest([
      this.loadingService.loading$,
      this.levelsStore.getAllCourses()
    ]).pipe(
      map(([loading, courses]) => {
        console.log('here')
        return { loading, courses }
      })
    )
  }
}
