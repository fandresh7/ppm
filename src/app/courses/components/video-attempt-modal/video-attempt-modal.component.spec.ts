import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VideoAttemptModalComponent } from './video-attempt-modal.component'

describe('VideoAttemptModalComponent', () => {
  let component: VideoAttemptModalComponent
  let fixture: ComponentFixture<VideoAttemptModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoAttemptModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(VideoAttemptModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
