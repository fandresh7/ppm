import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { map, tap } from 'rxjs'

import { ParticipantService } from '@participant/services/participant.service'

export const authGuard: CanActivateFn = () => {
  const participantService = inject(ParticipantService)
  const router = inject(Router)

  return participantService.loadParticipant().pipe(
    map(SConfig => SConfig.participation),
    tap(participant => {
      participantService.participant = participant
    }),
    map(participant => {
      if (!participant.authenticated) {
        router.navigate(['/auth', 'login'])
      }

      return true
    })
  )
}
