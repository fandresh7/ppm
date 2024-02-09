import { Component, Input, OnInit, inject } from '@angular/core'
import { Course } from '@courses/logic/models/courses'
import { ParticipantService } from '@participant/services/participant.service'
import { CreatePdfService } from '@shared/features/pdf/services/create-pdf.service'
import { Participant } from '@superlikers/models/participant'
import { Observable, first, map } from 'rxjs'

@Component({
  selector: 'app-certificate-button',
  standalone: true,
  imports: [],
  templateUrl: './certificate-button.component.html',
  styleUrl: './certificate-button.component.css'
})
export class CertificateButtonComponent implements OnInit {
  @Input() size = 8
  @Input({ required: true }) course!: Course

  pdfService = inject(CreatePdfService)
  participantService = inject(ParticipantService)

  participant$!: Observable<Participant>
  canvas!: HTMLCanvasElement | undefined

  constructor() {
    this.participant$ = this.participantService.participant$
  }

  ngOnInit(): void {
    this.generatePdf().subscribe()
  }

  get sizeClasses() {
    return `w-${this.size} h-${this.size}`
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
