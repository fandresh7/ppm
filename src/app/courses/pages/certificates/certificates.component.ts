import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, combineLatest, map } from 'rxjs'
import Swiper from 'swiper'

import { Course } from '@courses/logic/models/courses'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { certificateSliderOptions } from '@courses/utils/swipers'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { LoadingCertificateCardComponent } from '@courses/components/loading/loading-certificate-card/loading-certificate-card.component'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CertificateCardComponent,
    BreadcrumbComponent,
    AsyncPipe,
    LoadingCertificateCardComponent
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatesComponent implements OnInit {
  levelsStore = inject(LevelsStore)
  loadingService = inject(LoadingService)

  completeCoursesSwiperInstance!: Swiper
  @ViewChild('completeCoursesSlide', { static: true })
  completeCoursesSlide!: ElementRef

  inProgressCoursesSwiperInstance!: Swiper
  @ViewChild('inProgressCoursesSlide', { static: true })
  inProgressCoursesSlide!: ElementRef

  data$!: Observable<{
    completeCourses: Course[]
    inProgressCourses: Course[]
    loading: boolean
  }>

  constructor() {
    this.data$ = combineLatest([
      this.levelsStore.getCompleteCourses(),
      this.levelsStore.getInProgressCourses(),
      this.loadingService.loading$
    ]).pipe(
      map(([completeCourses, inProgressCourses, loading]) => {
        return { completeCourses, inProgressCourses, loading }
      })
    )
  }

  ngOnInit() {
    this.initializeCompleteCoursesSlide()
    this.initializeInProgressCoursesSlide()
  }

  initializeCompleteCoursesSlide() {
    this.completeCoursesSwiperInstance = Object.assign(
      this.completeCoursesSlide.nativeElement,
      certificateSliderOptions
    )

    this.completeCoursesSlide.nativeElement.initialize()
  }

  initializeInProgressCoursesSlide() {
    this.inProgressCoursesSwiperInstance = Object.assign(
      this.inProgressCoursesSlide.nativeElement,
      certificateSliderOptions
    )

    this.inProgressCoursesSlide.nativeElement.initialize()
  }
}
