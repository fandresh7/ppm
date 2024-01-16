import { Component, Input, inject } from '@angular/core'
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms'
import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'
import { InputTypePipe } from '../../pipes/input-type'

@Component({
  selector: 'app-checkbox-group-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './checkbox-group-field.component.html',
  styleUrl: './checkbox-group-field.component.css'
})
export class CheckboxGroupFieldComponent {
  @Input() field!: Field

  formService = inject(FormService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()
  }

  clearError(name: string) {
    this.formService.clearError(name)
  }

  onCheckboxGroupChange(event: Event) {
    const target = event.target as HTMLInputElement
    const questionArray = this.form.controls[target.name] as FormArray

    if (target.checked) {
      questionArray.push(new FormControl(target.value))
    } else {
      const index = questionArray.controls.findIndex(
        x => x.value === target.value
      )
      questionArray.removeAt(index)
    }
  }
}
