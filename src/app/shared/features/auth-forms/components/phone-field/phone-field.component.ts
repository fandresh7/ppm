import { Component, Input, inject } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'

import intlTelInput from 'intl-tel-input'

import { Field } from '@superlikers/models/inputs'
import { FormService } from '../../services/form.service'
import { InputTypePipe } from '../../pipes/input-type'

@Component({
  selector: 'app-phone-field',
  standalone: true,
  imports: [ReactiveFormsModule, InputTypePipe],
  templateUrl: './phone-field.component.html',
  styleUrl: './phone-field.component.css'
})
export class PhoneFieldComponent {
  @Input() field!: Field

  formService = inject(FormService)

  form!: FormGroup

  constructor() {
    this.form = this.formService.getForm()

    setTimeout(() => {
      this.setPhoneInput()
    }, 0)
  }

  clearError(name: string) {
    this.formService.clearError(name)
  }

  onPhoneboxChange(event: Event) {
    const target = event.target as HTMLInputElement
    const phone = target.value

    const containerElement = target.parentElement
    const countryCodeElement = containerElement?.querySelector(
      '.iti__selected-dial-code'
    )

    const countryCode = countryCodeElement?.innerHTML.replace('+', '')

    const control = this.form.get(target.name)
    if (control) {
      control.setValue(`${countryCode}${phone}`)
    }
  }

  setPhoneInput() {
    const input = document.querySelector(`input[name="${this.field.name}"]`)
    if (!input) return

    intlTelInput(input, {
      customContainer: 'w-full',
      initialCountry: 'co',
      onlyCountries: ['co', 'pe'],
      separateDialCode: true,
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
    })
  }
}
