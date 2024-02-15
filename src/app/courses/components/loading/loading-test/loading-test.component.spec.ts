import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingTestComponent } from './loading-test.component'

describe('LoadingTestComponent', () => {
  let component: LoadingTestComponent
  let fixture: ComponentFixture<LoadingTestComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingTestComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
