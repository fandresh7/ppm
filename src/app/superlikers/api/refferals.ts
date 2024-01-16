import { getQueryParams } from '../helpers/queryParams'
import { baseUrl } from './config'

export const changeReferralCode = async (code: string) => {
  const queryParams = getQueryParams({ code })

  const response: Response = await fetch(
    `${baseUrl}/mod/referrals?${queryParams}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  )

  return response
}
