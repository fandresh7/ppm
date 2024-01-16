import { getQueryParams } from '../helpers/queryParams'
import {
  ParticipantRankResponse,
  ParticipantListParams,
  ParticipantListResponse,
  ParticipantListData,
  SConfig
} from '../models/participant'
import { baseUrl } from './config'

export const getParticipant = async () => {
  const response: Response = await fetch(`${baseUrl}/sconfig`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as SConfig

  return result
}

export const getRank = async () => {
  const response: Response = await fetch(`${baseUrl}/participant_rank`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as ParticipantRankResponse

  return result.data
}

export const getList = async ({
  page,
  with_admins,
  tags
}: ParticipantListParams) => {
  const queryParams = getQueryParams({ page, with_admins, tags })

  const response: Response = await fetch(
    `${baseUrl}/participants/list?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as ParticipantListResponse

  return result.data
}

export const getListParticipantData = async (uid: string) => {
  const queryParams = getQueryParams({ uid })

  const response: Response = await fetch(
    `${baseUrl}/participants/show?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as ParticipantListData

  return result.data
}

export const togglePushNotifications = async () => {
  const response: Response = await fetch(
    `${baseUrl}/participants/toggle_push_notifications`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as { state: string }

  return result.state
}

export const removePushSubscriptions = async () => {
  const response: Response = await fetch(
    `${baseUrl}/participants/remove_push_subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as { state: string }

  return result.state
}
