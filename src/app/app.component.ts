import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ParticipantService } from '@participant/services/participant.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {
  title = 'ppm'
  participantService = inject(ParticipantService)

  constructor() {
    this.participantService.loadParticipant().subscribe(participant => {
      this.participantService.participant = participant.participation
    })
  }
}
