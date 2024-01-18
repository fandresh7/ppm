import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { map } from 'rxjs'

import { SessionService } from '../../services/session.service'

export const requirementsGuard: CanActivateFn = () => {
  const sessionService = inject(SessionService)
  const router = inject(Router)

  return sessionService.requirements().pipe(
    map(result => {
      const { allowed, redirect_page } = result

      if (!allowed) {
        router.navigate([redirect_page])
      }

      return true
    })
  )
}
