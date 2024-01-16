import { DragDropLesson } from './dragdrop'
import { TestLesson } from './tests'
import { MemoryLesson } from './memory'
import { Goal } from '@superlikers/models/goals'

export type Duration = `${string}:${string}`

export enum LessonStatus {
  Open = 'open',
  Done = 'done'
}

export enum LessonType {
  Infografia = 'infografia',
  Video = 'video',
  Dragdrop = 'Dragdrop',
  Test = 'Test',
  Memory = 'Memory'
}

export interface Resource {
  name: string
  file: string
}

export interface InfografiaLesson {
  infografia: string
  status?: LessonStatus
}

export interface VideoExternalData {
  course: string
  lesson: string
  duration: string
  time: string
  finish: string
  type: string
  course_category: string
}

export interface VideoLesson {
  video: string
  duration: Duration
  subtitles?: string
  currentTime?: string
  status?: LessonStatus
}

export interface Lesson {
  id: number
  category: string
  type: LessonType
  name: string
  initial?: boolean
  image?: string
  description?: string
  resources?: Resource[]
  goal?: Goal
  VideoContent?: VideoLesson
  InfografiaContent?: InfografiaLesson
  DragdropContent?: DragDropLesson
  MemoryContent?: MemoryLesson
  TestContent?: TestLesson
  courseName?: string
  courseCategory?: string
  lessonUrl?: string[]
  nextLessonUrl?: string[]
  isFavorite?: boolean
  attempt?: {
    video: string
    duration: string
  }
}
