import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, tap } from 'rxjs'

import { Course } from '@courses/logic/models/courses'
import { CoursesService } from '@courses/services/courses.service'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { certificateSliderOptions } from '@courses/utils/swipers'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertificateCardComponent, BreadcrumbComponent, AsyncPipe],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatesComponent {
  coursesService = inject(CoursesService)

  completeCourses$!: Observable<Course[]>
  inProgressCourses$!: Observable<Course[]>

  @ViewChild('completeCoursesSlide', { static: true })
  completeCoursesSlide!: ElementRef
  @ViewChild('inProgressCoursesSlide', { static: true })
  inProgressCoursesSlide!: ElementRef

  constructor() {
    this.completeCourses$ = this.coursesService
      .getCompleteCourses()
      .pipe(tap(() => this.initializeCompleteCoursesSlide()))

    this.inProgressCourses$ = this.coursesService
      .getInProgressCourses()
      .pipe(tap(() => this.initializeInProgressCoursesSlide()))
  }

  initializeCompleteCoursesSlide() {
    Object.assign(
      this.completeCoursesSlide.nativeElement,
      certificateSliderOptions
    )

    this.completeCoursesSlide.nativeElement.initialize()
  }

  initializeInProgressCoursesSlide() {
    Object.assign(
      this.inProgressCoursesSlide.nativeElement,
      certificateSliderOptions
    )

    this.inProgressCoursesSlide.nativeElement.initialize()
  }
}
