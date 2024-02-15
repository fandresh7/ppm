import { Component, Input } from '@angular/core'
import { Resource } from '@courses/logic/models/lessons'
import { DownloadButtonComponent } from '../download-button/download-button.component'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [DownloadButtonComponent, FavoriteButtonComponent],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.css'
})
export class ResourceCardComponent {
  @Input() resource!: Resource

  preventRouteChange(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }
}
