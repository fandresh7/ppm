import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  inject
} from '@angular/core'

import Swiper from 'swiper'

import { pilarsSliderOptions } from '@courses/utils/swipers'
import { LevelsService } from '@courses/services/levels.service'

@Component({
  selector: 'app-pilar-slider',
  standalone: true,

  templateUrl: './pilar-slider.component.html',
  styleUrl: './pilar-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PilarSliderComponent implements OnInit {
  levelsService = inject(LevelsService)

  @Input() pilars: string[] = []
  @Input() activePilar: string = ''

  @ViewChild('slider', { static: true }) slider!: ElementRef
  swiperInstance!: Swiper

  ngOnInit() {
    this.initializeSlider()
  }

  initializeSlider() {
    this.swiperInstance = Object.assign(
      this.slider.nativeElement,
      pilarsSliderOptions
    )

    this.slider.nativeElement.initialize()
  }

  selectPilar(pilar: string) {
    this.levelsService.activePilar = pilar
  }
}
