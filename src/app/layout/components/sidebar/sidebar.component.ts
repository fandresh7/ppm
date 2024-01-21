import { AsyncPipe, NgClass } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'

import { Observable } from 'rxjs'

import { SessionService } from '@auth/services/session.service'
import { AvatarComponent } from '@participant/components/avatar/avatar.component'
import { ParticipantService } from '@participant/services/participant.service'
import { Participant } from '@superlikers/models/participant'

interface NavbarLink {
  path: string
  icon: string
  iconActive: string
  name: string
  id?: string
  exact?: boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, AvatarComponent, AsyncPipe, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  router = inject(Router)

  sessionService = inject(SessionService)
  participantService = inject(ParticipantService)
  participant$: Observable<Participant>

  constructor() {
    this.participant$ = this.participantService.participant$
  }

  isActive(path: string) {
    return this.router.isActive(path, true)
  }

  backgroundImageClasses(item: NavbarLink) {
    const classes: { [key: string]: boolean } = {}
    classes[item.icon] = !this.isActive(item.path)
    classes[item.iconActive] = this.isActive(item.path)

    return classes
  }

  logout() {
    this.sessionService.logout().subscribe(() => {
      this.router.navigate(['/auth', 'login'])
    })
  }

  navbarLinks: NavbarLink[] = [
    {
      path: '/',
      icon: 'bg-home-icon',
      iconActive: 'bg-home-icon-active',
      id: 'sidebar_intro_2',
      name: 'Home',
      exact: true
    },
    {
      path: '/profile',
      icon: 'bg-profile-icon',
      iconActive: 'bg-profile-icon-active',
      name: 'Perfil'
    },
    {
      path: '/courses',
      icon: 'bg-courses-icon',
      iconActive: 'bg-courses-icon-active',
      id: 'sidebar_intro_3',
      name: 'Cursos'
    },
    {
      path: '/certificates',
      icon: 'bg-certificates-icon',
      iconActive: 'bg-certificates-icon-active',
      id: 'sidebar_intro_4',
      name: 'Certificados'
    },
    {
      path: '/glossary',
      icon: 'bg-glossary-icon',
      iconActive: 'bg-glossary-icon-active',
      name: 'Glosario'
    },
    {
      path: '/forum',
      icon: 'bg-forum-icon',
      iconActive: 'bg-forum-icon-active',
      id: 'sidebar_intro_5',
      name: 'Forum'
    }
  ]
}
