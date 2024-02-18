import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core'

import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types'

import { Course } from '@courses/logic/models/courses'
import { defaultOptions } from '@courses/utils/swipers'

@Component({
  selector: 'app-certificate-slider',
  standalone: true,
  imports: [],
  templateUrl: './certificate-slider.component.html',
  styleUrl: './certificate-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificateSliderComponent implements OnInit {
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
