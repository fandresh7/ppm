import { Injectable } from '@angular/core'
import { Level } from '@courses/logic/models/levels'
import { BehaviorSubject, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  private aciveLevelSubject$ = new BehaviorSubject<Level | null>(null)
  activeLevel$ = this.aciveLevelSubject$.asObservable()

  get activeLevel() {
    return this.aciveLevelSubject$.getValue()
  }

  set activeLevel(level: Level | null) {
    this.aciveLevelSubject$.next(level)
  }

  isActiveLevel(level: Level) {
    return this.activeLevel$.pipe(
      map(activeLevel => {
        return activeLevel?.id === level.id
      })
    )
  }
}
