import { Injectable, inject } from '@angular/core'

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Field } from '@superlikers/models/inputs'
import { Participant } from '@superlikers/models/participant'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  fb = inject(FormBuilder)

  private form: FormGroup = new FormGroup({})
  private labels: Record<string, string> = {}

  getForm() {
    return this.form
  }

  initializeForm(fields: Field[], showConfirmFields = true) {
    this.assignFieldsToForm(fields, showConfirmFields)
    this.assingLabels(fields, showConfirmFields)
  }

  private assingLabels(fields: Field[], showConfirmFields: boolean) {
    fields.forEach(field => {
      this.labels[field.label] = field.name

      if (field.confirm_label && field.confirm && showConfirmFields) {
        this.labels[field.confirm_label] = field.confirm
      }
    })
  }

  private getFieldValidationMessages(field: Field) {
    const validationMessages: Record<string, string> = {}

    Object.entries(field.messages).forEach(entry => {
      const [type, message] = entry

      if (message) {
        if (type === 'blank') validationMessages['required'] = message
        if (type === 'taken') validationMessages['taken'] = message
      }
    })

    return validationMessages
  }

  private assignFieldsToForm(fields: Field[], showConfirmFields: boolean) {
    fields.forEach(field => {
      const { name, default_value, confirm, required_field } = field

      const validationMessages = this.getFieldValidationMessages(field)

      const validations = []
      if (required_field) validations.push(Validators.required)

      if (field._type === 'CheckBoxGroupField') {
        const formControl = this.fb.array([], validations)
        formControl.setErrors(validationMessages)
        this.form.addControl(name, formControl)
      } else {
        const formControl = this.fb.control(default_value, validations)
        formControl.setErrors(validationMessages)
        this.form.addControl(name, formControl)
      }

      if (confirm !== undefined && showConfirmFields) {
        const formControl = this.fb.control(default_value, validations)
        formControl.setErrors(validationMessages)
        this.form.addControl(confirm, formControl)
      }
    })
  }

  setFormValues(data: Participant) {
    Object.entries(data).forEach(([key, value]) => {
      const control = this.form.get(key)

      if (control) control.setValue(value)
    })
  }

  showErrors(errors: Record<string, string>) {
    Object.entries(errors).forEach(entry => {
      const [label, error] = entry
      const name = this.labels[label]

      const control = this.form.get(name)
      if (control) control.setErrors({ customError: error })
    })
  }

  clearError(name: string) {
    const control = this.form.get(name)
    if (!control) return

    control.markAsUntouched()
  }
}
