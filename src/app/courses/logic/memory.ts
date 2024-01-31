import { getExternals } from '@superlikers/api/entries'
import { LESSONS } from './data/lessons'
import { MEMORIES } from './data/memory'
import { CustomData } from './dragdrop'
import { LessonStatus } from './models/lessons'
import { MemoryLesson } from './models/memory'

export const getMemory = async (category: string) => {
  const memory = MEMORIES.find(item => item.category === category)
  const lesson = LESSONS.find(lesson => lesson.category === category)

  if (!memory || !lesson) return

  const externals = await getExternals<CustomData>({
    atype: memory.category,
    view: 'show'
  })

  const status = externals.length > 0 ? LessonStatus.Done : LessonStatus.Open

  const updatedMemory = {
    ...memory,
    status
  }

  return updatedMemory as MemoryLesson
}
