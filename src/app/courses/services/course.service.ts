import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, combineLatest, map, of, tap } from 'rxjs'

import { Lesson, LessonStatus } from '@courses/logic/models/lessons'
import { Course } from '@courses/logic/models/courses'
import { getPercentage } from '@courses/logic/helpers/courses'
import { LevelsStore } from '@courses/store/levels.store'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  levelsStore = inject(LevelsStore)

  private lessonSubject$ = new BehaviorSubject<Lesson>({} as Lesson)
  lesson$ = this.lessonSubject$.asObservable()

  private lessonsSubject$ = new BehaviorSubject<Lesson[]>([])
  lessons$ = this.lessonsSubject$.asObservable()

  private courseSubject$ = new BehaviorSubject<Course>({} as Course)
  course$ = this.courseSubject$.asObservable()

  private coursePercentageSubject$ = new BehaviorSubject<number>(0)
  coursePercentage$ = this.coursePercentageSubject$.asObservable()

  setActiveLesson(lesson: Lesson) {
    this.lessonSubject$.next(lesson)
  }

  loadCourse(category?: string) {
    if (!category) return of(null)

    return this.levelsStore.getCourse(category).pipe(
      tap(course => {
        this.courseSubject$.next(course)
      })
    )
  }

  loadLessons(category: string) {
    return this.levelsStore.getCourse(category).pipe(
      map(course => {
        const lessons = this.getCourseLessons(course?.lessons ?? [])

        return lessons
      }),
      tap(lessons => {
        this.lessonsSubject$.next(lessons)
      })
    )
  }

  getCourseLessons(lessons: Lesson[]) {
    const initialLesson = lessons.find(lesson => lesson.initial)

    if (
      initialLesson &&
      initialLesson.TestContent?.status === LessonStatus.Done
    ) {
      return lessons.filter(lesson => !lesson.initial)
    }

    return lessons.filter(lesson => lesson.initial)
  }

  getRequirementsCourses(category: string) {
    return combineLatest([
      this.levelsStore.getCourse(category),
      this.levelsStore.getAllCourses()
    ]).pipe(
      map(([course, courses]) => {
        const requirementsCourses = courses.filter(c => {
          return course.requirements?.includes(c.id)
        })

        return requirementsCourses
      })
    )
  }

  loadLesson(category?: string) {
    if (!category) return of(null)

    return this.levelsStore.getLesson(category).pipe(
      tap(lesson => {
        this.lessonSubject$.next(lesson)
      })
    )
  }

  isActiveLesson(lessonToCheck: Lesson) {
    return this.lesson$.pipe(
      map(lesson => {
        return lessonToCheck.category === lesson.category
      })
    )
  }

  getPercentage(lessons: Lesson[]) {
    return getPercentage(lessons) * 100
  }
}
