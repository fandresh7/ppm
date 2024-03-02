import { Component, ElementRef, ViewChild, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Observable, combineLatest, map, switchMap, tap } from 'rxjs'

import { Course } from '@courses/logic/models/courses'
import { LessonType, Lesson } from '@courses/logic/models/lessons'
import { CourseService } from '@courses/services/course.service'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { VideoComponent } from '@courses/components/video/video.component'
import { InfografiaComponent } from '@courses/components/infografia/infografia.component'
import { LessonStateCardComponent } from '@courses/components/lesson-state-card/lesson-state-card.component'
import { AsyncPipe } from '@angular/common'
import { RoundedProgressComponent } from '@courses/components/rounded-progress/rounded-progress.component'
import { BlogComponent } from '@shared/features/blog/blog.component'
import { LoadingService } from '@shared/loading/loading.service'
import { LoadingCourseComponent } from '@courses/components/loading/loading-course/loading-course.component'
import { ResourceCardComponent } from '@courses/components/resource-card/resource-card.component'
import { CourseStateCardComponent } from '@courses/components/course-state-card/course-state-card.component'
import { LessonsListComponent } from '@courses/components/lessons-list/lessons-list.component'
import { CourseDescriptionComponent } from '@courses/components/course-description/course-description.component'

type ContentType = 'lessons' | 'content' | 'resources'

interface PageData {
  loading: boolean
  course: Course | null
  requirementsCourses: Course[]
  lessons: Lesson[]
  lesson: Lesson | null
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    AsyncPipe,
    BreadcrumbComponent,
    VideoComponent,
    InfografiaComponent,
    LessonStateCardComponent,
    CourseStateCardComponent,
    RoundedProgressComponent,
    BlogComponent,
    LoadingCourseComponent,
    ResourceCardComponent,
    LessonsListComponent,
    CourseDescriptionComponent
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  route = inject(ActivatedRoute)
  router = inject(Router)

  courseService = inject(CourseService)
  loadingService = inject(LoadingService)

  data$: Observable<PageData>

  lessonsTypes = LessonType
  content: ContentType = 'lessons'

  @ViewChild('stickyContent') stickyContent!: ElementRef
  @ViewChild('stickyButtons') stickyButtons!: ElementRef

  constructor() {
    this.data$ = this.getPageData()
  }

  scrollToHeader(element: ElementRef) {
    const container = document.querySelector('#sticky-course-container')
    if (!container) return

    const headerOffset = element.nativeElement.offsetTop
    container.scrollTop = headerOffset
  }

  getPageData() {
    return this.route.params.pipe(
      switchMap(params => {
        const loading$ = this.loadingService.loading$
        const course$ = this.courseService.loadCourse(params['category'])
        const lessons$ = this.courseService.loadLessons(params['category'])
        const lesson$ = this.courseService.loadLesson(params['lesson'])
        const requirementsCourses$ = this.courseService.getRequirementsCourses(
          params['category']
        )

        return combineLatest([
          loading$,
          course$,
          lessons$,
          lesson$,
          requirementsCourses$
        ]).pipe(
          map(([loading, course, lessons, lesson, requirementsCourses]) => {
            return { loading, course, lessons, lesson, requirementsCourses }
          }),
          tap(({ loading }) => {
            if (loading) return

            setTimeout(() => {
              this.scrollToHeader(this.stickyContent)
              this.scrollToHeader(this.stickyButtons)
            })
          })
        )
      })
    )
  }

  getPercentage(lessons: Lesson[]) {
    return this.courseService.getPercentage(lessons)
  }

  changeContent(content: ContentType) {
    this.content = content
  }

  setActiveLesson(lesson: Lesson) {
    this.courseService.setActiveLesson(lesson)
  }
}
