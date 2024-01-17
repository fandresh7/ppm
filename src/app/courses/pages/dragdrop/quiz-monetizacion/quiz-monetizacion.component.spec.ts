import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuizMonetizacionComponent } from './quiz-monetizacion.component'

describe('QuizChampionsComponent', () => {
  let component: QuizMonetizacionComponent
  let fixture: ComponentFixture<QuizMonetizacionComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizMonetizacionComponent]
    })
    fixture = TestBed.createComponent(QuizMonetizacionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
