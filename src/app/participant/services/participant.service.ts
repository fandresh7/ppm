import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, defer, first, map } from 'rxjs'

import { SessionService } from '@auth/services/session.service'
import { getParticipant } from '@superlikers/api/participant'
import { Participant } from '@superlikers/models/participant'

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  sessionService = inject(SessionService)

  private participantSubject$ = new BehaviorSubject<Participant>(
    {} as Participant
  )

  participant$ = this.participantSubject$.asObservable()

  get participant() {
    return this.participantSubject$.getValue()
  }

  set participant(participant: Participant) {
    this.participantSubject$.next(participant)
  }

  loadParticipant() {
    return defer(() => getParticipant()).pipe(first())
  }

  updateAvatar(url: string) {
    const participant = this.participantSubject$.getValue()

    const data = { participation: { avatar: url } }

    this.sessionService
      .update(data)
      .pipe(
        first(),
        map(() => {
          const newParticipant = structuredClone(participant)
          newParticipant.avatar = url

          this.participant = newParticipant
        })
      )
      .subscribe()
  }
}
