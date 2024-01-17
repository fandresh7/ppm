import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizVclComponent } from './quiz-vcl.component'

describe('QuizVclComponent', () => {
  let component: QuizVclComponent
  let fixture: ComponentFixture<QuizVclComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizVclComponent]
    })
    fixture = TestBed.createComponent(QuizVclComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
