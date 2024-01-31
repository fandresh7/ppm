import { SafeHtml } from '@angular/platform-browser'

export interface MemoryExternal {
  oportunidades: string
}

export interface MemoryLesson {
  page: string
  category: string
  external: string
  exampleImage: string
  cards: MemoryCard[]
}

export interface MemoryCard {
  id: number
  value: string
  contentHtml: SafeHtml
  flipped?: boolean
  match?: boolean
}
