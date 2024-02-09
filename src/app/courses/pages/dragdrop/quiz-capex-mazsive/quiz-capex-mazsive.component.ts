import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop'

import { DragDropData, DragDropQuestion } from '@courses/logic/models/dragdrop'
import { DropzoneComponent } from './dropzone/dropzone.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { DragdropService } from '@shared/features/dragdrop/services/dragdrop.service'
import { Lesson } from '@courses/logic/models/lessons'

@Component({
  selector: 'app-quiz-capex-mazsive',
  standalone: true,
  imports: [
    CommonModule,
    DropzoneComponent,
    CdkDrag,
    CdkDropList,
    CdkDragPlaceholder,
    CdkDropListGroup,
    SubmitButtonComponent
  ],
  templateUrl: './quiz-capex-mazsive.component.html'
})
export class QuizCapexMazsiveComponent {
  @Input() lesson!: Lesson | undefined
  @Input() dragdrop!: DragDropData

  dragdropService = inject(DragdropService)

  onDrop(event: CdkDragDrop<DragDropQuestion[]>) {
    this.dragdropService.onDrop(event)
  }

  submit() {
    this.dragdropService.submit()
  }
}
