import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, combineLatest, map } from 'rxjs'

import { Course } from '@courses/logic/models/courses'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { CoursesSliderComponent } from '@courses/components/sliders/courses-slider/courses-slider.component'
import { certificateCoursesSliderOptions } from '@courses/utils/swipers'
import { LoadingCertificateComponent } from '@courses/components/loading/loading-certificate/loading-certificate.component'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CertificateCardComponent,
    BreadcrumbComponent,
    AsyncPipe,
    CoursesSliderComponent,
    LoadingCertificateComponent
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatesComponent {
  levelsStore = inject(LevelsStore)
  loadingService = inject(LoadingService)

  coursesSwiperOptions = certificateCoursesSliderOptions

  data$!: Observable<{
    completeCourses: Course[]
    totalCourses: Course[]
    loading: boolean
  }>

  constructor() {
    this.data$ = combineLatest([
      this.levelsStore.getCompleteCourses(),
      this.levelsStore.getAllCourses(),
      this.loadingService.loading$
    ]).pipe(
      map(([completeCourses, totalCourses, loading]) => {
        return { completeCourses, totalCourses, loading }
      })
    )
  }
}
