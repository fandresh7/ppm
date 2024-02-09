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
import { Lesson } from '@courses/logic/models/lessons'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { DragdropService } from '@shared/features/dragdrop/services/dragdrop.service'
import { DropzoneComponent } from './dropzone/dropzone.component'

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
    DropzoneComponent
  ],
  templateUrl: './quiz-champions.component.html',
  styleUrls: ['./quiz-champions.component.css']
})
export class QuizChampionsComponent {
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
