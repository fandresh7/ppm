import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Dialog } from '@angular/cdk/dialog'
import { Observable, map } from 'rxjs'

import { ParticipantService } from '@participant/services/participant.service'
import { UpdateAvatarModalComponent } from '../update-avatar-modal/update-avatar-modal.component'

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() showEditButton = true
  @Input() size = 'w-32 h-32'

  participantService = inject(ParticipantService)
  avatar$: Observable<string>

  defaultAvatar =
    'https://superlikers-themes.s3.amazonaws.com/ppmu/user-profile.png'

  constructor(public dialog: Dialog) {
    this.avatar$ = this.participantService.participant$.pipe(
      map(participant => {
        const { avatar } = participant

        return avatar || this.defaultAvatar
      })
    )
  }

  openDialog() {
    this.dialog.open(UpdateAvatarModalComponent, {
      autoFocus: 'container',
      maxWidth: '600px'
    })
  }
}
