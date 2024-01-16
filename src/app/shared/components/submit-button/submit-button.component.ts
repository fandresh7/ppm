import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-submit-button',
  standalone: true,
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() customClasses = 'button'
  @Input() label = 'Enviar'
  @Input() isLoading = false
  @Input() type: 'button' | 'submit' = 'button'
}
