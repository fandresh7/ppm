import { TestBed } from '@angular/core/testing'

import { LevelsStore } from './levels.store'

describe('LevelsService', () => {
  let service: LevelsStore

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LevelsStore)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
