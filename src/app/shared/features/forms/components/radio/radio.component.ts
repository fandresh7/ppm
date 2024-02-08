import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Question } from '@courses/logic/models/tests'
import { FormsService } from '../../services/forms.service'

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  @Input({ required: true }) question!: Question
  formService = inject(FormsService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()
  }
}
