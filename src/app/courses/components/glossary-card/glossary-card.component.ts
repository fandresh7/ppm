import { Component, Input } from '@angular/core'
import { Glossary } from '@courses/logic/models/glossary'

@Component({
  selector: 'app-glossary-card',
  standalone: true,
  templateUrl: './glossary-card.component.html',
  styleUrl: './glossary-card.component.css'
})
export class GlossaryCardComponent {
  @Input() item!: Glossary
}
