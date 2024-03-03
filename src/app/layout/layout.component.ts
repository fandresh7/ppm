import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnDestroy,
  OnInit,
  inject
} from '@angular/core'
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Observable, Subscription, combineLatest, map, shareReplay } from 'rxjs'

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
export class LayoutComponent implements OnInit, OnDestroy {
  router = inject(Router)

  levelsStore = inject(LevelsStore)
  participantService = inject(ParticipantService)

  sidebar$: Observable<boolean>
  subscription!: Subscription

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar

    this.levelsStore.loadLevels().pipe(shareReplay()).subscribe()

    this.participantService.loadParticipant().subscribe(participant => {
      this.participantService.participant = participant.participation
    })
  }

  ngOnInit() {
    this.subscription = this.checkSidebarToHide().subscribe()
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar()
  }

  checkSidebarToHide() {
    return combineLatest([
      this.router.events,
      this.sidebarService.sidebar$
    ]).pipe(
      map(([event, sidebar]) => {
        if (!(event instanceof NavigationEnd)) return

        const isMobile = window.innerWidth <= 1024

        if (!sidebar && isMobile) {
          this.sidebarService.sidebar = true
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
