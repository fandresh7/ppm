import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PendingAcceptanceComponent } from './pending-acceptance.component'

describe('PendingAcceptanceComponent', () => {
  let component: PendingAcceptanceComponent
  let fixture: ComponentFixture<PendingAcceptanceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingAcceptanceComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PendingAcceptanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
