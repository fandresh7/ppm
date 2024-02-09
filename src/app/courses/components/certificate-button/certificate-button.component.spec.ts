import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CertificateButtonComponent } from './certificate-button.component'

describe('CertificateButtonComponent', () => {
  let component: CertificateButtonComponent
  let fixture: ComponentFixture<CertificateButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateButtonComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CertificateButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
