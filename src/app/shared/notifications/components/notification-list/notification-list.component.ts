import { OverlayModule } from '@angular/cdk/overlay'
import { Component } from '@angular/core'
import { NotificationComponent } from '../notification/notification.component'

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [OverlayModule, NotificationComponent],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.css'
})
export class NotificationListComponent {
  notifications: string[] = []
  isDropdownOpen = false

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
    if (this.isDropdownOpen) {
      document.body.classList.add('overflow-hidden')
      document.body.classList.remove('overflow-auto')
    } else {
      document.body.classList.add('overflow-auto')
      document.body.classList.remove('overflow-hidden')
    }
  }
}
