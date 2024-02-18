import { Field } from './inputs'

export interface LoginFormData {
  fields: Field[]
}

export interface LoginParams {
  participation: Partial<Record<string, string>>
}

export interface LoginResponse {
  message: string
  state: string
  code_error?: number
}

export interface loginRequirementsResponse {
  state: string
  allowed: boolean
  redirect_page: string
  mesage: string
}

export interface ResetEmailVerifyTokenResponse {
  state: string
  message: string
}

export interface ValidateEmailTokenResponse {
  state: string
  valid: boolean
}

export interface VerifyEmailResponse {
  state: string
  message: string
}
