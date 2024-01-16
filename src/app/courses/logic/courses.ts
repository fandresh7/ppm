import { COURSES } from './data/courses'
import { LEVELS } from './data/levels'
import { getDuration } from './helpers/courses'
import { getLocalStorageData } from './helpers/localStorage'
import { Course } from './models/courses'
import { Lesson } from './models/lessons'
import { Level } from './models/levels'
import { getLessons } from './lessons'

export const getCourse = async (category: string) => {
  const course = COURSES.find(course => course.category === category)
  if (!course) return

  const lessons = await getLessons(course)
  const duration = getDuration(lessons)

  return { ...course, lessons, duration } as Course
}

export const getCourses = async (categories: string[]) => {
  const courses = COURSES.filter(course => categories.includes(course.category))

  const lessonsPromises = courses.map(course => getLessons(course))

  const response = await Promise.all(lessonsPromises)
  const lessons = response.flat()

  const updatedCourses = courses.map(course => {
    const courseLessons = lessons.filter(lesson =>
      course.lessonsIds.includes(lesson.id)
    )
    const duration = getDuration(courseLessons)

    return { ...course, lessons: courseLessons, duration } as Course
  })

  return updatedCourses
}

export const getLevel = async (id: string) => {
  const level = LEVELS.find(level => level.id === id)
  if (!level) return

  const levelCourses = COURSES.filter(course =>
    level.coursesIds.includes(course.id)
  )
  const categories = levelCourses.map(course => course.category)
  const courses = await getCourses(categories)

  const lessons = courses.flatMap(course => course.lessons) as Lesson[]
  const duration = getDuration(lessons)

  return { ...level, courses, duration } as Level
}

export const getLevels = async () => {
  const lsLevels = getLocalStorageData<Level>('levels')
  if (lsLevels && lsLevels.length > 0) return lsLevels

  const levelsPromises = LEVELS.map(level => getLevel(level.id))
  const levels = await Promise.all(levelsPromises)

  const filteredLevels = levels.filter(level => level) as Level[]

  localStorage.setItem('levels', JSON.stringify(filteredLevels))

  return filteredLevels
}
