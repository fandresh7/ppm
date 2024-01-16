import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.css'
})
export class DownloadButtonComponent {
  @Input() name = ''
  @Input() file = ''

  @Input() size = 8

  get sizeClasses() {
    return `w-${this.size} h-${this.size}`
  }

  download() {
    if (!this.name || !this.file) return

    const link = document.createElement('a')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', this.file)
    link.setAttribute('download', this.name)
    link.click()
  }
}
