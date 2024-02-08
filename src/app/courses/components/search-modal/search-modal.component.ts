import { AsyncPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Lesson } from '@courses/logic/models/lessons'
import { CoursesService } from '@courses/services/courses.store'
import { Observable, debounceTime, tap } from 'rxjs'
import { LessonCardComponent } from '../lesson-card/lesson-card.component'

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [ReactiveFormsModule, LessonCardComponent, AsyncPipe],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css'
})
export class SearchModalComponent implements OnInit {
  fb = inject(FormBuilder)
  coursesService = inject(CoursesService)

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
          this.lessons$ = this.coursesService.getSearchLessons(search)
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

    this.lessons$ = this.coursesService.getSearchLessons('')
  }
}
