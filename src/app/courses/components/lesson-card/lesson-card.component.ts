import { Component, Input } from '@angular/core'
import { Lesson } from '@courses/logic/models/lessons'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'
import { DownloadButtonComponent } from '../download-button/download-button.component'

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  imports: [FavoriteButtonComponent, DownloadButtonComponent],
  templateUrl: './lesson-card.component.html',
  styleUrl: './lesson-card.component.css'
})
export class LessonCardComponent {
  @Input() lesson!: Lesson
}
