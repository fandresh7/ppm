import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Question } from '@courses/logic/models/tests'
import { FormsService } from '../../services/forms.service'

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.css'
})
export class CheckboxGroupComponent {
  @Input({ required: true }) question!: Question

  formService = inject(FormsService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()
  }

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement
    const questionValue = this.form.controls[target.name].value

    const values = questionValue ? questionValue.split(',') : []
    const index = values.indexOf(target.value)

    if (index === -1) values.push(target.value)
    else values.splice(index, 1)

    this.form.controls[target.name].setValue(values.join(','))
  }
}
