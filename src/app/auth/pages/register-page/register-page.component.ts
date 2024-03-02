import { AsyncPipe } from '@angular/common'
import { Component, OnDestroy, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'

import { Observable, Subscription, map, tap } from 'rxjs'

import { RequirementComponent } from '@auth/components/requirement/requirement.component'
import { SessionService } from '@auth/services/session.service'
import { FormComponent } from '@shared/features/auth-forms/form.component'
import { FormService } from '@shared/features/auth-forms/services/form.service'
import { Field } from '@superlikers/models/inputs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Conditions = Record<string, Record<string, any[]>>

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormComponent, RequirementComponent, AsyncPipe],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnDestroy {
  router = inject(Router)
  fb = inject(FormBuilder)
  sessionService = inject(SessionService)
  formService = inject(FormService)

  fields$: Observable<Field[]>
  loading = false

  subscription!: Subscription

  fieldsConditions: Conditions = {
    bu: {
      vp: ['Supply', 'logistica']
    }
  }

  constructor() {
    this.fields$ = this.sessionService.signupForm().pipe(
      map(fields => {
        const filteredFields = this.formService.getFilteredFields(fields)
        return filteredFields
      }),
      tap(fields => this.formService.initializeForm({ fields })),
      tap(() => {
        setTimeout(() => {
          this.validateConditions()
        })
      })
    )

    this.subscription = this.validateConditionsOnFormChanges().subscribe()
  }

  validateConditionsOnFormChanges() {
    return this.formService.getForm().valueChanges.pipe(
      tap(() => {
        this.validateConditions()
      })
    )
  }

  validateConditions() {
    const formValues = this.formService.getForm().value
    const conditionsEntries = Object.entries(this.fieldsConditions)

    conditionsEntries.forEach(([key, value]) => {
      const element = document.querySelector(`.wrap-${key}`)
      if (!element) return

      const conditionEntries = Object.entries(value)
      conditionEntries.forEach(([name, conditionValue]) => {
        const formValue = formValues[name]

        if (!conditionValue.includes(formValue)) {
          element.classList.add('hidden')
        } else {
          element.classList.remove('hidden')
        }
      })
    })
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

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
