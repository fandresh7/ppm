import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { Observable, debounceTime, tap } from 'rxjs'

import { Glossary } from '@courses/logic/models/glossary'
import { GlossaryService } from '@courses/services/glossary.service'
import { GlossaryCardComponent } from '@courses/components/glossary-card/glossary-card.component'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [ReactiveFormsModule, GlossaryCardComponent, AsyncPipe],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.css'
})
export class GlossaryComponent implements OnInit {
  fb = inject(FormBuilder)
  GlossaryService = inject(GlossaryService)

  alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  glossaryItems$!: Observable<Glossary[]>

  form: FormGroup = this.fb.group({
    search: ''
  })

  constructor() {
    this.glossaryItems$ = this.GlossaryService.loadGlossary()
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(500),
        tap(({ search }) => this.searchByQuery(search))
      )
      .subscribe()
  }

  filter(letter: string) {
    this.glossaryItems$ = this.GlossaryService.filter(letter)
  }

  searchByQuery(search: string) {
    this.glossaryItems$ = this.GlossaryService.searchByQuery(search)
  }
}
