import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

import {
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop'
import { Observable } from 'rxjs'

import { BreadcrumbComponent } from '@courses/components/breadcrumb/breadcrumb.component'
import { DragDropQuestion } from '@courses/logic/models/dragdrop'
import { Lesson } from '@courses/logic/models/lessons'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { DragdropService } from '@shared/features/dragdrop/services/dragdrop.service'
import { DropzoneComponent } from './dropzone/dropzone.component'

interface dragDropData {
  options: DragDropQuestion[]
  dropzones: DragDropQuestion[][]
}

@Component({
  selector: 'app-quiz-champions',
  standalone: true,
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    CdkDragPlaceholder,
    CdkDropListGroup,
    SubmitButtonComponent,
    DropzoneComponent,
    BreadcrumbComponent
  ],
  templateUrl: './quiz-vcl.component.html'
})
export class QuizVclComponent {
  route = inject(ActivatedRoute)
  dragdropService = inject(DragdropService)

  lesson$!: Observable<Lesson | undefined>
  data$!: Observable<dragDropData>

  constructor() {
    const category = 'quiz_vcl'
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
