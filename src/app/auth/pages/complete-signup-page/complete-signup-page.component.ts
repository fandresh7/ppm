import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { SessionService } from '@auth/services/session.service'
import { ParticipantService } from '@participant/services/participant.service'
import { FormComponent } from '@shared/features/auth-forms/form.component'
import { FormService } from '@shared/features/auth-forms/services/form.service'
import { Field } from '@superlikers/models/inputs'
import { Observable, map, switchMap, tap } from 'rxjs'

@Component({
  selector: 'app-complete-signup-page',
  standalone: true,
  imports: [FormComponent, AsyncPipe],
  templateUrl: './complete-signup-page.component.html',
  styleUrl: './complete-signup-page.component.css'
})
export class CompleteSignupPageComponent {
  router = inject(Router)
  fb = inject(FormBuilder)
  sessionService = inject(SessionService)
  participantService = inject(ParticipantService)
  formService = inject(FormService)

  fields$: Observable<Field[]>
  errorMessage = ''
  isLoading = false

  constructor() {
    this.fields$ = this.participantService.participant$.pipe(
      switchMap(participant => {
        return this.sessionService.signupForm().pipe(
          map(fields => {
            const filteredFields = this.formService.getFilteredFields(fields)
            return filteredFields
          }),
          tap(fields => {
            this.formService.initializeForm(fields)
            this.formService.setFormValues(participant)
          })
        )
      })
    )
  }

  update(data: Record<string, string>) {
    this.isLoading = true

    const participant = { participation: data }

    this.sessionService.update(participant).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/'])
      } else {
        this.isLoading = false
        this.formService.showErrors(response.errors ?? {})
      }
    })
  }
}
