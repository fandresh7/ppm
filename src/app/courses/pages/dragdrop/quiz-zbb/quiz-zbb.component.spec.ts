import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizZbbComponent } from './quiz-zbb.component'

describe('QuizZbbComponent', () => {
  let component: QuizZbbComponent
  let fixture: ComponentFixture<QuizZbbComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizZbbComponent]
    })
    fixture = TestBed.createComponent(QuizZbbComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
