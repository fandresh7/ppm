import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { Observable, combineLatest, map } from 'rxjs'

import { NewsPpmComponent } from '@courses/components/adds/news-ppm/news-ppm.component'
import { Course } from '@courses/logic/models/courses'
import { LevelsService } from '@courses/services/levels.service'
import { PilarSliderComponent } from '@courses/components/sliders/pilar-slider/pilar-slider.component'
import { LevelSelectionComponent } from '@courses/components/level-selection/level-selection.component'
import { LoadingService } from '@shared/loading/loading.service'
import { CoursesAccordionComponent } from '@courses/components/courses-accordion/courses-accordion.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CoursesAccordionComponent,
    AsyncPipe,
    NewsPpmComponent,
    PilarSliderComponent,
    LevelSelectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  levelsService = inject(LevelsService)
  loadingService = inject(LoadingService)

  data$!: Observable<{
    courses: Course[]
    pilars: string[]
    activePilar: string
    loading: boolean
  }>

  constructor() {
    this.data$ = combineLatest([
      this.levelsService.activeCourses$,
      this.levelsService.getPilars(),
      this.levelsService.activePilar$,
      this.loadingService.loading$
    ]).pipe(
      map(([courses, pilars, activePilar, loading]) => {
        return { courses, pilars, activePilar, loading }
      })
    )
  }
}
