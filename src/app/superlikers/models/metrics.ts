export interface MetricsParams {
  page?: number
  q?: string
}

export interface CalculateMetricParams {
  slug: string
  timeframe: string
}

export interface MetricsResponse {
  state: string
  data: Metric[]
}

export interface CalculateMetricsResponse {
  state: string
  result: number
}

export interface Metric {
  _id: string
  name: string
  description: string
  coll: string
  target_property: string
  analysis_type: string
  filter: Filter[]
  slug: string
}

export interface Filter {
  _id: string
  field: string
  operator: string
  val: string
}
