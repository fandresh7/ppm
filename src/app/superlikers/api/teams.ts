import { getQueryParams } from '../helpers/queryParams'
import {
  TeamsParams,
  TeamsResponse,
  TeamResponse,
  CreateTeamParams,
  createTeamResponse,
  AbandonTeam,
  AbandonTeamResponse
} from '../models/teams'
import { baseUrl } from './config'

export const getTeams = async ({ page, q }: TeamsParams) => {
  const queryParams = getQueryParams({ page, q })

  const response: Response = await fetch(
    `${baseUrl}/mod/teams?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as TeamsResponse

  return result.data
}

export const getTeam = async (id: string) => {
  const response: Response = await fetch(`${baseUrl}/mod/teams/${id}/show`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as TeamResponse

  return result.data
}

export const createTeam = async ({
  name,
  desc,
  open,
  participant_filter
}: CreateTeamParams) => {
  const team = { name, desc, open, participant_filter }

  const response: Response = await fetch(`${baseUrl}/mod/teams`, {
    method: 'POST',
    body: JSON.stringify({ team }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as createTeamResponse

  return result
}

export const abandonTeam = async ({ id, participant_uid }: AbandonTeam) => {
  const queryParams = getQueryParams({ participant_uid })

  const response: Response = await fetch(
    `${baseUrl}/mod/teams/${id}/remove_member?${queryParams}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as AbandonTeamResponse

  return result.message
}
