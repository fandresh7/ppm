import { getQueryParams } from '../helpers/queryParams'
import {
  BadgeResponse,
  BadgesParams,
  BadgesResponse,
  GiveBadgeParams,
  ParticipantBadgeResponse,
  GiveBadgesResponse
} from '../models/badges'
import { baseUrl } from './config'

export const getBadges = async ({ page, q }: BadgesParams) => {
  const queryParams = getQueryParams({ page, q })

  const url = `${baseUrl}/badges/index?${queryParams}`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as BadgesResponse

  return body.data
}

export const getBadge = async ({ id }: { id: string }) => {
  const url = `${baseUrl}/badges/${id}/show`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as BadgeResponse

  return body.data
}

export const getParticipantBadges = async ({
  participant_uid
}: {
  participant_uid?: string
}) => {
  const queryString = getQueryParams({ participant_uid })

  const url = `${baseUrl}/badges/stats?${queryString}`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as ParticipantBadgeResponse

  return body.data
}

export const giveBadgeToParticipant = async ({
  id,
  participant_uid
}: GiveBadgeParams) => {
  const data = { participant_uid }

  const url = `${baseUrl}/badges/${id}/give_badge`

  const response: Response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as GiveBadgesResponse

  return body.message
}

export const removeBagdeToParticipant = async ({
  id,
  participant_uid
}: GiveBadgeParams) => {
  const data = { participant_uid }

  const url = `${baseUrl}/badges/${id}/remove_badge`

  const response: Response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as GiveBadgesResponse

  return body.message
}
