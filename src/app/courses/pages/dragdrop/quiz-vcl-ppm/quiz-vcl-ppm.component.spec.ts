import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizVclPpmComponent } from './quiz-vcl-ppm.component'

describe('QuizVclPpmComponent', () => {
  let component: QuizVclPpmComponent
  let fixture: ComponentFixture<QuizVclPpmComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizVclPpmComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(QuizVclPpmComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
