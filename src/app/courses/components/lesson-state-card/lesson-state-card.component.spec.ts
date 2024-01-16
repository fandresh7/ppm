import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LessonStateCardComponent } from './lesson-state-card.component'

describe('LessonStateCardComponent', () => {
  let component: LessonStateCardComponent
  let fixture: ComponentFixture<LessonStateCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonStateCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LessonStateCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
