import { Injectable } from '@angular/core'

import jsPDF from 'jspdf'

import { Participant } from '@superlikers/models/participant'
import { Course } from '@courses/logic/models/courses'

interface PdfParams {
  participant: Participant
  image: string
}

interface DownloadParams {
  canvas: HTMLCanvasElement
  course: Course
}

@Injectable({
  providedIn: 'root'
})
export class CreatePdfService {
  async createPdf({ participant, image }: PdfParams) {
    await document.fonts.load('bold 58px Yellowtail')

    const background = new Image()
    background.crossOrigin = 'anonymous'
    background.src = image

    const canvas = document.createElement('canvas')
    const name = this.capitalizeName(participant['nombre-completo'])

    background.onload = function () {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const canvasWidth = background.width
      const canvasHeight = background.height

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight)
      ctx.fillStyle = '#1B2B3C'
      ctx.font = 'bold 58px Yellowtail'

      const nameWidth = ctx.measureText(name).width

      ctx.fillText(name, (canvasWidth - nameWidth) / 2, canvasHeight / 1.9)
    }

    return canvas
  }

  downloadPdf({ canvas, course }: DownloadParams) {
    const pdf = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4'
    })

    const imageData = canvas.toDataURL('image/jpeg', 1.0)

    const imgWidth = pdf.internal.pageSize.getWidth()
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2
    const y = (pdf.internal.pageSize.getHeight() - imgHeight) / 2

    pdf.addImage(
      imageData,
      'JPEG',
      x,
      y,
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    )

    pdf.save(`${course.name}.pdf`)
  }

  capitalizeName(name: string): string {
    return name.replace(/\b\w/g, char => char.toUpperCase())
  }
}
