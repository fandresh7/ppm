import { Injectable } from '@angular/core'

import { defer, first } from 'rxjs'

import { getLoginForm, login } from '@superlikers/api/session'
import { signup, signupForm } from '@superlikers/api/registration'
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
}
