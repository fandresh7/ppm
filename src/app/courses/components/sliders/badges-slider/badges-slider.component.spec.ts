import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BadgesSliderComponent } from './badges-slider.component'

describe('BadgesSliderComponent', () => {
  let component: BadgesSliderComponent
  let fixture: ComponentFixture<BadgesSliderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesSliderComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(BadgesSliderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
