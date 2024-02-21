import { Component, Input, OnInit, inject } from '@angular/core'
import { Course } from '@courses/logic/models/courses'
import { RoundedProgressComponent } from '../rounded-progress/rounded-progress.component'
import { CertificateButtonComponent } from '../certificate-button/certificate-button.component'
import { ParticipantService } from '@participant/services/participant.service'
import { Observable, first, map } from 'rxjs'
import { Participant } from '@superlikers/models/participant'
import { CreatePdfService } from '@shared/features/pdf/services/create-pdf.service'

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [RoundedProgressComponent, CertificateButtonComponent],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css'
})
export class CertificateCardComponent implements OnInit {
  participantService = inject(ParticipantService)
  pdfService = inject(CreatePdfService)

  @Input() course!: Course

  participant$!: Observable<Participant>
  canvas!: HTMLCanvasElement | undefined

  constructor() {
    this.participant$ = this.participantService.participant$
  }

  ngOnInit(): void {
    this.generatePdf().subscribe()
  }

  generatePdf() {
    return this.participant$.pipe(
      map(participant => {
        this.create(participant, this.course)
      }),
      first()
    )
  }

  async create(participant: Participant, course: Course) {
    this.canvas = await this.pdfService.createPdf({
      participant,
      image: course.certificadoImage
    })
  }

  download(event: Event) {
    event.preventDefault()

    if (this.canvas) {
      this.pdfService.downloadPdf({ canvas: this.canvas, course: this.course })
    }
  }
}
