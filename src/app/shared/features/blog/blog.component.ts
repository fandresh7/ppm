import { Component, Input, OnInit, inject } from '@angular/core'

import { Observable } from 'rxjs'

import { BlogPost } from '@superlikers/models/blogs'
import { BlogService } from './services/blog.service'
import { Comment } from '@superlikers/models/comments'
import { WriteCommentComponent } from './components/write-comment/write-comment.component'
import { CommentComponent } from './components/comment/comment.component'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [WriteCommentComponent, CommentComponent, AsyncPipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  @Input() tags: string[] = []

  blogService = inject(BlogService)

  blog$!: Observable<BlogPost | null>
  comments$!: Observable<Comment[]>

  loading = false

  ngOnInit() {
    this.blog$ = this.blogService.loadBlogs(this.tags)
    this.comments$ = this.blogService.loadComments()
  }

  commentSent() {
    this.comments$ = this.blogService.loadComments()
  }
}
