import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'
import { InputTypePipe } from '../../pipes/input-type'

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css'
})
export class SelectFieldComponent {
  @Input() field!: Field

  formService = inject(FormService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()
  }

  clearError(name: string) {
    this.formService.clearError(name)
  }
}
