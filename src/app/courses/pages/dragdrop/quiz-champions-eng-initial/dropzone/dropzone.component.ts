import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop'
import { DragDropQuestion } from '@courses/logic/models/dragdrop'

@Component({
  selector: 'app-champions-initial-dropzone',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag],
  templateUrl: './dropzone.component.html'
})
export class DropzoneComponent {
  @Input() dropzoneItems: DragDropQuestion[] = []
  @Input() question!: string
  @Input() customClasses = ''

  @Output() dropEvent = new EventEmitter<CdkDragDrop<DragDropQuestion[]>>()

  onDrop(event: CdkDragDrop<DragDropQuestion[]>) {
    this.dropEvent.emit(event)
  }

  dropListEnterPredicate(drag: CdkDrag, drop: CdkDropList) {
    return drop.data.length < 1
  }
}
