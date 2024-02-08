import { AsyncPipe } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'

import { Observable, combineLatest, map } from 'rxjs'

import { AccordionItemComponent } from '@courses/components/accordion-item/accordion-item.component'
import { Level } from '@courses/logic/models/levels'
import { LevelsService } from '@courses/services/levels.service'
import { LoadingService } from '@shared/loading/loading.service'
import { LoadingAccordionItemComponent } from '@courses/components/loading/loading-accordion-item/loading-accordion-item.component'

@Component({
  selector: 'app-course-accordion',
  standalone: true,
  imports: [AsyncPipe, AccordionItemComponent, LoadingAccordionItemComponent],
  templateUrl: './course-accordion.component.html',
  styleUrl: './course-accordion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseAccordionComponent {
  levelsService = inject(LevelsService)
  loadingService = inject(LoadingService)

  data$!: Observable<{ loading: boolean; activeLevel: Level | null }>

  constructor() {
    this.data$ = combineLatest([
      this.loadingService.loading$,
      this.levelsService.activeLevel$
    ]).pipe(
      map(([loading, activeLevel]) => {
        return { loading, activeLevel }
      })
    )
  }
}
