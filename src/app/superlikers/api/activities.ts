import {
  UploadDocumentParams,
  UploadPhotoParams,
  UploadPhotoResponse
} from '../models/activities'
import { baseUrl } from './config'

export const uploadDocument = async ({
  category,
  file
}: UploadDocumentParams) => {
  const formData = new FormData()

  formData.append('upload_document[document]', file)

  if (category != null) {
    formData.append('uploadDocument[category]', category)
  }

  const url = `${baseUrl}/mod/documents`

  const response: Response = await fetch(url, {
    method: 'POST',
    body: formData,
    credentials: 'include'
  })

  const body = await response.json()

  return body
}

export const uploadPhoto = async ({ category, file }: UploadPhotoParams) => {
  const formData = new FormData()

  formData.append('upload_photo[image]', file)

  if (category != null) {
    formData.append('upload_photo[category]', category)
  }

  const url = `${baseUrl}/mod/photos`

  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData,
    credentials: 'include'
  })

  const body = (await response.json()) as UploadPhotoResponse

  return body
}
