export interface TeamsParams {
  q?: string
  page?: number
}

export interface CreateTeamParams {
  name: string
  desc: string
  open: boolean
  participant_filter: ParticipantFilter[]
}

export interface createTeamResponse {
  data: Team
  state: string
  message?: string
}

export interface AbandonTeam {
  id: string
  participant_uid?: string
}

export interface AbandonTeamResponse {
  state: string
  message: string
}

export interface TeamsResponse {
  state: string
  data: Team[]
}

export interface TeamResponse {
  state: string
  data: Team
}

export interface Team {
  _id: string
  admin_id: null | string
  color: string
  created_at: number
  desc: string
  name: string
  open: boolean
  participant_filter: ParticipantFilter[]
  slug: string
  teams_module_id: string
  total_points: number
  updated_at: number
  total_coins: TotalCoin[]
  image_url: null | string
}

export interface ParticipantFilter {
  _id?: string
  field: string
  operator: string
  val: string
}

export interface TotalCoin {
  pt_id: string
  name: string
  total: number
}
