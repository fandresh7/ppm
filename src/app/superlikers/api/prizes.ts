import { getQueryParams } from '../helpers/queryParams'
import {
  PrizesParams,
  PrizesResponse,
  CanRedeemResponse,
  RedeemParams,
  RedeemedPrizeResponse
} from '../models/prizes'
import { baseUrl } from './config'

export const getPrizes = async ({
  tags = [],
  page = 1,
  redeemable,
  fits_points,
  sort,
  view = 'show'
}: PrizesParams) => {
  const queryParams = getQueryParams({
    tags,
    page,
    redeemable,
    fits_points,
    sort,
    view
  })

  const response: Response = await fetch(
    `${baseUrl}/prizes/index?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as PrizesResponse

  return result
}

export const canRedeem = async (id: string) => {
  const response: Response = await fetch(
    `${baseUrl}/prizes/${id}/redeem/check`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as CanRedeemResponse

  return result
}

export const redeemPrize = async ({ id, opts }: RedeemParams) => {
  const response: Response = await fetch(`${baseUrl}/prizes/${id}/redeem`, {
    method: 'POST',
    body: JSON.stringify({ opts }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as RedeemedPrizeResponse

  return result as RedeemedPrizeResponse
}

export const getWishlist = async (page: number) => {
  const queryParams = getQueryParams({ page })

  const response: Response = await fetch(
    `${baseUrl}/prizes/whislist?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  return response
}

export const toggleWishlist = async (id: string) => {
  const queryParams = getQueryParams({ id })

  const response: Response = await fetch(
    `${baseUrl}/prizes/${id}/whislist_toggle?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  return response
}
