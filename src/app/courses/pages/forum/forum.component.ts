import { Component } from '@angular/core'
import { BlogComponent } from '@shared/features/blog/blog.component'

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  tags: string[] = ['forum']
}
