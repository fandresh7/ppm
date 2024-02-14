import { baseUrl } from './config'
import {
  LoginFormData,
  LoginParams,
  LoginResponse,
  VerifyEmailResponse,
  loginRequirementsResponse
} from '../models/session'

export const getLoginForm = async () => {
  const url = `${baseUrl}/sessions/loginform`

  try {
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const body = (await response.json()) as LoginFormData

    return body.fields
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('custom error')
    }
  }
}

export const login = async (data: LoginParams) => {
  const url = `${baseUrl}/sessions/login`

  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })

  const body = (await response.json()) as LoginResponse

  return body
}

export const logout = async () => {
  const response: Response = await fetch(`${baseUrl}/sessions/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as LoginResponse

  return result.message
}

export const checkRequirements = async () => {
  const response: Response = await fetch(
    `${baseUrl}/participant_login_requirements`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as loginRequirementsResponse

  return result
}

export const confirmEmail = async (token: string) => {
  const response: Response = await fetch(
    `${baseUrl}/registrations/confirm_email`,
    {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as VerifyEmailResponse

  return result
}

export const resendEmail = async (email: string) => {
  const response: Response = await fetch(
    `${baseUrl}/registrations/reset_email_verify_token`,
    {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = await response.json()

  return result
}
