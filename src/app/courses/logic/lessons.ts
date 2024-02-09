import { LESSONS } from './data/lessons'
import {
  Lesson,
  LessonType,
  Resource,
  VideoExternalData
} from './models/lessons'

import { getTest } from './tests'
import { getDragDrop } from './dragdrop'
import { Course } from './models/courses'
import { getStatus } from './helpers/courses'
import { getLocalStorageData } from './helpers/localStorage'
import { getExternals } from '@superlikers/api/entries'
import { getGoals } from '@superlikers/api/goals'
import { getMemory } from './memory'

export const getVideoLessonsData = async (lessons: Lesson[]) => {
  const categories = lessons.map(lesson => lesson.category)

  const externalsPromises = categories.map(category =>
    getExternals<VideoExternalData>({
      atype: 'lessons - videos',
      category
    })
  )

  const goalsPromise = getGoals({ page: 1, tags: categories })
  const [goals, ...externalsArray] = await Promise.all([
    goalsPromise,
    ...externalsPromises
  ])
  const externals = externalsArray.flat()

  const data = lessons.map(lesson => {
    const lessonExternals = externals.filter(
      external => external.category === lesson.category
    )
    const lessonGoals = goals.filter(goal =>
      goal.tags.includes(lesson.category)
    )

    const goal = lessonGoals[0]
    const external = lessonExternals[0]

    const currentTime = external?.data.time ?? 0
    const status = getStatus(goal)

    const VideoContent = { ...lesson.VideoContent, currentTime, status }

    return { ...lesson, goal, VideoContent } as Lesson
  })

  return data
}

export const getInfografiaLessonsData = async (lessons: Lesson[]) => {
  const categories = lessons.map(lesson => lesson.category)
  const goals = await getGoals({ page: 1, tags: categories })

  const data = lessons.map(lesson => {
    const lessonGoals = goals.filter(goal =>
      goal.tags.includes(lesson.category)
    )
    const goal = lessonGoals[0]
    const status = getStatus(goal)

    const InfografiaContent = { ...lesson.InfografiaContent, status }
    return { ...lesson, goal, InfografiaContent } as Lesson
  })

  return data
}

export const getTestLessonData = async (lessons: Lesson[]) => {
  const testsPromises = lessons.map(lesson => getTest(lesson.category))
  const tests = await Promise.all(testsPromises)

  const data = lessons.map(lesson => {
    const test = tests.find(test => test?.category === lesson.category)
    return { ...lesson, TestContent: test } as Lesson
  })

  return data
}

export const getDragDropLessonsData = async (lessons: Lesson[]) => {
  const dragdropPromises = lessons.map(lesson => getDragDrop(lesson.category))

  const dragDrops = await Promise.all(dragdropPromises)

  const data = lessons.map(lesson => {
    const dragDrop = dragDrops.find(
      dragdrop => dragdrop?.category === lesson.category
    )

    return { ...lesson, DragdropContent: dragDrop } as Lesson
  })

  return data
}

export const getMemoryLessonsData = async (lessons: Lesson[]) => {
  const memoryPromises = lessons.map(lesson => getMemory(lesson.category))
  const memories = await Promise.all(memoryPromises)

  const data = lessons.map(lesson => {
    const memory = memories.find(memory => memory?.category === lesson.category)

    return { ...lesson, MemoryContent: memory } as Lesson
  })

  return data
}

export const getLessonUrl = (course: Course, lesson: Lesson | undefined) => {
  if (!lesson) return ['/course', course.category]

  const { category: courseCategory } = course
  const { type, category } = lesson

  const nextUrlHandlers = {
    [LessonType.Video]: ['/course', courseCategory, category],
    [LessonType.Infografia]: ['/course', courseCategory, category],
    [LessonType.Dragdrop]: ['/dragdrop', category],
    [LessonType.Memory]: ['/memory', category],
    [LessonType.Test]: ['/test', category]
  }

  return nextUrlHandlers[type]
}

