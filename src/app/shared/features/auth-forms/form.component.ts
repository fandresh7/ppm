import { Component, EventEmitter, Input, Output, inject } from '@angular/core'

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { Field } from '@superlikers/models/inputs'
import { FormService } from './services/form.service'
import { InputTypePipe } from './pipes/input-type'
import { CommonModule } from '@angular/common'
import { DefaultFieldComponent } from './components/default-field/default-field.component'
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component'
import { CheckboxGroupFieldComponent } from './components/checkbox-group-field/checkbox-group-field.component'
import { PhoneFieldComponent } from './components/phone-field/phone-field.component'
import { SelectFieldComponent } from './components/select-field/select-field.component'
import { ConfirmFieldComponent } from './components/confirm-field/confirm-field.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTypePipe,
    DefaultFieldComponent,
    CheckboxFieldComponent,
    CheckboxGroupFieldComponent,
    PhoneFieldComponent,
    SelectFieldComponent,
    ConfirmFieldComponent,
    SubmitButtonComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() fields: Field[] = []
  @Input() buttonText = 'Enviar'
  @Input() showConfirmFields = true
  @Input() loading = false

  @Output() submitForm = new EventEmitter()

  fb = inject(FormBuilder)
  formService = inject(FormService)

  form: FormGroup = this.fb.group({})

  constructor() {
    this.form = this.formService.getForm()
  }

  getWrapClass(field: Field) {
    return `wrap-${field.name}`
  }

  isInvalidField(name: string) {
    return this.form.controls[name]?.errors && this.form.controls[name]?.touched
  }

  showError(name: string) {
    if (!this.form.controls[name]) return null

    const errors = this.form.controls[name]?.errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'no puede estar en blanco'

        case 'customError':
          return errors['customError']
      }
    }

    return null
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
    }

    const data = this.form.value as Record<string, string>
    this.submitForm.emit(data)
  }
}
