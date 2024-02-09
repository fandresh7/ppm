import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ScrollingModule } from '@angular/cdk/scrolling'

import { Observable, combineLatest, debounceTime, map, switchMap } from 'rxjs'

import { Lesson } from '@courses/logic/models/lessons'
import { LessonCardComponent } from '../lesson-card/lesson-card.component'
import { LevelsStore } from '@courses/store/levels.store'
import { Glossary } from '@courses/logic/models/glossary'
import { GlossaryService } from '@courses/services/glossary.service'
import { GlossaryCardComponent } from '../glossary-card/glossary-card.component'

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LessonCardComponent,
    AsyncPipe,
    JsonPipe,
    GlossaryCardComponent,
    ScrollingModule
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css'
})
export class SearchModalComponent implements OnInit {
  fb = inject(FormBuilder)
  levelsStore = inject(LevelsStore)
  glossaryService = inject(GlossaryService)

  data$!: Observable<{ lessons: Lesson[]; glossary: Glossary[] }>

  form: FormGroup = this.fb.group({
    search: ''
  })

  ngOnInit() {
    this.data$ = this.form.valueChanges.pipe(
      debounceTime(500),
      switchMap(({ search }) => {
        const lessons$ = this.levelsStore.getSearchLessons(search)
        const glossary$ = this.glossaryService.searchByQuery(search)

        return combineLatest([lessons$, glossary$]).pipe(
          map(([lessons, glossary]) => {
            return { lessons, glossary }
          })
        )
      })
    )
  }

  checkSearchValue() {
    const searchInput = this.form.get('search')?.value
    return searchInput === null || searchInput === ''
  }

  reset() {
    this.form.reset()
  }
}
