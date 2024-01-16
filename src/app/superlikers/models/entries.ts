import { External } from './activitiesTypes'

export interface ExternalResponse<T> {
  data: External<T>[]
  metadata: Metadata
}

export interface EntriesResponse<T> {
  data: T[]
  metadata: Metadata
}

export interface Metadata {
  page: number
  page_size: number
  partial: boolean
  total: number
  total_pages: 0
  view: 'list' | 'show'
}

export interface SendExtenalResponse {
  state: string
  activity_state: string
  activity_points: number
  message: string
  execution_error: string
}

export interface EntriesParams {
  _type?: string
  atype?: string
  category?: string
  index_page?: number
  skip?: number
  limit?: number
  participant_uid?: string
  date_filter?: string
  hide_undo?: boolean
  view?: 'list' | 'show'
}

export interface SendExternalParams {
  event: string
  properties: Record<string, string>
  category?: string
}
