export interface BadgesParams {
  page?: number
  q?: string
}

export interface GiveBadgeParams {
  id?: string
  participant_uid: string
}

export interface BadgesResponse {
  state: string
  data: Badge[]
}

export interface BadgeResponse {
  state: string
  data: Badge
}

export interface ParticipantBadgeResponse {
  state: string
  data: ParticipantBadge
}

export interface GiveBadgesResponse {
  state: string
  message: string
}

export interface Badge {
  _id: string
  allow_admin_handling: boolean
  campaign_id: string
  can_be_removed: boolean
  color: string
  conditions: string
  created_at: Date
  description: string
  enabled: boolean
  granted: number
  image: {
    url: string | null
  }
  limit: number
  name: string
  slug: string
  tags: string[]
  updated_at: Date
  image_url: string
  participant_filter: string[]
}

export interface ParticipantBadge {
  badge_id: string
  badge_name: string
  image_url: string
  tags: string[]
  total: number
  _id: string
}
