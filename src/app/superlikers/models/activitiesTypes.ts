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
