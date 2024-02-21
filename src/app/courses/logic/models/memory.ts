import { SafeHtml } from '@angular/platform-browser'
import { LessonStatus } from './lessons'

export interface MemoryExternal {
  oportunidades: string
}

export interface MemoryLesson {
  page: string
  category: string
  external: string
  exampleImage: string
  cards: MemoryCard[]
  status?: LessonStatus
}

export interface MemoryCard {
  id: number
  value: string
  contentHtml: SafeHtml
  flipped?: boolean
  match?: boolean
}
