import { Component, inject } from '@angular/core'
import { TutorialService } from '@shared/tutorial/services/tutorial.service'

@Component({
  selector: 'app-tutorial-button',
  standalone: true,
  templateUrl: './tutorial-button.component.html',
  styleUrl: './tutorial-button.component.css'
})
export class TutorialButtonComponent {
  tutorialService = inject(TutorialService)

  showTutorial() {
    this.tutorialService.sidebarTutorial()
  }
}
