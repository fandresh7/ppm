import { Pipe, PipeTransform } from '@angular/core'
import { InputType, InputTypes } from '@superlikers/models/inputs'

@Pipe({
  name: 'inputType',
  standalone: true
})
export class InputTypePipe implements PipeTransform {
  transform(value: InputType): string {
    return InputTypes[value]
  }
}
