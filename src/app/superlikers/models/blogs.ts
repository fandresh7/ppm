export interface BlogPostsResponse {
  data: BlogPost[]
  metadata: Metadata
}

export interface BlogPostResponse {
  data: BlogPost
  state: string
}

export interface BlogPostsParams {
  page?: number
  limit?: number
  q?: string
  tags?: string[]
  category?: string
}

export interface createBlogPostParams {
  title: string
  body: string
  format?: 'text' | 'markdown'
  attached_file?: File
}

export interface BlogPost {
  _id: string
  admin: boolean
  archived: boolean
  atype: string
  category: null
  execute_date: null
  extra_points: number
  moderation: string
  owner_name: null
  points: number
  state: string
  team: null
  permalink: string
  short_url: null
  facebook_tab_url: null
  votes_count: number
  votes_average: number
  votes_up: number
  votes_down: number
  title: string
  body: string
  voted: boolean
  created_at: number
  format: string
  tags: string[]
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

export interface CreateBlogPostResponse {
  state: string
  activity_state: string
  activity_points: number
  message: string
  execution_error: string
  object: CreatedBlogPost
}

export interface CreatedBlogPost {
  _id: string
  _type: string
  activity_count: number
  atype: string
  category: null
  moderation: string
  points: number
  state: string
  created_at: number
  execute_date: number
  module: string
  name: string
  team: null
  votes_count: number
  title: string
  format: string
}
