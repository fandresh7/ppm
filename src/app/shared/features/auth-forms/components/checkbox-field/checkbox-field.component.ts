import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { InputTypePipe } from '../../pipes/input-type'
import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'

@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.css'
})
export class CheckboxFieldComponent {
  @Input() field!: Field

  formService = inject(FormService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()
  }

  clearError(name: string) {
    this.formService.clearError(name)
  }

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement

    const control = this.form.get(target.name)
    if (!control) return

    if (target.checked) {
      control.setValue('on')
    } else {
      control.setValue(null)
    }
  }
}
