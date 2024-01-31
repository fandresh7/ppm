import { NgClass } from '@angular/common'
import { Component, Input, inject } from '@angular/core'

import { MemoryCard } from '@courses/logic/models/memory'
import { MemoryService } from '@shared/features/memory/services/memory.service'

@Component({
  selector: 'app-memory-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './memory-card.component.html',
  styleUrl: './memory-card.component.css'
})
export class MemoryCardComponent {
  memoryService = inject(MemoryService)

  @Input() card!: MemoryCard

  flip(cardId: number) {
    this.memoryService.flipCard(cardId)
    this.memoryService.validateMatch()
  }
}
