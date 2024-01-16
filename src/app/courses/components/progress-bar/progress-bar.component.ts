import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() percentage = 0
  @Input() height = 'h-3'

  get width() {
    return `${this.percentage}%`
  }

  get color() {
    const colors = [
      { min: 0, max: 40, color: '#E7555C' },
      { min: 41, max: 80, color: '#EB9A61' },
      { min: 81, max: 1000, color: '#19BEAD' }
    ]

    const customColor = colors.find(
      color => this.percentage >= color.min && this.percentage <= color.max
    )

    return customColor?.color ?? ''
  }
}
