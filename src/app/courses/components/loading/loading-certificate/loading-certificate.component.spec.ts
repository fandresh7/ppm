import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingCertificateComponent } from './loading-certificate.component'

describe('LoadingCertificateComponent', () => {
  let component: LoadingCertificateComponent
  let fixture: ComponentFixture<LoadingCertificateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCertificateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingCertificateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
