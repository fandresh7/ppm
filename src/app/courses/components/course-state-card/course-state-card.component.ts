import { NgClass } from '@angular/common'
import { Component, Input, OnInit, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Course } from '@courses/logic/models/courses'
import { CourseService } from '@courses/services/course.service'

@Component({
  selector: 'app-course-state-card',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './course-state-card.component.html',
  styleUrl: './course-state-card.component.css'
})
export class CourseStateCardComponent implements OnInit {
  @Input({ required: true }) course!: Course

  courseService = inject(CourseService)
  percentage = 0

  ngOnInit(): void {
    this.percentage = this.getPercentage()
  }

  getPercentage() {
    const lessons = this.course?.lessons ?? []
    return this.courseService.getPercentage(lessons)
  }

  getIcon(percentage: number) {
    if (percentage >= 100) {
      return 'https://superlikers-themes.s3.amazonaws.com/ppmu/check-complete.svg'
    } else {
      return 'https://superlikers-themes.s3.amazonaws.com/ppmu/waiting.svg'
    }
  }
}
