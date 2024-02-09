import { Component, Input, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'

import { Lesson, LessonType } from '@courses/logic/models/lessons'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'
import { DownloadButtonComponent } from '../download-button/download-button.component'

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  imports: [FavoriteButtonComponent, DownloadButtonComponent, RouterLink],
  templateUrl: './lesson-card.component.html',
  styleUrl: './lesson-card.component.css'
})
export class LessonCardComponent {
  @Input() lesson!: Lesson

  router = inject(Router)

  showDuration() {
    const { type } = this.lesson
    return type === LessonType.Video
  }

  get duration() {
    const { type, VideoContent } = this.lesson
    if (type === LessonType.Video) return VideoContent?.duration

    return 0
  }
}
