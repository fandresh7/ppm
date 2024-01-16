import { getQueryParams } from '../helpers/queryParams'
import {
  AchievementsParams,
  AchievementsResponse
} from '../models/achievements'
import { baseUrl } from './config'

export const getAchievements = async <T>({
  _type,
  index_page,
  view = 'list',
  skip,
  limit,
  participant_uid,
  date_filter
}: AchievementsParams) => {
  const queryParams = getQueryParams({
    _type,
    index_page,
    view,
    skip,
    limit,
    participant_uid,
    date_filter
  })

  const url = `${baseUrl}/achievements/index?${queryParams}`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as AchievementsResponse<T>

  return body.data
}
