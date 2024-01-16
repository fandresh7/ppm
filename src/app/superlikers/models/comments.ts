import { Participant } from './participant'

export interface CommentsResponse {
  data: Comment[]
  metadata: Metadata
}

export interface CreateCommentResponse {
  state: string
  activity_state: string
  activity_points: number
  message: string
  execution_error: string
  object: CreatedComment
}

export interface CommentsParams {
  target_id: string
  page?: number
  q?: string
  limit?: number
  category?: string
}

export interface CreateCommentParams {
  target_id: string
  body: string
  category?: string
}

export interface Comment {
  _id: string
  admin: boolean
  archived: boolean
  atype: string
  category: string
  execute_date: Date
  extra_points: number
  moderation: string
  owner_name: string
  points: number
  state: string
  team: null
  editable_by: null
  deleteable_by: string
  voted: boolean
  body: string
  participant: Participant
}

export interface CreatedComment {
  _id: string
  _type: string
  activity_count: number
  atype: string
  category: string
  moderation: string
  points: number
  state: string
  created_at: number
  execute_date: number
  module: string
  name: string
  team: null
  votes_count: number
}

export interface Metadata {
  data_method: string
  data_method_params: string
  total: number
  partial: boolean
  page: number
  page_size: number
  total_pages: number
}