export const getLessonsData = (lessons: Lesson[], type: LessonType) => {
  const lessonTypeHandlers = {
    [LessonType.Video]: getVideoLessonsData(lessons),
    [LessonType.Infografia]: getInfografiaLessonsData(lessons),
    [LessonType.Dragdrop]: getDragDropLessonsData(lessons),
    [LessonType.Memory]: getMemoryLessonsData(lessons),
    [LessonType.Test]: getTestLessonData(lessons)
  }

  return lessonTypeHandlers[type] as Promise<Lesson[]>
}

export const getLessons = async (course: Course) => {
  const { name, category, lessonsIds } = course

  const lessons = LESSONS.filter(lesson => lessonsIds.includes(lesson.id))

  const videoLessons = lessons.filter(
    lesson => lesson.type === LessonType.Video
  )
  const infografiaLessons = lessons.filter(
    lesson => lesson.type === LessonType.Infografia
  )
  const testsLessons = lessons.filter(lesson => lesson.type === LessonType.Test)
  const dragdropLessons = lessons.filter(
    lesson => lesson.type === LessonType.Dragdrop
  )
  const memoryLessons = lessons.filter(
    lesson => lesson.type === LessonType.Memory
  )

  const videoLessonsPromises = getLessonsData(videoLessons, LessonType.Video)
  const infografiaLessonsPromises = getLessonsData(
    infografiaLessons,
    LessonType.Infografia
  )
  const testsLessonsPromises = getLessonsData(testsLessons, LessonType.Test)
  const dragdropLessonsPromises = getLessonsData(
    dragdropLessons,
    LessonType.Dragdrop
  )
  const memoryLessonsPromises = getLessonsData(memoryLessons, LessonType.Memory)

  const response = await Promise.all([
    videoLessonsPromises,
    infografiaLessonsPromises,
    testsLessonsPromises,
    dragdropLessonsPromises,
    memoryLessonsPromises
  ])
  const lessonsResponse = response.flat()

  const organizedLessons = lessonsIds.map(
    id => lessonsResponse.find(lesson => lesson.id === id) as Lesson
  )

  const updatedLessons = organizedLessons.map((lesson, index) => {
    const nextLesson = organizedLessons[index + 1]
    const nextLessonUrl = getLessonUrl(course, nextLesson)
    const lessonUrl = getLessonUrl(course, lesson)

    return {
      ...lesson,
      nextLessonUrl,
      lessonUrl,
      courseName: name,
      courseCategory: category
    } as Lesson
  })

  return updatedLessons
}

export const checkLessonIsFavorite = (lesson: Lesson) => {
  const favoriteLessons = getLocalStorageData('lessons')
  const isFavorite = favoriteLessons.includes(lesson.id)

  return isFavorite
}

export const setLessonAsFavorite = (lesson: Lesson) => {
  const favoriteLessons = getLocalStorageData<number>('lessons')
  const lessonIndex = favoriteLessons.findIndex(id => lesson.id === id)

  if (lessonIndex === -1) {
    favoriteLessons.push(lesson.id)
  } else {
    favoriteLessons.splice(lessonIndex, 1)
  }

  localStorage.setItem('lessons', JSON.stringify(favoriteLessons))
  return lessonIndex === -1
}

export const checkResourceIsFavorite = (resource: Resource) => {
  const favoriteResources = getLocalStorageData<string>('resources')
  const isFavorite = favoriteResources.includes(resource.name)

  return isFavorite
}

export const setResourceAsFavorite = (resource: Resource) => {
  const favoriteResources = getLocalStorageData<string>('resources')
  const resourceIndex = favoriteResources.findIndex(
    name => resource.name === name
  )

  if (resourceIndex === -1) {
    favoriteResources.push(resource.name)
  } else {
    favoriteResources.splice(resourceIndex, 1)
  }

  localStorage.setItem('resources', JSON.stringify(favoriteResources))
  return resourceIndex === -1
}
