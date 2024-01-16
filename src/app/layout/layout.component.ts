import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Observable } from 'rxjs'

import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { SidebarService } from './services/sidebar.service'
import { CoursesService } from '@courses/services/courses.service'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent {
  coursesService = inject(CoursesService)

  sidebar$: Observable<boolean>

  constructor(private sidebarService: SidebarService) {
    this.coursesService.loadLevels().subscribe()

    this.sidebar$ = this.sidebarService.sidebar
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar()
  }
}
