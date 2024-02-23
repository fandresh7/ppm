import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CourseStateCardComponent } from './course-state-card.component'

describe('CourseStateCardComponent', () => {
  let component: CourseStateCardComponent
  let fixture: ComponentFixture<CourseStateCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseStateCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CourseStateCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
