import { Component } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { AccordionItemComponent } from '@courses/components/accordion-item/accordion-item.component'
import { SliderComponent } from './components/slider/slider.component'
import { CourseAccordionComponent } from './components/course-accordion/course-accordion.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccordionItemComponent,
    AsyncPipe,
    SliderComponent,
    CourseAccordionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
