export interface UploadDocumentParams {
  category?: string
  file: File
}

export interface UploadPhotoResponse {
  location: string
  message: string
  state: string
}

export interface UploadPhotoParams {
  category?: string
  file: File
}
