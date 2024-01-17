import { Component, Input } from '@angular/core'
import { getPercentage } from '@courses/logic/helpers/courses'
import { Course } from '@courses/logic/models/courses'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [RoundedProgressComponent],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css'
})
export class CertificateCardComponent {
  @Input() course!: Course

  get percentage() {
    const lessons = this.course.lessons ?? []

    const percentage = getPercentage(lessons) * 100
    return percentage
  }
}
