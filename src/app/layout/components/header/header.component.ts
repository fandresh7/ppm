import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Observable } from 'rxjs'

import { ParticipantService } from '@participant/services/participant.service'
import { Participant } from '@superlikers/models/participant'
import { AvatarComponent } from '@participant/components/avatar/avatar.component'
import { AsyncPipe } from '@angular/common'
import { NotificationListComponent } from '@shared/notifications/components/notification-list/notification-list.component'
import { SearchComponent } from '@courses/components/search/search.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    AvatarComponent,
    AsyncPipe,
    NotificationListComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  participantService = inject(ParticipantService)

  participant$: Observable<Participant>

  constructor() {
    this.participant$ = this.participantService.participant$
  }
}
