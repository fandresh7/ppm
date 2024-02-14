import { Routes } from '@angular/router'
import { authGuard } from '@auth/guards/auth/auth.guard'
import { publicGuard } from '@auth/guards/public/public.guard'
import { CompleteSignupPageComponent } from '@auth/pages/complete-signup-page/complete-signup-page.component'
import { PendingAcceptanceComponent } from '@auth/pages/pending-acceptance/pending-acceptance.component'
import { VerifyEmailPageComponent } from '@auth/pages/verify-email-page/verify-email-page.component'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./courses/courses.routes').then(m => m.routes),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.routes),
    canActivate: [publicGuard]
  },
  {
    path: 'complete_signup',
    component: CompleteSignupPageComponent
  },
  {
    path: 'verify_email',
    component: VerifyEmailPageComponent
  },
  {
    path: 'pending_acceptance',
    component: PendingAcceptanceComponent
  }
]
