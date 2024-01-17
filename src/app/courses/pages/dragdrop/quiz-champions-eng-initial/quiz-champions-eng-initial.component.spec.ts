import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizChampionsEngInitialComponent } from './quiz-champions-eng-initial.component'

describe('QuizChampionsEngInitialComponent', () => {
  let component: QuizChampionsEngInitialComponent
  let fixture: ComponentFixture<QuizChampionsEngInitialComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizChampionsEngInitialComponent]
    })
    fixture = TestBed.createComponent(QuizChampionsEngInitialComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
