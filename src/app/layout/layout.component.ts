import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { CommonModule } from '@angular/common'
import { SidebarService } from './services/sidebar.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  sidebar$: Observable<boolean>

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar
  }
  ngOnInit(): void {
    this.test()
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar()
  }

  test() {}
}
