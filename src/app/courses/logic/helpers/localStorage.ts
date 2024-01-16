export const getLocalStorageData = <T>(type: string) => {
  const ls = localStorage.getItem(type)
  const data = !ls ? [] : JSON.parse(ls)

  return data as T[]
}

export const saveDataInLocalStorage = (type: string, data: string) => {
  localStorage.setItem(type, data)
}
