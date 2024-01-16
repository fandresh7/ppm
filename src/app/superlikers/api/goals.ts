import { getQueryParams } from '../helpers/queryParams'
import { GoalsParams, GoalsResponse } from '../models/goals'
import { baseUrl } from './config'

export const getGoals = async ({
  page,
  tags = [],
  skip = 0,
  limit = 0,
  participant_uid
}: GoalsParams) => {
  const queryString = getQueryParams({
    page,
    tags,
    skip,
    limit,
    participant_uid
  })

  const url = `${baseUrl}/participants/goals?${queryString}`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as GoalsResponse

  return body.data
}
