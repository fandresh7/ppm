/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Type, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Observable, combineLatest, map, switchMap, tap } from 'rxjs'

import { QuizCapexMazsiveComponent } from './quiz-capex-mazsive/quiz-capex-mazsive.component'
import { QuizChampionsComponent } from './quiz-champions/quiz-champions.component'
import { QuizChampionsEngInitialComponent } from './quiz-champions-eng-initial/quiz-champions-eng-initial.component'
import { QuizLeasingComponent } from './quiz-leasing/quiz-leasing.component'
import { QuizMonetizacionComponent } from './quiz-monetizacion/quiz-monetizacion.component'
import { QuizVclComponent } from './quiz-vcl/quiz-vcl.component'
import { QuizVclV2Component } from './quiz-vcl-v2/quiz-vcl-v2.component'
import { QuizZbbComponent } from './quiz-zbb/quiz-zbb.component'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { Lesson } from '@courses/logic/models/lessons'
import { DragdropService } from '@shared/features/dragdrop/services/dragdrop.service'
import { LoadingService } from '@shared/loading/loading.service'
import { DragDropData } from '@courses/logic/models/dragdrop'

@Component({
  selector: 'app-dragdrop',
  standalone: true,
  imports: [
    CommonModule,
    QuizCapexMazsiveComponent,
    QuizChampionsComponent,
    QuizChampionsEngInitialComponent,
    QuizLeasingComponent,
    QuizMonetizacionComponent,
    QuizVclComponent,
    QuizVclV2Component,
    QuizZbbComponent,
    BreadcrumbComponent
  ],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.css'
})
export class DragdropComponent {
  route = inject(ActivatedRoute)
  dragdropService = inject(DragdropService)
  loadingService = inject(LoadingService)

  selectedComponent!: Type<any>

  data$!: Observable<{
    lesson: Lesson | undefined
    dragdrop: DragDropData
    loading: boolean
  }>

  componentList: Record<string, Type<any>> = {
    quiz_zzb: QuizZbbComponent,
    quiz_champions: QuizChampionsComponent,
    quiz_monetizacion: QuizMonetizacionComponent,
    quiz_vcl: QuizVclComponent,
    quiz_vcl_v2: QuizVclV2Component,
    quiz_capex_mazsive: QuizCapexMazsiveComponent,
    quiz_champions_eng_initial: QuizChampionsEngInitialComponent,
    quiz_leasing: QuizLeasingComponent
  }

  constructor() {
    this.data$ = this.route.params.pipe(
      tap(params => {
        const category = params['category']
        this.dragdropService.setLesson(category)
        this.selectedComponent = this.componentList[category]
      }),
      switchMap(() => {
        const lesson$ = this.dragdropService.lesson$
        const dragdrop$ = this.dragdropService.initializeDragdrop()
        const loading$ = this.loadingService.loading$

        return combineLatest([lesson$, dragdrop$, loading$]).pipe(
          map(([lesson, dragdrop, loading]) => {
            return { lesson, dragdrop, loading }
          })
        )
      })
    )
  }
}
