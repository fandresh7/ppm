import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizChampionsComponent } from './quiz-champions.component'

describe('QuizChampionsComponent', () => {
  let component: QuizChampionsComponent
  let fixture: ComponentFixture<QuizChampionsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizChampionsComponent]
    })
    fixture = TestBed.createComponent(QuizChampionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
