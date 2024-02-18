import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CertificateSliderComponent } from './certificate-slider.component'

describe('CertificateSliderComponent', () => {
  let component: CertificateSliderComponent
  let fixture: ComponentFixture<CertificateSliderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateSliderComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CertificateSliderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
