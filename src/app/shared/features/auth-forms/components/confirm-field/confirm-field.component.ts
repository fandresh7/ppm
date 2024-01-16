import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'
import { InputTypePipe } from '../../pipes/input-type'

@Component({
  selector: 'app-confirm-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './confirm-field.component.html',
  styleUrl: './confirm-field.component.css'
})
export class ConfirmFieldComponent {
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
