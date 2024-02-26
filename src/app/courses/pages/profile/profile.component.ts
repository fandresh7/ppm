import { Component, inject } from '@angular/core'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { Observable, combineLatest, map } from 'rxjs'

import { Participant } from '@superlikers/models/participant'
import { ParticipantService } from '@participant/services/participant.service'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'
import { AvatarComponent } from '@participant/components/avatar/avatar.component'
import { Course } from '@courses/logic/models/courses'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { CoursesSliderComponent } from '@courses/components/sliders/courses-slider/courses-slider.component'
import { CertificateSliderComponent } from '@courses/components/sliders/certificate-slider/certificate-slider.component'
import { ProfileCustomSliderOptions } from '@courses/utils/swipers'
import { BadgesSliderComponent } from '@courses/components/sliders/badges-slider/badges-slider.component'

interface PageData {
  participant: Participant
  inProgressCourses: Course[]
  completeCourses: Course[]
  loading: boolean
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CertificateCardComponent,
    AvatarComponent,
    CoursesSliderComponent,
    CertificateSliderComponent,
    BadgesSliderComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  participantService = inject(ParticipantService)
  loadingService = inject(LoadingService)
  levelsStore = inject(LevelsStore)

  data$!: Observable<PageData>
  swiperOptions = ProfileCustomSliderOptions

  constructor() {
    this.data$ = combineLatest([
      this.participantService.participant$,
      this.levelsStore.getInProgressCourses(),
      this.levelsStore.getCompleteCourses(),
      this.loadingService.loading$
    ]).pipe(
      map(([participant, courses, completeCourses, loading]) => {
        return {
          participant,
          inProgressCourses: courses,
          completeCourses,
          loading
        }
      })
    )
  }
}
