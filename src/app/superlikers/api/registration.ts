import {
  SignupFormData,
  SignupParams,
  SignupResponse,
  UpdateResponse
} from '../models/registrations'
import { baseUrl } from './config'

export const signupForm = async () => {
  const response: Response = await fetch(
    `${baseUrl}/registrations/signupform`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as SignupFormData

  return result.fields
}

export const signup = async (data: SignupParams) => {
  const response: Response = await fetch(`${baseUrl}/registrations/fillup`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as SignupResponse

  return result
}

export const updateParticipant = async (data: SignupParams) => {
  const response: Response = await fetch(`${baseUrl}/registrations/update`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as UpdateResponse

  return result
}
