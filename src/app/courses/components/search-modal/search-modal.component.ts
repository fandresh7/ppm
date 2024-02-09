import { AsyncPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { Observable, debounceTime, tap } from 'rxjs'

import { Lesson } from '@courses/logic/models/lessons'
import { LessonCardComponent } from '../lesson-card/lesson-card.component'
import { LevelsStore } from '@courses/store/levels.store'

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [ReactiveFormsModule, LessonCardComponent, AsyncPipe],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css'
})
export class SearchModalComponent implements OnInit {
  fb = inject(FormBuilder)
  levelsStore = inject(LevelsStore)

  lessons$!: Observable<Lesson[]>

  form: FormGroup = this.fb.group({
    search: ''
  })

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(500),
        tap(({ search }) => {
          if (!search) return
          this.lessons$ = this.levelsStore.getSearchLessons(search)
        })
      )
      .subscribe()
  }

  checkSearchValue() {
    const searchInput = this.form.get('search')?.value
    return searchInput === null || searchInput === ''
  }

  reset() {
    this.form.reset()

    this.lessons$ = this.levelsStore.getSearchLessons('')
  }
}
