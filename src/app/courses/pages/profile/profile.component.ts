import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Observable } from 'rxjs'

import { Participant } from '@superlikers/models/participant'
import { ParticipantService } from '@participant/services/participant.service'
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

  participant$: Observable<Participant>

  constructor() {
    this.participant$ = this.participantService.participant$
  }
}
