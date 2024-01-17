import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { BlogService } from '../../services/blog.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'

@Component({
  selector: 'app-write-comment',
  standalone: true,
  imports: [ReactiveFormsModule, SubmitButtonComponent],
  templateUrl: './write-comment.component.html',
  styleUrl: './write-comment.component.css'
})
export class WriteCommentComponent implements OnInit {
  fb = inject(FormBuilder)
  blogService = inject(BlogService)

  @Input() targetId?: string
  @Output() commentSent: EventEmitter<void> = new EventEmitter<void>()

  error = ''
  loading = false

  public form: FormGroup = this.fb.group({
    body: ['', Validators.required]
  })

  get isFormValid() {
    return (
      this.form.controls['body'].errors && this.form.controls['body'].touched
    )
  }

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      this.error = ''
    })
  }

  sendComment() {
    if (this.form.invalid || !this.targetId) {
      this.form.markAllAsTouched()
      return
    }

    this.loading = true
    const comment = this.form.value.body.trim()

    this.blogService.sendComment(this.targetId, comment).subscribe(() => {
      this.loading = false
      this.form.reset()
      this.commentSent.emit()
    })
  }
}
