import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Observable, shareReplay } from 'rxjs'

import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { SidebarService } from './services/sidebar.service'
import { LevelsStore } from '@courses/store/levels.store'
import { ParticipantService } from '@participant/services/participant.service'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent {
  levelsStore = inject(LevelsStore)
  participantService = inject(ParticipantService)

  sidebar$: Observable<boolean>

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar

    this.levelsStore.loadLevels().pipe(shareReplay()).subscribe()

    this.participantService.loadParticipant().subscribe(participant => {
      this.participantService.participant = participant.participation
    })
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar()
  }
}
