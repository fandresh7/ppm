export const getQueryParams = (data: Record<string, unknown>) => {
  const queryParams: string[] = []

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const arrayParams = value.map(item => `${key}[]=${item}`)
      queryParams.push(...arrayParams)
    } else if (value !== undefined && value !== null) {
      queryParams.push(`${key}=${value}`)
    }
  })

  return queryParams.join('&')
}
