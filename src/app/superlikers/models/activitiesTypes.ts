import { Participant } from './participant'

export interface External<T> {
  slug: string
  name: string
  points: number
  state: string
  category: string
  moderation: string
  data: T
  created_at: Date
  updated_at: Date
}

export interface Comment {
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
  participant: Participant
  votes_count: number
}
