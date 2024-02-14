import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router'
import { SessionService } from '@auth/services/session.service'
import { ParticipantService } from '@participant/services/participant.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { Observable, map, tap } from 'rxjs'

@Component({
  selector: 'app-verify-email-page',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, SubmitButtonComponent],
  templateUrl: './verify-email-page.component.html',
  styleUrl: './verify-email-page.component.css'
})
export class VerifyEmailPageComponent {
  router = inject(Router)
  fb = inject(FormBuilder)

  sessionService = inject(SessionService)
  participantService = inject(ParticipantService)

  email$!: Observable<string>

  loading = false
  showForm: 'sendCodeForm' | 'resetForm' = 'sendCodeForm'

  sendCodeform: FormGroup = this.fb.group({
    token: ['', Validators.required]
  })

  resetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  constructor() {
    this.email$ = this.participantService.participant$.pipe(
      tap(participant =>
        this.resetForm.controls['email'].setValue(participant.email)
      ),
      map(participant => participant.email)
    )
  }

  logout() {
    this.sessionService.logout().subscribe(() => {
      this.router.navigate(['/auth', 'login'])
    })
  }

  switchFrom() {
    this.showForm = 'resetForm'
  }

  sendCode() {
    if (this.sendCodeform.invalid) {
      this.sendCodeform.markAllAsTouched()
      return
    }

    this.loading = true
    const token = this.sendCodeform.value.token.trim()

    this.sessionService.confirmEmail(token).subscribe(response => {
      console.log({ sendcode: response })
      this.loading = false
    })
  }

  cancel() {}

  resendEmail() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched()
      return
    }

    this.loading = true
    const email = this.resetForm.value.email.trim()

    this.sessionService.resendCode(email).subscribe(response => {
      console.log({ resendEmail: response })
      this.loading = false
    })
  }
}
