import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { getPercentage } from '@courses/logic/helpers/courses'
import { Lesson } from '@courses/logic/models/lessons'
import { Level } from '@courses/logic/models/levels'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'

@Component({
  selector: 'app-level-card',
  standalone: true,
  imports: [CommonModule, RoundedProgressComponent],
  templateUrl: './level-card.component.html',
  styleUrl: './level-card.component.css'
})
export class LevelCardComponent {
  @Input() isActive = false
  @Input() level!: Level

  get lessons() {
    const lessons = this.getLevelLessons()
    return lessons
  }

  get percentage() {
    const lessons = this.getLevelLessons()
    const percentage = getPercentage(lessons) * 100
    return percentage
  }

  get cardBackground() {
    return this.isActive ? 'bg-white' : 'bg-theme-grey-dark'
  }

  get activeClasses() {
    return {
      'opacity-100': this.isActive,
      'opacity-50': !this.isActive
    }
  }

  getLevelLessons() {
    const lessons = this.level.courses?.flatMap(course => {
      return course.lessons
    }) as Lesson[]

    return lessons ?? []
  }
}
