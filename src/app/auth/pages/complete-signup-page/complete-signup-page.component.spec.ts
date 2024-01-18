import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CompleteSignupPageComponent } from './complete-signup-page.component'

describe('CompleteSignupPageComponent', () => {
  let component: CompleteSignupPageComponent
  let fixture: ComponentFixture<CompleteSignupPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteSignupPageComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CompleteSignupPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
