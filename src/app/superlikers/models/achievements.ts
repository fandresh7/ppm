export interface AchievementsParams {
  _type?: 'GoalAchievement' | 'BadgeAchievement'
  index_page?: string
  view?: 'list' | 'show'
  skip?: number
  limit?: number
  participant_uid?: string
  date_filter?: DateFilter
}

export interface DateFilter {
  sdate: string
  edate: string
}

export interface BasicAchievement {
  _id: string
  _type: string
  tags: string[]
  name: string
  created_at: number
  participant_filter: string[]
}

export interface GoalAchievement extends BasicAchievement {
  activity_filter: string[]
  activity_target: string
  period: string
  reward_name: string
  reward_type: string
  total_reward: number
  goal_start_period: null
  goal_end_period: null
  goal: {
    _id: string
    activity_target: string
    name: string
    reward_id: null
  }
}

export interface BadgeAchievement extends BasicAchievement {
  badge_handler_id: string
  badge_handler_type: string
  badge_remover_id: null
  badge_remover_type: null
  campaign_id: string
  participation_id: string
  removed: boolean
  removed_date: null
  team_id: null
  badge_handler_name: string
  badge: {
    _id: string
    name: string
  }
}

export interface AchievementsResponse<T> {
  data: T[]
  metadata: Metadata
}

export interface Metadata {
  view: string
  total: number
  partial: boolean
  page: number
  page_size: number
  total_pages: number
}
