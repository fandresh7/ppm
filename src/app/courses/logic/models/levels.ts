import { Course } from './courses'

export interface Level {
  id: string
  name: string
  coursesIds: number[]
  image: string
  courses?: Course[]
  percentage?: number
  duration?: string
}
