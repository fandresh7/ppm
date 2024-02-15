import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingCourseComponent } from './loading-course.component'

describe('LoadingCourseComponent', () => {
  let component: LoadingCourseComponent
  let fixture: ComponentFixture<LoadingCourseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCourseComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingCourseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
