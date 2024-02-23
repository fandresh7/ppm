import { Lesson } from './lessons'

export interface Course {
  id: number
  category: string
  name: string
  description: string
  pilar: string
  level: string
  introductionVideo: string
  certificadoImage: string
  assessment: number
  expert: string
  lessonsIds: number[]
  lessons?: Lesson[]
  duration?: string
  percentage?: number
  requirements?: number[]
}
