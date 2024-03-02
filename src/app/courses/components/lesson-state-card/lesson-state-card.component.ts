import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AsyncPipe } from '@angular/common'

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
    FavoriteButtonComponent,
    AsyncPipe
  ],
  templateUrl: './lesson-state-card.component.html',
  styleUrl: './lesson-state-card.component.css'
})
export class LessonStateCardComponent {
  @Input({ required: true }) lesson!: Lesson
  @Input() last = false
  @Input() first = false
  @Input() isActive = false

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

  getDownloadFile(lesson: Lesson) {
    return (
      lesson.VideoContent?.video || lesson.InfografiaContent?.infografia || ''
    )
  }

  getArticleClasses() {
    const classes: Record<string, boolean> = {
      'bg-theme-green/40': this.isActive,
      'text-white': this.isActive,
      'hover:bg-theme-grey-dark': !this.isActive,
      'before:w-full': !this.last,
      'before:h-[1px]': !this.last,
      'before:bg-white': !this.last,
      'before:absolute': !this.last,
      'before:-bottom-0': !this.last,
      'rounded-t-xl': this.first,
      'rounded-b-xl': this.last
    }

    return classes
  }

  getBottomLine() {
    if (this.last) return ''

    const classes =
      'before:w-full before:h-[1px] before:bg-white before:absolute before:-bottom-4'

    return classes
  }
}
