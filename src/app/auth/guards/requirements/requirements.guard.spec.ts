import { TestBed } from '@angular/core/testing'
import { CanActivateFn } from '@angular/router'

import { requirementsGuard } from './requirements.guard'

describe('requirementsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => requirementsGuard(...guardParameters))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(executeGuard).toBeTruthy()
  })
})
