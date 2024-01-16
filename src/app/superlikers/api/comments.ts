import { getQueryParams } from '../helpers/queryParams'
import {
  CommentsParams,
  CommentsResponse,
  CreateCommentParams,
  CreateCommentResponse
} from '../models/comments'
import { baseUrl } from './config'

export const getActivityComments = async ({
  target_id,
  page,
  q,
  limit,
  category
}: CommentsParams) => {
  const queryParams = getQueryParams({ page, q, category, limit })

  const response: Response = await fetch(
    `${baseUrl}/mod/comments/${target_id}?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      credentials: 'include'
    }
  )

  const body = (await response.json()) as CommentsResponse

  return body.data
}

export const createComment = async ({
  target_id,
  body,
  category
}: CreateCommentParams) => {
  const data = {
    comment: { body, category }
  }

  const response: Response = await fetch(
    `${baseUrl}/mod/comments/${target_id}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as CreateCommentResponse

  return result.object
}
