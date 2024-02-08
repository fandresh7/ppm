import { Injectable } from '@angular/core'

import {
  BehaviorSubject,
  concatMap,
  defer,
  first,
  map,
  shareReplay,
  tap,
  timer
} from 'rxjs'

import { getLevels } from '@courses/logic/courses'
import { Level } from '@courses/logic/models/levels'
import { LoadingService } from '@shared/loading/loading.service'
import {
  getAllCourses,
  getAllLessons,
  getLessonStatus
} from '@courses/logic/helpers/courses'
import { Course } from '@courses/logic/models/courses'
import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { getLessonsData } from '@courses/logic/lessons'

@Injectable({
  providedIn: 'root'
})
export class LevelsStore {
  private levelsSubject$ = new BehaviorSubject<Level[]>([])
  levels$ = this.levelsSubject$.asObservable()

  get levels() {
    return this.levelsSubject$.getValue()
  }

  set levels(levels: Level[]) {
    this.levelsSubject$.next(levels)
  }

  constructor(private loadingService: LoadingService) {
    this.loadLevels().pipe(shareReplay()).subscribe()
  }

  loadLevels() {
    const levels$ = timer(2000).pipe(
      concatMap(() => defer(() => getLevels())),
      tap(levels => (this.levels = levels))
    )

    return this.loadingService.showLoaderUntilCompleted(levels$)
  }

  getAllCourses() {
    return this.levels$.pipe(
      map(levels => {
        const courses = getAllCourses(levels)
        return courses
      })
    )
  }

  getCourse(category: string) {
    return this.levels$.pipe(
      map(levels => {
        const courses = getAllCourses(levels)

        const activeCourse = courses.find(
          course => course.category === category
        )
        return activeCourse as Course
      })
    )
  }

  getLesson(category: string) {
    return this.levels$.pipe(
      map(levels => {
        const lessons = getAllLessons(levels)
        const activeLesson = lessons.find(
          lesson => lesson.category === category
        ) as Lesson

        return activeLesson
      })
    )
  }

  getCompleteCourses() {
    return this.levels$.pipe(
      map(levels => {
        const courses = getAllCourses(levels)

        const completeCourses = courses.filter(course => {
          return course.lessons?.every(
            lesson => getLessonStatus(lesson) === LessonStatus.Done
          )
        })

        return completeCourses
      })
    )
  }

  getInProgressCourses() {
    return this.levels$.pipe(
      map(levels => {
        const courses = getAllCourses(levels)

        const inProgressCourses = courses.filter(course => {
          return course.lessons?.every(
            lesson => getLessonStatus(lesson) !== LessonStatus.Done
          )
        })

        return inProgressCourses
      })
    )
  }

  updateLevels(levels: Level[], updatedLesson: Lesson) {
    const updatedLevels = levels.map(level => {
      const updatedCourses = level.courses?.map(course => {
        const updatedLessons = course.lessons?.map(lesson => {
          if (lesson.id === updatedLesson.id) {
            return { ...lesson, ...updatedLesson }
          }
          return lesson
        })

        return { ...course, lessons: updatedLessons }
      })

      return { ...level, courses: updatedCourses }
    })

    return updatedLevels
  }

  updateLesson(lesson: Lesson) {
    const levels = this.levels

    return defer(() => getLessonsData([lesson], lesson.type)).pipe(
      first(),
      map(lessons => {
        const updatedLesson = lessons[0]
        const updatedlevels = this.updateLevels(levels, updatedLesson)
        localStorage.setItem('levels', JSON.stringify(updatedlevels))

        this.levels = updatedlevels
        return updatedLesson
      })
    )
  }
}
