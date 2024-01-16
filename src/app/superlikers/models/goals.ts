export interface GoalsResponse {
  state: string
  data: Goal[]
}

export interface GoalsParams {
  page: number
  tags: string[]
  skip?: number
  limit?: number
  participant_uid?: string
}

export interface Goal {
  _id: string
  created_at: Date
  goal_id: string
  participation_id: string
  status: string
  updated_at: Date
  winned: number
  winning_dates: string[]
  activity_target: string
  activity_times: number
  deleted: boolean
  desc: string
  enabled: boolean
  formula: string
  give_normal_points: boolean
  interval: string
  interval_samples: number
  limit: number
  name: string
  period: string
  recurrent: boolean
  reward_type: null
  tags: string[]
  reward_name: null
}
