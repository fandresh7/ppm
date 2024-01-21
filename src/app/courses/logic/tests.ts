import { LESSONS } from './data/lessons'
import { TESTS } from './data/tests'
import {
  Attempt,
  Question,
  QuestionType,
  TestLesson,
  UserAnswers
} from './models/tests'
import { External } from '../../superlikers/models/activitiesTypes'
import { Lesson, LessonStatus } from './models/lessons'
import { getExternals, sendExternal } from '@superlikers/api/entries'

const ALLOWED_PERCENTAGE = 0.8
const ALLOWED_ATTEMPTS = 3

const validateQuestion = (question: Question, userAnswer: string): boolean => {
  const type = question.type

  if (type === QuestionType.Checkbox) {
    const correctOptions = question.options.filter(option => option.isCorrect)
    const userSelectedOptions = userAnswer.split(',')
    return correctOptions.every(option =>
      userSelectedOptions.includes(option.text)
    )
  }

  if (type === QuestionType.Radio) {
    const correctOption = question.options.find(option => option.isCorrect)
    return userAnswer === correctOption?.text
  }

  return false
}

export const validateQuestions = (
  questions: Question[],
  userAnswers: Record<string, string>
) => {
  const correctQuestions = questions.filter(question => {
    const answer = userAnswers[question.name]
    return validateQuestion(question, answer)
  })

  const percentage =
    questions.length > 0 ? correctQuestions.length / questions.length : 0

  return percentage >= ALLOWED_PERCENTAGE
}

const getQuestions = (questions: Question[], userAnswers: UserAnswers) => {
  if (!userAnswers) return questions
  const correctQuestions: Question[] = []

  questions.forEach(question => {
    const userAnswer = userAnswers[question.name]
    const validation = validateQuestion(question, userAnswer)
    const updatedQuestion = { ...question, userAnswer, validation }
    correctQuestions.push(updatedQuestion)
  })

  return correctQuestions
}

export const redeemLessonAttempt = async (lesson: Lesson) => {
  const response = await sendExternal({
    event: 'attempts',
    properties: { name: lesson.name },
    category: lesson.category
  })

  return response
}

export const validateAttempts = (attempts: External<Attempt>[]) => {
  return attempts.length < ALLOWED_ATTEMPTS
}

const getStatus = (
  userAnswers: UserAnswers,
  percentage: number,
  isInitial: boolean | undefined
) => {
  if (userAnswers && isInitial) return LessonStatus.Done

  if (!isInitial && userAnswers && percentage >= ALLOWED_PERCENTAGE)
    return LessonStatus.Done

  return LessonStatus.Open
}

export const getTest = async (category: string) => {
  const test = TESTS.find(test => test.category === category)
  const lesson = LESSONS.find(lesson => lesson.category === category)

  if (!test || !lesson) return

  const externals = await getExternals<UserAnswers>({ atype: test.category })
  const attempts = await getExternals<Attempt>({
    atype: 'attempts',
    category: test.category
  })

  const external = externals[0]
  const userAnswers = external?.data

  const questions = getQuestions(test.questions, userAnswers)
  const correctAnswers = questions.filter(
    question => question.validation
  ).length
  const amountQuestions = questions.length

  const percentage = amountQuestions > 0 ? correctAnswers / amountQuestions : 0

  const isInitial = lesson.initial
  const status = getStatus(userAnswers, percentage, isInitial)

  const updatedTest = {
    ...test,
    questions,
    correctAnswers,
    amountQuestions,
    externals,
    percentage,
    attempts,
    status
  } as TestLesson
  return updatedTest
}
