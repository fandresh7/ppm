import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewsPpmComponent } from './news-ppm.component'

describe('NewsPpmComponent', () => {
  let component: NewsPpmComponent
  let fixture: ComponentFixture<NewsPpmComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPpmComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(NewsPpmComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
