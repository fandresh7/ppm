import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingMemoryComponent } from './loading-memory.component'

describe('LoadingMemoryComponent', () => {
  let component: LoadingMemoryComponent
  let fixture: ComponentFixture<LoadingMemoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingMemoryComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingMemoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
