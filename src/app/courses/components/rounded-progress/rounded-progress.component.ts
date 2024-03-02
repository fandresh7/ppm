import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-rounded-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rounded-progress.component.html',
  styleUrl: './rounded-progress.component.css'
})
export class RoundedProgressComponent {
  @Input({ required: true }) width!: number
  @Input({ required: true }) strokeWidth!: number
  @Input({ required: true }) percentage!: number
  @Input() strokeColor = 'stroke-theme-grey'
  @Input() fontSize = 'text-sm'
  @Input() strokeProgressColor = 'stroke-theme-green'
  @Input() textColor = 'text-theme-green'
  @Input() wrapText = false

  get radius() {
    return (45 * this.width) / 100
  }

  get dash() {
    return (283 * this.width) / 100
  }

  containerStyles() {
    const classes: Record<string, string> = {
      width: `${this.width + 10}px`,
      height: `${this.width + 10}px`
    }

    if (this.wrapText) {
      classes['shape-outside'] = 'circle()'
      classes['float'] = 'right'
    }

    return classes
  }

  firstCircleStyles() {
    return {
      strokeWidth: `${this.strokeWidth}px`,
      'stroke-linecap': `round`
    }
  }

  secondCircleStyles() {
    return {
      'stroke-dasharray': `${this.dash}px`,
      'stroke-width': `${this.strokeWidth}px`,
      'stroke-dashoffset': `calc(${this.dash} - (${this.dash} * ${this.percentage}) / 100)`,
      'stroke-linecap': `round`
    }
  }
}
