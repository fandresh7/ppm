import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingCertificateCardComponent } from './loading-certificate-card.component'

describe('LoadingCertificateCardComponent', () => {
  let component: LoadingCertificateCardComponent
  let fixture: ComponentFixture<LoadingCertificateCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCertificateCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingCertificateCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
