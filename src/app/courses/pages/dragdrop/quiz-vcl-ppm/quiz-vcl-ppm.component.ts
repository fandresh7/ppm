import { Component, Input, OnInit, inject } from '@angular/core'
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
  selector: 'app-quiz-vcl-ppm',
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
  templateUrl: './quiz-vcl-ppm.component.html',
  styleUrl: './quiz-vcl-ppm.component.css'
})
export class QuizVclPpmComponent implements OnInit {
  @Input() lesson!: Lesson | undefined
  @Input() dragdrop!: DragDropData

  dragdropService = inject(DragdropService)

  ngOnInit(): void {
    console.log(this.lesson, this.dragdrop)
  }

  onDrop(event: CdkDragDrop<DragDropQuestion[]>) {
    this.dragdropService.onDrop(event)
  }

  submit() {
    this.dragdropService.submit()
  }
}
