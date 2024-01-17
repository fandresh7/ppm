import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

import { DragDropQuestion } from '@courses/logic/models/dragdrop'
import { DropzoneComponent } from './dropzone/dropzone.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { DragdropService } from '@shared/features/dragdrop/services/dragdrop.service'
import { Lesson } from '@courses/logic/models/lessons'

interface dragDropData {
  options: DragDropQuestion[]
  dropzones: DragDropQuestion[][]
}

@Component({
  selector: 'app-quiz-capex-mazsive',
  standalone: true,
  imports: [
    CommonModule,
    DropzoneComponent,
    BreadcrumbComponent,
    CdkDrag,
    CdkDropList,
    CdkDragPlaceholder,
    CdkDropListGroup,
    SubmitButtonComponent
  ],
  templateUrl: './quiz-capex-mazsive.component.html'
})
export class QuizCapexMazsiveComponent {
  route = inject(ActivatedRoute)
  dragdropService = inject(DragdropService)

  lesson$!: Observable<Lesson | undefined>
  data$!: Observable<dragDropData>

  constructor() {
    const category = 'quiz_capex_mazsive'
    this.dragdropService.setLesson(category)

    this.lesson$ = this.dragdropService.lesson$
    this.data$ = this.dragdropService.initializeDragdrop()
  }

  onDrop(event: CdkDragDrop<DragDropQuestion[]>) {
    this.dragdropService.onDrop(event)
  }

  submit() {
    this.dragdropService.submit()
  }
}
