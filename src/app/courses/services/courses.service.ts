import { Injectable } from '@angular/core'

import { BehaviorSubject, defer, tap, map } from 'rxjs'

import {
  getAllCourses,
  getAllLessons,
  getLessonStatus
} from '../logic/helpers/courses'
import { getLevels } from '../logic/courses'
import { getLessonsData } from '../logic/lessons'
import { Course } from '../logic/models/courses'
import { LessonType, LessonStatus, Lesson } from '../logic/models/lessons'
import { Level } from '../logic/models/levels'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private levelsSubject$ = new BehaviorSubject<Level[]>([])
  levels$ = this.levelsSubject$.asObservable()

  get levels() {
    return this.levelsSubject$.getValue()
  }

  set levels(levels: Level[]) {
    this.levelsSubject$.next(levels)
  }

  loadLevels() {
    return defer(() => getLevels()).pipe(
      tap(levels => {
        this.levels = levels
      })
    )
  }

  loadCourses() {
    return this.levels$.pipe(
      map(levels => {
        const courses = getAllCourses(levels)
        return courses
      })
    )
  }

  getRecommendedLessons() {
    return this.levels$.pipe(
      map(levels => {
        const lessons = getAllLessons(levels)
        const recommendedLessons = lessons.filter(lesson => {
          const typeCondition =
            lesson.type === LessonType.Video ||
            lesson.type === LessonType.Infografia
          return typeCondition
        })

        return recommendedLessons
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

  getSearchLessons(query: string) {
    const value = query.trim().toLocaleLowerCase()

    return this.levels$.pipe(
      map(levels => {
        if (value === '') return []
        const lessons = getAllLessons(levels)

        const filterLessons = lessons.filter(lesson => {
          const name = lesson.name.toLocaleLowerCase()
          const description = lesson.description?.toLocaleLowerCase()

          return name.includes(value) || description?.includes(value)
        })

        return filterLessons
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
      map(lessons => {
        const updatedLesson = lessons[0]
        const updatedlevels = this.updateLevels(levels, updatedLesson)

        this.levels = updatedlevels
        return updatedLesson
      })
    )
  }

  updateLessonAsFavorite(lesson: Lesson) {
    const ls = localStorage.getItem('lessons')
    let favoriteLessons = (!ls ? [] : JSON.parse(ls)) as number[]

    const favorite = favoriteLessons.includes(lesson.id)
    const updatedLesson = { ...lesson, isFavorite: !favorite }

    if (favoriteLessons.includes(lesson.id)) {
      favoriteLessons = favoriteLessons.filter(item => item !== lesson.id)
    } else {
      favoriteLessons.push(lesson.id)
    }

    localStorage.setItem('lessons', JSON.stringify(favoriteLessons))

    return this.updateLesson(updatedLesson)
  }
}
