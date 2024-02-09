import { LessonStatus } from './lessons'

export interface FeedbackContent {
  title: string
  html: string
}

export interface Feedback {
  wrong: FeedbackContent
  right: FeedbackContent
}

export interface DragDropQuestion {
  question: string
  value: string
  color?: string
}

export interface DragDropLesson {
  category: string
  page: string
  external: string
  questions: DragDropQuestion[]
  feedback: Feedback
  status?: LessonStatus
  amountCorrectQuestions?: number
  amountQuestions?: number
  percentage?: number
}

export interface DragDropData {
  options: DragDropQuestion[]
  dropzones: DragDropQuestion[][]
}
