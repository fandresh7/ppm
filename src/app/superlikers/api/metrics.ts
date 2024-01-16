import { getQueryParams } from '../helpers/queryParams'
import {
  MetricsParams,
  MetricsResponse,
  CalculateMetricParams,
  CalculateMetricsResponse
} from '../models/metrics'
import { baseUrl } from './config'

export const getMetrics = async ({ page, q }: MetricsParams) => {
  const queryParams = getQueryParams({ page, q })

  const response: Response = await fetch(
    `${baseUrl}/metrics/index?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as MetricsResponse

  return result.data
}

export const calculateMetric = async ({
  slug,
  timeframe
}: CalculateMetricParams) => {
  const queryParams = getQueryParams({ slug, timeframe })

  const response: Response = await fetch(
    `${baseUrl}/metrics/exec?${queryParams}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  const result = (await response.json()) as CalculateMetricsResponse

  return result.result
}
