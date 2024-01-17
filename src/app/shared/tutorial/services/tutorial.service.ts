import { Injectable, inject } from '@angular/core'
import introJs from 'intro.js'

import { SidebarService } from 'app/layout/services/sidebar.service'
import { sidebarTutorialSteps } from '@courses/utils/intro'
import { IntroStep } from 'intro.js/src/core/steps'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private sidebarService = inject(SidebarService)

  sidebarTutorial() {
    this.sidebarService.sidebar = false

    // shows tutorial when sidebar animation has finished
    setTimeout(() => {
      this.initTutorial(sidebarTutorialSteps)
    }, 150)
  }

  initTutorial(steps: Partial<IntroStep>[] | undefined) {
    introJs().setOptions({ steps }).start()
  }
}
