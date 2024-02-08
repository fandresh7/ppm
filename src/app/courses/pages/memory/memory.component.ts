import { AsyncPipe, NgClass } from '@angular/common'
import { Component, inject } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { Observable, switchMap, tap, withLatestFrom } from 'rxjs'

import { MemoryCard } from '@courses/logic/models/memory'
import { MemoryService } from '@shared/features/memory/services/memory.service'
import { MemoryCardComponent } from '@shared/features/memory/components/memory-card/memory-card.component'
import { Lesson } from '@courses/logic/models/lessons'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { LevelsStore } from '@courses/store/levels.store'

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    AsyncPipe,
    MemoryCardComponent,
    BreadcrumbComponent
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css'
})
export class MemoryComponent {
  route = inject(ActivatedRoute)
  memoryService = inject(MemoryService)
  levelsStore = inject(LevelsStore)

  lesson$!: Observable<Lesson>
  cards$!: Observable<MemoryCard[]>

  constructor() {
    this.cards$ = this.memoryService.cards$

    this.lesson$ = this.route.params.pipe(
      switchMap(params => {
        const category = params['category']
        return this.levelsStore.getLesson(category)
      }),
      tap(lesson => {
        const cards = lesson?.MemoryContent?.cards ?? []
        this.memoryService.loadCards(cards)
        this.memoryService.opportunities = 0
      })
    )

    this.memoryService.validateAllMatch$
      .pipe(
        withLatestFrom(this.lesson$),
        tap(([validation, lesson]) => {
          if (!validation) return

          const opportunities = this.memoryService.opportunities
          this.memoryService.sendData(lesson, opportunities)
        })
      )
      .subscribe()
  }
}
