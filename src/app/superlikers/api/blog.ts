import { getQueryParams } from '../helpers/queryParams'
import {
  BlogPostsParams,
  BlogPostsResponse,
  BlogPostResponse,
  createBlogPostParams,
  CreateBlogPostResponse
} from '../models/blogs'
import { baseUrl } from './config'

export const getBlogPosts = async ({
  page = 1,
  limit,
  q,
  tags,
  category
}: BlogPostsParams) => {
  const queryString = getQueryParams({ page, limit, q, tags, category })

  const url = `${baseUrl}/mod/blog?${queryString}`

  const response: Response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as BlogPostsResponse

  return body.data
}

export const getBlogPost = async (id: string) => {
  const url = `${baseUrl}/mod/blog/${id}/show`

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const body = (await response.json()) as BlogPostResponse

  return body.data
}

export const createBlogPost = async ({
  title,
  body,
  format = 'text',
  attached_file
}: createBlogPostParams) => {
  const formData = new FormData()
  formData.append('blog_post[title]', title)
  formData.append('blog_post[body]', body)
  formData.append('blog_post[format]', format)

  if (attached_file) {
    formData.append('blog_post[attached_file]', attached_file)
  }

  const url = `${baseUrl}/mod/blogs`

  const response: Response = await fetch(url, {
    method: 'POST',
    body: formData,
    credentials: 'include'
  })

  const result = (await response.json()) as CreateBlogPostResponse

  return result.object
}
