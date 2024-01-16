import { SafeHtml } from '@angular/platform-browser'
import { LessonStatus } from './lessons'
import { External } from '@superlikers/models/activitiesTypes'

export enum QuestionType {
  Radio = 'radio',
  Checkbox = 'checkbox'
}

export interface Option {
  text: string
  isCorrect: boolean
}

export interface Question {
  name: string
  type: QuestionType
  label: SafeHtml
  options: Option[]
  userAnswer?: string
  validation?: boolean
}

export interface Attempt {
  name: string
}

export type UserAnswers = Record<string, string>

export interface TestLesson {
  category: string
  page: string
  external: string
  title: string
  description: string
  image: string
  initialMessage: string
  steps: number
  questions: Question[]
  status?: LessonStatus
  correctAnswers?: number
  amountQuestions?: number
  percentage?: number
  attempts?: External<Attempt>[]
  externals?: External<UserAnswers>[]
}
