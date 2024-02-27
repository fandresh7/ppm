import { Component, Input, inject } from '@angular/core'
import { AsyncPipe, NgClass } from '@angular/common'

import { getPercentage } from '@courses/logic/helpers/courses'
import { Lesson } from '@courses/logic/models/lessons'
import { Level } from '@courses/logic/models/levels'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'
import { LevelsService } from '@courses/services/levels.service'

@Component({
  selector: 'app-level-card',
  standalone: true,
  imports: [AsyncPipe, NgClass, RoundedProgressComponent],
  templateUrl: './level-card.component.html',
  styleUrl: './level-card.component.css'
})
export class LevelCardComponent {
  levelsService = inject(LevelsService)

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

  getActiveClasses() {
    // return this.levelsService.isActiveLevel(this.level).pipe(
    //   map(isActive => {
    //     return {
    //       'opacity-100': isActive,
    //       'opacity-50': !isActive
    //     }
    //   })
    // )
  }

  getLevelLessons() {
    const lessons = this.level.courses?.flatMap(course => {
      return course.lessons
    }) as Lesson[]

    return lessons ?? []
  }

  setActiveLevel(level: Level) {
    console.log(level)
    // this.levelsService.activeLevel = level
  }
}
