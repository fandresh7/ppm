import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizVclV2Component } from './quiz-vcl-v2.component'

describe('QuizVclV2Component', () => {
  let component: QuizVclV2Component
  let fixture: ComponentFixture<QuizVclV2Component>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizVclV2Component]
    })
    fixture = TestBed.createComponent(QuizVclV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
