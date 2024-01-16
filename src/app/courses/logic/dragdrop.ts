import { getExternals } from '@superlikers/api/entries'
import { DRAGDROP } from './data/dargdrop'
import { LESSONS } from './data/lessons'
import { DragDropLesson, DragDropQuestion } from './models/dragdrop'
import { LessonStatus } from './models/lessons'

export type CustomData = Record<string, string | number>

const validateQuestions = (
  userAnswers: CustomData,
  questions: DragDropQuestion[]
) => {
  const correctQuestions = questions.filter(({ question, value }) => {
    const userAnswer = userAnswers
      ? userAnswers[question]?.toLocaleString()
      : ''
    const correctAnswer = value.toLocaleString()
    const validation = correctAnswer.localeCompare(userAnswer) === 0
    return validation
  })

  const amountCorrectQuestions = correctQuestions.length
  const amountQuestions = questions.length
  const amountUserAnswers = userAnswers ? Object.entries(userAnswers).length : 0

  return { amountCorrectQuestions, amountQuestions, amountUserAnswers }
}

export const getDragDrop = async (category: string) => {
  const dragdrop = DRAGDROP.find(dragdrop => dragdrop.category === category)
  const lesson = LESSONS.find(lesson => lesson.category === category)

  if (!dragdrop || !lesson) return

  const externals = await getExternals<CustomData>({
    atype: dragdrop.category,
    view: 'show'
  })
  const external = externals.length > 0 ? externals[0] : undefined
  const userAnswers = external?.data ?? {}

  const { amountCorrectQuestions, amountQuestions, amountUserAnswers } =
    validateQuestions(userAnswers, dragdrop.questions)
  const percentage =
    amountQuestions > 0 ? amountCorrectQuestions / amountQuestions : 0

  const status =
    amountQuestions === amountUserAnswers
      ? LessonStatus.Done
      : LessonStatus.Open

  const updatedDragdrop = {
    ...dragdrop,
    amountUserAnswers,
    amountCorrectQuestions,
    amountQuestions,
    percentage,
    status
  } as DragDropLesson
  return updatedDragdrop
}
