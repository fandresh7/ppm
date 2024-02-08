import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core'

import { AsyncPipe } from '@angular/common'
import { Observable, combineLatest, map } from 'rxjs'
import Swiper from 'swiper'

import { homeSliderOptions } from '@courses/utils/swipers'
import { LoadingService } from '@shared/loading/loading.service'
import { LevelsStore } from '@courses/store/levels.store'
import { Level } from '@courses/logic/models/levels'
import { LevelCardComponent } from '@courses/components/level-card/level-card.component'
import { LoadingCardComponent } from '@courses/components/loading/loading-card/loading-card.component'
import { LevelsService } from '@courses/services/levels.service'

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe, LevelCardComponent, LoadingCardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent implements OnInit {
  levelsStore = inject(LevelsStore)
  levelsService = inject(LevelsService)
  loadingService = inject(LoadingService)

  @ViewChild('slider', { static: true }) slider!: ElementRef
  swiperInstance!: Swiper

  data$!: Observable<{ loading: boolean; levels: Level[] }>

  constructor() {
    this.data$ = combineLatest([
      this.loadingService.loading$,
      this.levelsStore.levels$
    ]).pipe(
      map(([loading, levels]) => {
        this.levelsService.activeLevel = levels[0]
        return { loading, levels }
      })
    )
  }

  ngOnInit() {
    this.initializeSlider()
  }

  initializeSlider() {
    this.swiperInstance = Object.assign(
      this.slider.nativeElement,
      homeSliderOptions
    )

    this.slider.nativeElement.initialize()
  }
}
