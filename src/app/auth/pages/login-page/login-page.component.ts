import { AsyncPipe, CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'

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
  router = inject(Router)
  fb = inject(FormBuilder)
  sessionService = inject(SessionService)
  formService = inject(FormService)

  fields$: Observable<Field[]>
  errorMessage = ''
  loading = false

  constructor() {
    this.fields$ = this.sessionService.loginForm().pipe(
      tap(fields => {
        this.formService.initializeForm({ fields, showConfirmFields: false })
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
        this.router.navigate(['/'])
        return
      }

      if (code_error === 140) {
        this.router.navigate(['/complete_signup'])
        return
      } else {
        this.errorMessage = message
      }
    })
  }
}
