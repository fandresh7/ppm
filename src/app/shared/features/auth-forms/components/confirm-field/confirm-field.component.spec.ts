import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConfirmFieldComponent } from './confirm-field.component'

describe('ConfirmFieldComponent', () => {
  let component: ConfirmFieldComponent
  let fixture: ComponentFixture<ConfirmFieldComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmFieldComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ConfirmFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
