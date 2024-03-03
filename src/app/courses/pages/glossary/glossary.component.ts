import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { AsyncPipe } from '@angular/common'

import { Observable, Subscription, debounceTime, tap } from 'rxjs'

import { Glossary } from '@courses/logic/models/glossary'
import { GlossaryService } from '@courses/services/glossary.service'
import { GlossaryCardComponent } from '@courses/components/glossary-card/glossary-card.component'
import { alphabet } from '@courses/logic/data/glossary'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [ReactiveFormsModule, GlossaryCardComponent, AsyncPipe],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.css'
})
export class GlossaryComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder)
  GlossaryService = inject(GlossaryService)

  letters = alphabet
  activeLetter = ''

  glossaryItems$!: Observable<Glossary[]>

  form: FormGroup = this.fb.group({
    search: ''
  })

  subscription!: Subscription

  constructor() {
    this.glossaryItems$ = this.GlossaryService.loadGlossary()
  }

  ngOnInit() {
    this.subscription = this.form.valueChanges
      .pipe(
        debounceTime(500),
        tap(({ search }) => this.searchByQuery(search))
      )
      .subscribe()
  }

  filter(letter: string) {
    if (this.activeLetter === letter) {
      this.searchByQuery('')
    } else {
      this.activeLetter = letter
      this.glossaryItems$ = this.GlossaryService.filter(letter)
    }
  }

  searchByQuery(search: string) {
    this.activeLetter = ''
    this.glossaryItems$ = this.GlossaryService.searchByQuery(search)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
