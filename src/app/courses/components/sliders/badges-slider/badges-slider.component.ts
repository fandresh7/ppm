import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core'
import { Course } from '@courses/logic/models/courses'
import { defaultOptions } from '@courses/utils/swipers'
import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types'

@Component({
  selector: 'app-badges-slider',
  standalone: true,
  imports: [],
  templateUrl: './badges-slider.component.html',
  styleUrl: './badges-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgesSliderComponent implements OnInit {
  @Input({ required: true }) courses: Course[] = []
  @Input() sliderOptions: SwiperOptions = defaultOptions

  @ViewChild('slider', { static: true }) slider!: ElementRef
  swiperInstance!: Swiper

  ngOnInit() {
    this.initializeSlider()
  }

  initializeSlider() {
    this.swiperInstance = Object.assign(
      this.slider.nativeElement,
      this.sliderOptions
    )

    this.slider.nativeElement.initialize()
  }
}
