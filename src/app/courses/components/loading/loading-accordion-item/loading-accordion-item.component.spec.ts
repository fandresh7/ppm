import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingAccordionItemComponent } from './loading-accordion-item.component'

describe('LoadingAccordionItemComponent', () => {
  let component: LoadingAccordionItemComponent
  let fixture: ComponentFixture<LoadingAccordionItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingAccordionItemComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingAccordionItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
