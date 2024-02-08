import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable, defer, map, tap, switchMap } from 'rxjs'

import { getBlogPosts } from '@superlikers/api/blog'
import { getActivityComments, createComment } from '@superlikers/api/comments'
import { Comment } from '@superlikers/models/comments'
import { BlogPost } from '@superlikers/models/blogs'
import { LoadingService } from '@shared/loading/loading.service'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private commentsSubject$ = new BehaviorSubject<Comment[]>([])
  comments$: Observable<Comment[]> = this.commentsSubject$.asObservable()

  private blogSubject$ = new BehaviorSubject<BlogPost | null>(null)
  blog$: Observable<BlogPost | null> = this.blogSubject$.asObservable()

  constructor(private loadingService: LoadingService) {}

  loadBlogs(tags: string[]) {
    const blog$ = defer(() => getBlogPosts({ tags })).pipe(
      map(blogs => {
        const blog = blogs.length === 0 ? null : blogs[0]
        return blog
      }),
      tap(blog => this.blogSubject$.next(blog))
    )

    return blog$
  }

  loadComments() {
    const comments$ = this.blog$.pipe(
      switchMap(blog => {
        if (!blog) return []

        return defer(() => getActivityComments({ target_id: blog._id })).pipe(
          tap(comments => {
            console.log({ comments })
            this.commentsSubject$.next(comments)
          })
        )
      })
    )

    return comments$
  }

  sendComment(targetId: string, body: string) {
    return defer(() => createComment({ target_id: targetId, body }))
  }

  fetchComments(target_id: string) {
    return defer(() => getActivityComments({ target_id: target_id })).pipe(
      tap(comments => {
        this.commentsSubject$.next(comments)
      })
    )
  }
}
