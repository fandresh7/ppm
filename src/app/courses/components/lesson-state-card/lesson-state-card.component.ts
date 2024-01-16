import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

import { getLessonStatus } from '@courses/logic/helpers/courses'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { StatusBadgeComponent } from '../status-badge/status-badge.component'
import { DownloadButtonComponent } from '../download-button/download-button.component'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'

@Component({
  selector: 'app-lesson-state-card',
  standalone: true,
  imports: [
    RouterModule,
    StatusBadgeComponent,
    DownloadButtonComponent,
    FavoriteButtonComponent
  ],
  templateUrl: './lesson-state-card.component.html',
  styleUrl: './lesson-state-card.component.css'
})
export class LessonStateCardComponent {
  @Input() lesson!: Lesson
  @Input() showStatusBadge = true
  @Input() active = false

  get status() {
    return getLessonStatus(this.lesson)
  }

  get showStatusText() {
    const lessonStatus = getLessonStatus(this.lesson)
    return lessonStatus === LessonStatus.Done
  }

  preventRouteChange(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }
}
