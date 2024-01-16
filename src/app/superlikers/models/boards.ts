export interface BoardsParams {
  page?: number
  q?: string
}

export interface ReportParams {
  board: string
  page?: number
}

export interface ExecuteReportParams {
  board: string
  report: string
  timeframe?: string
  start_date?: string
  end_date?: string
}

export interface BoardsResponse {
  data: Board[]
  metadata: Metadata
}

export interface Board {
  _id: string
  campaign_id: string
  desc: string
  is_private: boolean
  name: string
  owner_id: string
  shared_with: string[]
}

export interface ReportResponse {
  data: Report[]
  metadata: Metadata
}

export interface Report {
  _id: string
  name: string
  coll: string
  target_property: null
  analysis_type: string
  desc: null
  filter: Filter[]
}
export interface Metadata {
  total: number
  partial: boolean
  page: number
  page_size: number
  total_pages: number
}

export interface ExecuteReportResponse {
  state: string
  result: {
    value: number
  }[]
  since: number
  report_data: ReportData
  report_params: {
    timeframe: string
  }
  report_state: string
  message: string
}

export interface ReportData {
  _id: string
  name: string
  coll: string
  target_property: null
  analysis_type: string
  desc: null
  filter: Filter[]
}

export interface Filter {
  _id: string
  field: string
  operator: string
  val: string
}
