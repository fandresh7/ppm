import { getQueryParams } from '../helpers/queryParams'
import {
  SendExternalParams,
  SendExtenalResponse,
  EntriesParams,
  ExternalResponse,
  EntriesResponse
} from '../models/entries'
import { baseUrl } from './config'

export const sendExternal = async ({
  event,
  properties,
  category
}: SendExternalParams) => {
  const data = { event, properties, category }

  const response: Response = await fetch(`${baseUrl}/mod/external`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const result = (await response.json()) as SendExtenalResponse

  return result.state
}

export const getExternals = async <T>({
  atype,
  category,
  index_page,
  skip,
  limit,
  participant_uid,
  date_filter,
  hide_undo = true,
  view
}: EntriesParams) => {
  const queryString = getQueryParams({
    _type: 'External',
    atype,
    category,
    index_page,
    skip,
    limit,
    participant_uid,
    date_filter,
    hide_undo,
    view
  })

  const response: Response = await fetch(
    `${baseUrl}/participant_entries?${queryString}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const body = (await response.json()) as ExternalResponse<T>

  return body.data
}

export const getEntries = async <T>({
  _type,
  atype,
  category,
  index_page,
  skip,
  limit,
  participant_uid,
  date_filter,
  hide_undo = true,
  view
}: EntriesParams) => {
  const queryString = getQueryParams({
    _type,
    atype,
    category,
    index_page,
    skip,
    limit,
    participant_uid,
    date_filter,
    hide_undo,
    view
  })

  const response: Response = await fetch(
    `${baseUrl}/participant_entries?${queryString}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const body = (await response.json()) as EntriesResponse<T>

  return body
}
