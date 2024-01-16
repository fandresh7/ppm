import { Goal } from '@superlikers/models/goals'
import { Course } from '../models/courses'
import { Duration, Lesson, LessonStatus, LessonType } from '../models/lessons'
import { Level } from '../models/levels'

export const getAllCourses = (levels: Level[]) => {
  const courses: Course[] = []
  levels.forEach(level => {
    if (level.courses) courses.push(...level.courses)
  })

  return courses
}

export const getAllLessons = (levels: Level[]) => {
  const lessons: Lesson[] = []

  levels.forEach(level => {
    if (!level.courses) return
    level.courses.forEach(course => {
      if (!course.lessons) return
      lessons.push(...course.lessons)
    })
  })

  return lessons
}

export const getLessonStatus = (lesson: Lesson): LessonStatus => {
  switch (lesson.type) {
    case LessonType.Video:
      return lesson.VideoContent?.status ?? LessonStatus.Open
    case LessonType.Infografia:
      return lesson.InfografiaContent?.status ?? LessonStatus.Open
    case LessonType.Test:
      return lesson.TestContent?.status ?? LessonStatus.Open
    case LessonType.Dragdrop:
      return lesson.DragdropContent?.status ?? LessonStatus.Open
    default:
      return LessonStatus.Open
  }
}

export const getCompleteLessons = (lessons: Lesson[]) => {
  return lessons.filter(lesson => {
    if (lesson.type === LessonType.Video) {
      return lesson.VideoContent?.status === LessonStatus.Done
    }

    if (lesson.type === LessonType.Infografia) {
      return lesson.InfografiaContent?.status === LessonStatus.Done
    }

    if (lesson.type === LessonType.Test) {
      return lesson.TestContent?.status === LessonStatus.Done
    }

    if (lesson.type === LessonType.Dragdrop) {
      return lesson.DragdropContent?.status === LessonStatus.Done
    }

    return
  })
}

export const canResponseTest = (lesson: Lesson) => {
  const externals = lesson.TestContent?.externals ?? []
  const attempts = lesson.TestContent?.attempts ?? []

  const allExternals = [...externals, ...attempts]
  const ordenedExternals = allExternals.sort((a, b) => {
    const aDate = new Date(a.created_at).getTime()
    const bDate = new Date(b.created_at).getTime()

    return bDate - aDate
  })

  const lastExternal = ordenedExternals[0]
  if (!lastExternal) return true

  return lastExternal.slug === 'attempts'
}

export const getTotalDuration = (durations: Duration[]) => {
  let totalMinutes = 0
  let totalSeconds = 0

  durations.forEach(time => {
    const [minutes, seconds] = time.split(':')

    totalMinutes += Number(minutes)
    totalSeconds += Number(seconds)
  })

  totalMinutes += Math.floor(totalSeconds / 60)
  totalSeconds = Math.floor(
    (totalSeconds / 60 - Math.floor(totalSeconds / 60)) * 60
  )

  const totalSecondsText =
    totalSeconds < 10 ? `0${totalSeconds}` : `${totalSeconds}`
  const result = `${totalMinutes}:${totalSecondsText}`

  return result
}

export const getDuration = (lessons: Lesson[]) => {
  const videoLessons = lessons.filter(
    lesson => lesson.type === LessonType.Video
  )
  const durations = videoLessons.map(
    lesson => lesson.VideoContent?.duration
  ) as Duration[]
  return getTotalDuration(durations)
}

export const getPercentage = (lessons: Lesson[]) => {
  const completeLessons = getCompleteLessons(lessons)

  return lessons.length > 0 ? completeLessons.length / lessons.length : 0
}

export const getStatus = (goal?: Goal) => {
  if (goal && goal.status === '100%') return LessonStatus.Done
  return LessonStatus.Open
}
