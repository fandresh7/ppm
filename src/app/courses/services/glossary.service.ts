import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of, tap, map } from 'rxjs'

import { GLOSSARY } from '@courses/logic/data/glossary'
import { Glossary } from '@courses/logic/models/glossary'

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {
  private GlossarySubject$ = new BehaviorSubject<Glossary[]>([])
  glossary$: Observable<Glossary[]> = this.GlossarySubject$.asObservable()

  loadGlossary() {
    return of(GLOSSARY).pipe(
      tap(glossary => {
        this.GlossarySubject$.next(glossary)
      })
    )
  }

  filter(letter: string) {
    return this.glossary$.pipe(
      map(glossary => {
        return glossary.filter(item => {
          const firstLetter = item.title[0].toLowerCase()
          return firstLetter === letter
        })
      })
    )
  }

  searchByQuery(query: string) {
    const value = query.trim().toLowerCase()

    return this.glossary$.pipe(
      map(glossary => {
        if (value === '') return glossary

        const filterGlossary = glossary.filter(item => {
          const title = item.title.toLowerCase()
          return title.includes(value)
        })

        return filterGlossary
      })
    )
  }
}
