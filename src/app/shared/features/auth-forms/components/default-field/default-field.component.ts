import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'
import { InputTypePipe } from '../../pipes/input-type'

@Component({
  selector: 'app-default-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './default-field.component.html',
  styleUrl: './default-field.component.css'
})
export class DefaultFieldComponent {
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
