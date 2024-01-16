import { AsyncPipe, CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { RouterLink } from '@angular/router'

import { Observable, tap } from 'rxjs'

import { SessionService } from '@auth/services/session.service'
import { Field } from '@superlikers/models/inputs'
import { FormComponent } from '@shared/features/auth-forms/form.component'
import { FormService } from '@shared/features/auth-forms/services/form.service'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormComponent, AsyncPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  fb = inject(FormBuilder)
  sessionService = inject(SessionService)
  formService = inject(FormService)

  fields$: Observable<Field[]>
  errorMessage = ''
  loading = false

  constructor() {
    this.fields$ = this.sessionService.loginForm().pipe(
      tap(fields => {
        this.formService.initializeForm(fields, false)
      })
    )
  }

  login(data: Record<string, string>) {
    this.errorMessage = ''

    const participant = { participation: data }

    this.loading = true
    this.sessionService.login(participant).subscribe(response => {
      const { state, message, code_error } = response
      this.loading = false

      if (state === 'success') {
        console.log('redirect to home')
        return
      }

      if (code_error === 140) {
        console.log('redirect to verify email')
        return
      } else {
        this.errorMessage = message
      }
    })
  }
}
