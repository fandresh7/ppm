import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InfografiaComponent } from './infografia.component'

describe('InfografiaComponent', () => {
  let component: InfografiaComponent
  let fixture: ComponentFixture<InfografiaComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfografiaComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InfografiaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
