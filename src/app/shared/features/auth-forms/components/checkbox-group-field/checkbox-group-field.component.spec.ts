import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CheckboxGroupFieldComponent } from './checkbox-group-field.component'

describe('CheckboxGroupFieldComponent', () => {
  let component: CheckboxGroupFieldComponent
  let fixture: ComponentFixture<CheckboxGroupFieldComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxGroupFieldComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CheckboxGroupFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
