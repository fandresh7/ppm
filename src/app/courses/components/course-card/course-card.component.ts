import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { getPercentage } from '@courses/logic/helpers/courses'
import { Course } from '@courses/logic/models/courses'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterModule, RoundedProgressComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: Course

  get percentage() {
    const lessons = this.course.lessons ?? []

    const percentage = getPercentage(lessons) * 100
    return percentage
  }
}
