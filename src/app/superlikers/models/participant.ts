export interface ParticipantListParams {
  page?: number
  with_admins?: boolean
  tags?: string[]
}

export interface ParticipantRankResponse {
  state: string
  data: ParticipantRank
}

export interface ParticipantListResponse {
  state: string
  data: Participant[]
}

export interface ParticipantListData {
  state: string
  data: Participant
}

export interface ParticipantRank {
  name: string
  first_name: string
  last_name: string
  votes: number
  points: number
  level: number
  points_by_ptype: string
  colour: null
  'nombre-completo': string
  'numero-de-documento': string
  tutorial: string
  pais: string
  tags: string[]
  ranking: number
}

export interface Participant {
  authenticated: boolean
  uid: string
  uid_type: null
  state: string
  name: string
  total_points: number
  tags: string[]
  id: string
  first_name: string
  last_name: string
  created_at: number
  points: number
  total_coins: Coin[]
  coins: Coin[]
  picture_url: string
  large_picture_url: string
  team_id: string
  team: string
  email_verified: boolean
  cellphone_verified: boolean
  'nombre-completo': string
  email: string
  password: null
  cargo: string
  celular: string
  vp: string
  'area-categoria': string
  plantas: string
  zbs: string
  eres_ppm: string
  'he-leido-y-acepto-los-terminos-y-condiciones': null
  avatar: string
  'numero-de-documento': string
  tutorial: string
  pais: string
}

export interface Coin {
  pt_id: string
  name: string
  total: number
}

export interface SConfig {
  global: Global
  campaign: Campaign
  participation: Participant
}

export interface Campaign {
  login_for: string
  permissions: string
  modules: string
  domain: string
  has_custom_domain: boolean
  language: string
  id: string
  facebook_id: null
  unique_id: string
}

export interface Global {
  env: string
  ask_login: boolean
}
