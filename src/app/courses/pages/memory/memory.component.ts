import { AsyncPipe, NgClass } from '@angular/common'
import { Component, inject } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import {
  Observable,
  combineLatest,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs'

import { MemoryCard } from '@courses/logic/models/memory'
import { MemoryService } from '@shared/features/memory/services/memory.service'
import { MemoryCardComponent } from '@shared/features/memory/components/memory-card/memory-card.component'
import { Lesson } from '@courses/logic/models/lessons'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { LevelsStore } from '@courses/store/levels.store'
import { LoadingService } from '@shared/loading/loading.service'
import { LoadingMemoryComponent } from '@courses/components/loading/loading-memory/loading-memory.component'

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    AsyncPipe,
    MemoryCardComponent,
    BreadcrumbComponent,
    LoadingMemoryComponent
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css'
})
export class MemoryComponent {
  route = inject(ActivatedRoute)
  memoryService = inject(MemoryService)
  loadingService = inject(LoadingService)
  levelsStore = inject(LevelsStore)

  lesson$!: Observable<Lesson>
  data$!: Observable<{ lesson: Lesson; loading: boolean }>

  cards$!: Observable<MemoryCard[]>

  constructor() {
    this.cards$ = this.memoryService.cards$

    this.data$ = this.route.params.pipe(
      switchMap(params => {
        const category = params['category']
        const lesson$ = this.levelsStore.getLesson(category)
        const loading$ = this.loadingService.loading$
        return combineLatest([lesson$, loading$])
      }),
      map(([lesson, loading]) => {
        return { lesson, loading }
      }),
      tap(({ lesson }) => {
        const cards = lesson?.MemoryContent?.cards ?? []
        this.memoryService.loadCards(cards)
        this.memoryService.opportunities = 0
      })
    )

    this.lesson$ = this.data$.pipe(map(({ lesson }) => lesson))

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
