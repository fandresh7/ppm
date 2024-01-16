import { Component, Input } from '@angular/core'
import { LessonStatus } from '@courses/logic/models/lessons'

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css'
})
export class StatusBadgeComponent {
  @Input() status: LessonStatus = LessonStatus.Open

  data = {
    [LessonStatus.Done]: {
      text: 'Finalizado',
      background: 'bg-theme-green',
      icon: 'bg-check-icon'
    },
    [LessonStatus.Open]: {
      text: 'Por Iniciar',
      background: 'bg-gray-300',
      icon: 'bg-open-icon'
    }
  }
}
