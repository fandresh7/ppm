import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'

import { Observable, map, tap } from 'rxjs'

import { RequirementComponent } from '@auth/components/requirement/requirement.component'
import { SessionService } from '@auth/services/session.service'
import { FormComponent } from '@shared/features/auth-forms/form.component'
import { FormService } from '@shared/features/auth-forms/services/form.service'
import { Field } from '@superlikers/models/inputs'

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormComponent, RequirementComponent, AsyncPipe],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  router = inject(Router)
  fb = inject(FormBuilder)
  sessionService = inject(SessionService)
  formService = inject(FormService)

  fields$: Observable<Field[]>
  loading = false

  constructor() {
    this.fields$ = this.sessionService.signupForm().pipe(
      map(fields => {
        const filteredFields = this.formService.getFilteredFields(fields)
        return filteredFields
      }),
      tap(fields => this.formService.initializeForm(fields))
    )
  }

  signup(data: Record<string, string>) {
    this.loading = true

    const participant = { participation: data }

    this.sessionService.signup(participant).subscribe(response => {
      this.loading = false
      if (response.state === 'error') {
        this.formService.showErrors(response.errors ?? {})
      } else {
        this.router.navigate(['/'])
      }
    })
  }
}
