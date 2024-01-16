import { Field } from './inputs'

export interface SignupFormData {
  fields: Field[]
  _id: string
}

export interface SignupParams {
  participation: Partial<Record<string, string>>
}

export interface SignupResponse {
  message: string
  state: string
  code_error?: number
  errors?: Record<string, string>
}

export interface UpdateResponse {
  success?: boolean
  message?: string
  state?: string
  code_error?: number
  errors?: Record<string, string>
}
