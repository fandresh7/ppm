import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizVclPpm2Component } from './quiz-vcl-ppm2.component'

describe('QuizVclPpm2Component', () => {
  let component: QuizVclPpm2Component
  let fixture: ComponentFixture<QuizVclPpm2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizVclPpm2Component]
    }).compileComponents()

    fixture = TestBed.createComponent(QuizVclPpm2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
