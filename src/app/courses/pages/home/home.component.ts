import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core'
import { Router } from '@angular/router'
import { AsyncPipe } from '@angular/common'

import Swiper from 'swiper'
import { Observable, tap } from 'rxjs'

import { CoursesService } from '@courses/services/courses.service'
import { homeSliderOptions } from '@courses/utils/swipers'
import { Level } from '@courses/logic/models/levels'
import { LevelCardComponent } from '@courses/components/level-card/level-card.component'
import { AccordionItemComponent } from '@courses/components/accordion-item/accordion-item.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionItemComponent, AsyncPipe, LevelCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  router = inject(Router)
  coursesService = inject(CoursesService)

  @ViewChild('slider', { static: true }) slider!: ElementRef
  swiperInstance!: Swiper

  levels$: Observable<Level[]>
  activeLevel: Level | null = null

  constructor() {
    this.levels$ = this.coursesService.levels$.pipe(
      tap(levels => {
        if (levels.length === 0) return

        this.setActiveLevel(levels[0])
        this.initializeSlider()
      })
    )
  }

  setActiveLevel(level: Level) {
    this.activeLevel = level
  }

  initializeSlider() {
    this.swiperInstance = Object.assign(
      this.slider.nativeElement,
      homeSliderOptions
    )

    this.slider.nativeElement.initialize()
  }
}
