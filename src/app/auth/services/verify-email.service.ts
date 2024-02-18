import { Injectable } from '@angular/core'
import { defer } from 'rxjs'

import {
  ValidateEmailToken,
  resetEmailVerifyToken,
  verifyEmail
} from '@superlikers/api/session'

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {
  resendCode(email: string) {
    return defer(() => resetEmailVerifyToken(email))
  }

  validateToken(token: string) {
    return defer(() => ValidateEmailToken(token))
  }

  sendToken(token: string) {
    return defer(() => verifyEmail(token))
  }
}
