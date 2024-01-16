export interface ErrorResponse {
  state: string
  message: string
  code_error: number
  errors?: Record<string, string>
}
