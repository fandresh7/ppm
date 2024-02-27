import { Component, OnInit, inject } from '@angular/core'
import { LevelsService } from '@courses/services/levels.service'

@Component({
  selector: 'app-level-selection',
  standalone: true,
  imports: [],
  templateUrl: './level-selection.component.html',
  styleUrl: './level-selection.component.css'
})
export class LevelSelectionComponent implements OnInit {
  levelsService = inject(LevelsService)

  ngOnInit() {
    this.selectLevel(0, this.levelsService.activeLevel)
  }

  selectLevel(index: number, level: string) {
    this.moveArrow(index)

    this.levelsService.activeLevel = level
  }

  moveArrow(index: number) {
    const arrow = document.querySelector('.arrow') as HTMLElement
    if (!arrow) return

    const levels = document.querySelectorAll('.level')

    const levelWidth = levels[0].clientWidth
    const offset = levelWidth * index + levelWidth / 2 - arrow.clientWidth / 2
    arrow.style.transform = `translateX(${offset}px)`
  }
}
