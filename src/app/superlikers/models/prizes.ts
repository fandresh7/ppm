export interface RedeemParams {
  id: string
  opts?: string
}

export interface PrizesParams {
  tags?: string[]
  page?: number
  redeemable?: boolean
  fits_points?: boolean
  sort?: {
    active: string
    direction: 'asc' | 'desc'
  }
  view?: 'show' | 'list'
}

export interface PrizesResponse {
  data: Prize[]
  metadata: Metadata
}

export interface RedeemErrorResponse {
  missing: {
    points: number
    overlimit: boolean
  }
  missing_message: string
  success: boolean
}

export interface RedeemedPrizeResponse {
  _id: string
  redeem_id: string
  prize_name: string
  image_url: string
  created_at: number
  updated_at: number
  points: number
  point_type: null
  state: string
  is_redemption_coupon: boolean
  prize_description: string
  url: string
  code: string
  barcode_url: string
  qrcode_url: string
  success: boolean
  link: string
  pdf: string
}

export interface Prize {
  _id: string
  _type: PrizeType
  description: string
  expiration_days: number
  name: string
  points: number
  quantity: number | null
  redeemable: boolean
  tags: string[]
  tc: null | string
  unlimited: boolean
  use_point_type: boolean
  user_limit: number
  user_limit_timeframe: null | string
  filter: string[]
  quantity_available: number
  image_url: null | string
  point_type: null
  point_type_id: string
  size?: number
  available: boolean
  is_coupon_prize?: boolean
  missing_points: number
  missing_level: null
  missing_badges: null
  user_overlimit: boolean
  missing_rule: null
  can_redeem: boolean
  humanize_missing_conditions: null | string
  redeem_url: string
  eid?: string
  addon_id?: string
  is_external_coupon_prize?: boolean
  is_prize?: boolean
}

export enum PrizeType {
  CouponPrize = 'CouponPrize',
  ExternalCouponPrize = 'ExternalCouponPrize',
  Prize = 'Prize'
}

export interface Metadata {
  data_method: string
  data_method_params: string[]
  total: number
  partial: boolean
  page: number
  page_size: number
  total_pages: number
}

export interface CanRedeemResponse {
  success: boolean
  prize: Prize
  kind: PrizeType
  extra_form: string
}
