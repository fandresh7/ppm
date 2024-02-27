import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PilarSliderComponent } from './pilar-slider.component'

describe('PilarSliderComponent', () => {
  let component: PilarSliderComponent
  let fixture: ComponentFixture<PilarSliderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilarSliderComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PilarSliderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
