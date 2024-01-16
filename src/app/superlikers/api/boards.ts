import { getQueryParams } from '../helpers/queryParams'
import {
  BoardsParams,
  BoardsResponse,
  ReportParams,
  ReportResponse,
  ExecuteReportParams,
  ExecuteReportResponse
} from '../models/boards'
import { baseUrl } from './config'

export const getBoards = async ({ page, q }: BoardsParams) => {
  const queryParams = getQueryParams({ page, q })

  const url = `${baseUrl}/boards/index?${queryParams}`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as BoardsResponse

  return body.data
}

export const getBoardReport = async ({ board, page }: ReportParams) => {
  const queryParams = getQueryParams({ page })
  const response: Response = await fetch(
    `${baseUrl}/boards/${board}/reports?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const body = (await response.json()) as ReportResponse

  return body.data
}

export const executeReport = async ({
  board,
  report,
  timeframe,
  start_date,
  end_date
}: ExecuteReportParams) => {
  const queryParams =
    timeframe !== null
      ? getQueryParams({ timeframe })
      : getQueryParams({ start_date, end_date })

  const response: Response = await fetch(
    `${baseUrl}/boards/${board}/reports/${report}/exec?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const body = (await response.json()) as ExecuteReportResponse
  return body.result[0].value ?? 0
}
