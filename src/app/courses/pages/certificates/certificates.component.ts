import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, combineLatest, map } from 'rxjs'

import { Course } from '@courses/logic/models/courses'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { LoadingCertificateCardComponent } from '@courses/components/loading/loading-certificate-card/loading-certificate-card.component'
import { CoursesSliderComponent } from '@courses/components/sliders/courses-slider/courses-slider.component'
import { certificateCoursesSliderOptions } from '@courses/utils/swipers'
import { TooltipDirective } from '@courses/directives/tooltip/tooltip.directive'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CertificateCardComponent,
    BreadcrumbComponent,
    AsyncPipe,
    LoadingCertificateCardComponent,
    CoursesSliderComponent,
    TooltipDirective
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
}
