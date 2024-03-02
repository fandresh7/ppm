import { Injectable, inject } from '@angular/core'
import { Course } from '@courses/logic/models/courses'
import { LevelsStore } from '@courses/store/levels.store'
import { BehaviorSubject, combineLatest, map, switchMap, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  levelsStore = inject(LevelsStore)

  constructor() {
    this.updateCourses().subscribe()
  }

  private activeCoursesSubject$ = new BehaviorSubject<Course[]>([])
  activeCourses$ = this.activeCoursesSubject$.asObservable()

  private activeLevelSubject$ = new BehaviorSubject<string>('basic')
  activeLevel$ = this.activeLevelSubject$.asObservable()

  private activePilarSubject$ = new BehaviorSubject<string>('VIC')
  activePilar$ = this.activePilarSubject$.asObservable()

  get activeCourses() {
    return this.activeCoursesSubject$.getValue()
  }

  set activeCourses(courses: Course[]) {
    this.activeCoursesSubject$.next(courses)
  }

  get activeLevel() {
    return this.activeLevelSubject$.getValue()
  }

  set activeLevel(level: string) {
    this.activeLevelSubject$.next(level)
  }

  get activePilar() {
    return this.activePilarSubject$.getValue()
  }

  set activePilar(pilar: string) {
    this.activePilarSubject$.next(pilar)
  }

  getPilars() {
    return this.levelsStore.getAllCourses().pipe(
      map(courses => {
        const pilars = courses.map(course => course.pilar)
        const uniquePilars = [...new Set(pilars)]

        return uniquePilars
      })
    )
  }

  updateCourses() {
    return combineLatest([this.activePilar$, this.activeLevel$]).pipe(
      switchMap(([pilar, level]) => {
        return this.levelsStore.getFilteredCourses(level, pilar)
      }),
      tap(courses => {
        this.activeCourses = courses
      })
    )
  }
}
