import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizCapexMazsiveComponent } from './quiz-capex-mazsive.component'

describe('QuizCapexMazsiveComponent', () => {
  let component: QuizCapexMazsiveComponent
  let fixture: ComponentFixture<QuizCapexMazsiveComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizCapexMazsiveComponent]
    })
    fixture = TestBed.createComponent(QuizCapexMazsiveComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
