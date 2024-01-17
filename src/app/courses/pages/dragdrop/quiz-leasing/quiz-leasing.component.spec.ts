import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizLeasingComponent } from './quiz-leasing.component'

describe('QuizLeasingComponent', () => {
  let component: QuizLeasingComponent
  let fixture: ComponentFixture<QuizLeasingComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizLeasingComponent]
    })
    fixture = TestBed.createComponent(QuizLeasingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
