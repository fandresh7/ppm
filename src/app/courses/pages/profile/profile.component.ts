import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Observable, tap } from 'rxjs'

import { Participant } from '@superlikers/models/participant'
import { ParticipantService } from '@participant/services/participant.service'
import { Course } from '@courses/logic/models/courses'
import { CoursesService } from '@courses/services/courses.service'
import { completeCoursesSliderOptions } from '@courses/utils/swipers'
import { CertificateCardComponent } from '@courses/components/certificate-card/certificate-card.component'
import { AvatarComponent } from '@participant/components/avatar/avatar.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CertificateCardComponent, AvatarComponent, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponent {
  participantService = inject(ParticipantService)
  coursesService = inject(CoursesService)

  completeCourses$!: Observable<Course[]>

  participant$: Observable<Participant>

  @ViewChild('completeCoursesSlide', { static: true })
  completeCoursesSlide!: ElementRef

  constructor() {
    this.participant$ = this.participantService.participant$

    this.completeCourses$ = this.coursesService
      .getCompleteCourses()
      .pipe(tap(() => this.initializeCompleteCoursesSlide()))
  }

  initializeCompleteCoursesSlide() {
    Object.assign(
      this.completeCoursesSlide.nativeElement,
      completeCoursesSliderOptions
    )

    this.completeCoursesSlide.nativeElement.initialize()
  }
}
