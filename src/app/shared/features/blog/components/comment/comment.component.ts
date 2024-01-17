import { CommonModule } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { Comment } from '@superlikers/models/comments'
import { WriteCommentComponent } from '../write-comment/write-comment.component'
import { BlogService } from '../../services/blog.service'

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, WriteCommentComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  blogService = inject(BlogService)

  @Input() comment!: Comment
  @Input() showAdditionalButtons = true
  additionalComments: Comment[] = []

  showWriteCommentComponent = false
  showComments = false
  loading = false

  get showCommentsText() {
    if (this.showComments) return 'Ocultar Comentarios'
    else return 'Ver Comentarios'
  }

  get showButtonText() {
    if (this.showWriteCommentComponent) return 'Ocultar'
    else return 'Responder'
  }

  toggleShowComments() {
    this.showComments = !this.showComments
    if (this.showComments) this.getComments(this.comment._id)
  }

  toggleShowWriteCommentComponent() {
    this.showWriteCommentComponent = !this.showWriteCommentComponent
  }

  getComments(targetId: string) {
    this.loading = true

    this.blogService.fetchComments(targetId).subscribe(comments => {
      this.additionalComments = comments
      this.loading = false
    })
  }

  onCommentSent() {
    this.showWriteCommentComponent = false
    this.showComments = true
    this.getComments(this.comment._id)
  }
}
