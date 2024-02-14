import { Injectable } from '@angular/core'

import { defer, first } from 'rxjs'

import {
  checkRequirements,
  confirmEmail,
  getLoginForm,
  login,
  logout,
  resendEmail
} from '@superlikers/api/session'

import {
  signup,
  signupForm,
  updateParticipant
} from '@superlikers/api/registration'
import { SignupParams } from '@superlikers/models/registrations'
import { LoginParams } from '@superlikers/models/session'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loginForm() {
    return defer(() => getLoginForm()).pipe(first())
  }

  signupForm() {
    return defer(() => signupForm()).pipe(first())
  }

  login(data: LoginParams) {
    return defer(() => login(data)).pipe(first())
  }

  signup(data: SignupParams) {
    return defer(() => signup(data)).pipe(first())
  }

  update(data: SignupParams) {
    return defer(() => updateParticipant(data)).pipe(first())
  }

  logout() {
    return defer(() => logout())
  }

  requirements() {
    return defer(() => checkRequirements())
  }

  confirmEmail(token: string) {
    return defer(() => confirmEmail(token))
  }

  resendCode(email: string) {
    return defer(() => resendEmail(email))
  }
}
