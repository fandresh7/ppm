import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { Component, Inject } from '@angular/core'
import { Lesson } from '@courses/logic/models/lessons'
import { VideoComponent } from '../video/video.component'

@Component({
  selector: 'app-video-attempt-modal',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './video-attempt-modal.component.html',
  styleUrl: './video-attempt-modal.component.css'
})
export class VideoAttemptModalComponent {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: { lesson: Lesson }
  ) {}

  closeModal() {
    this.dialogRef.close()
  }
}
