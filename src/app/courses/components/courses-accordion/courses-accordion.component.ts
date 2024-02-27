import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core'
import { Course } from '@courses/logic/models/courses'
import { AccordionItemComponent } from '../accordion-item/accordion-item.component'

@Component({
  selector: 'app-courses-accordion',
  standalone: true,
  imports: [AccordionItemComponent],
  templateUrl: './courses-accordion.component.html',
  styleUrl: './courses-accordion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesAccordionComponent {
  @Input() courses: Course[] = []
}
