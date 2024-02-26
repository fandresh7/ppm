import { AsyncPipe } from '@angular/common'
import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router'

import {
  Observable,
  Subscription,
  debounceTime,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs'

import { SessionService } from '@auth/services/session.service'
import { VerifyEmailService } from '@auth/services/verify-email.service'
import { ParticipantService } from '@participant/services/participant.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'

@Component({
  selector: 'app-verify-email-page',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, SubmitButtonComponent],
  templateUrl: './verify-email-page.component.html',
  styleUrl: './verify-email-page.component.css'
})
export class VerifyEmailPageComponent implements OnInit, OnDestroy {
  router = inject(Router)
  fb = inject(FormBuilder)

  sessionService = inject(SessionService)
  verifyEmailService = inject(VerifyEmailService)
  participantService = inject(ParticipantService)

  email$!: Observable<string>

  loading = false
  showForm: 'sendTokenForm' | 'resendCodeForm' = 'sendTokenForm'

  sendTokenFormError = ''
  sendTokenForm: FormGroup = this.fb.group({
    token: ['', Validators.required]
  })

  resendCodeFormError = ''
  resendCodeForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  validateTokenSubscription!: Subscription
  participantSubscription!: Subscription

  constructor() {
    this.participantSubscription = this.participantService
      .loadParticipant()
      .subscribe(participant => {
        this.participantService.participant = participant.participation
      })

    this.email$ = this.participantService.participant$.pipe(
      tap(participant =>
        this.resendCodeForm.controls['email'].setValue(participant.email)
      ),
      map(participant => participant.email)
    )
  }

  ngOnInit() {
    this.validateTokenSubscription = this.validateToken().subscribe()
  }

  ngOnDestroy() {
    this.validateTokenSubscription.unsubscribe()
    this.participantSubscription.unsubscribe()
  }

  validateToken() {
    return this.sendTokenForm.valueChanges.pipe(
      debounceTime(300),
      map(formValue => formValue.token),
      filter(token => !!token),
      switchMap(token => {
        return this.verifyEmailService.validateToken(token)
      })
    )
  }

  resendCode() {
    if (this.resendCodeForm.invalid) {
      this.resendCodeForm.markAllAsTouched()
      return
    }

    this.loading = true
    const email = this.resendCodeForm.value.email.trim()

    this.verifyEmailService.resendCode(email).subscribe({
      next: response => {
        this.loading = false

        if (response.state === 'success') {
          this.switchFrom()
        } else {
          this.resendCodeFormError = response.message
        }
      },
      error: () => {
        this.loading = false
        this.resendCodeFormError = 'Ha ocurrido un error. Inténtelo más tarde.'
      }
    })
  }

  sendToken() {
    if (this.sendTokenForm.invalid) {
      this.sendTokenForm.markAllAsTouched()
      return
    }

    this.loading = true
    const token = this.sendTokenForm.value.token.trim()

    this.verifyEmailService.sendToken(token).subscribe({
      next: response => {
        this.loading = false

        if (response.state === 'success') {
          this.router.navigate(['/home'])
        } else {
          this.sendTokenFormError = response.message
        }
      },
      error: () => {
        this.loading = false
        this.sendTokenFormError = 'Ha ocurrido un error. Inténtelo más tarde.'
      }
    })
  }

  logout() {
    this.sessionService.logout().subscribe(() => {
      this.router.navigate(['/auth', 'login'])
    })
  }

  switchFrom() {
    if (this.showForm === 'sendTokenForm') {
      this.showForm = 'resendCodeForm'
    } else {
      this.showForm = 'sendTokenForm'
    }
  }
}
