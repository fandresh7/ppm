import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class FeedbackMessagesService {
  messageSwal = Swal.mixin({
    imageWidth: 100,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      confirmButton: 'button',
      cancelButton: 'button-grey ml-4'
    },
    buttonsStyling: false
  })

  showInitialTestFeedback() {
    return this.messageSwal.fire({
      confirmButtonText: 'Continuar',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/text_correcto.png',
      title: `¡Gracias!`,
      html: `<p>Solo queríamos probar tu conocimiento, ahora llegó el momento de ver el curso.</p>`
    })
  }

  showTestIncomplete() {
    return this.messageSwal.fire({
      title: 'Ha ocurrido un error',
      html: 'Todas las preguntas son requeridas',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/test_error.png',
      confirmButtonText: 'Continuar'
    })
  }

  showDownloadMessage(correctAnswers: number, totalQuestions: number) {
    return this.messageSwal.fire({
      title: '¡Bien hecho, aprendiz!',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/text_correcto.png',
      html: `<p>Obtuviste <strong>${correctAnswers}/${totalQuestions}</strong> respuestas correctas en tu test final.</p>
            <p>Descarga tu certificado de este curso y compártelo con tu equipo o en tus perfiles profesionales.</p>`,
      confirmButtonText: 'Descargar Certificado'
    })
  }

  showVideoAttemptFeedback() {
    return this.messageSwal.fire({
      title: '¡La evaluación no fue aprobada!',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/test_intento.png',
      html: '<p>Aprendiz ahora debes ver el siguiente video, para ganar un nuevo intento.</p>',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Repasar Contenido',
      cancelButtonText: 'Ver Video'
    })
  }

  showTestWrongMessage() {
    return this.messageSwal.fire({
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'Repasar Contenido',
      confirmButtonText: 'Presentar nuevamente',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/test_intento.png',
      title: '¡La evaluación no fue aprobada!',
      html: `<p>Aprendiz has marcado alguna respuesta incorrecta.</p>
          <p>Repasa todo el contenido de las unidades cuando quieras 
          y luego será momento de poner en práctica lo aprendido.</p>`
    })
  }

  showDragdropWrongMessage() {
    return this.messageSwal.fire({
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Seguir intentando',
      confirmButtonText: 'Continuar',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/quiz-fallaste.svg',
      title: 'Aprendiz esta vez fallaste',
      html: `<p>Pero tus ganas por demostrar lo aprendido siguen intactas. </br> Anímate a intentarlo nuevamente.</p>`
    })
  }

  showDragdropSuccessMessage() {
    return this.messageSwal.fire({
      showConfirmButton: true,
      confirmButtonText: 'Continuar',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/quiz-increible.svg',
      title: '¡Lo has hecho increíble!',
      html: `<p>Aceptaste el reto y descubriste nuevas habilidades en el área PPM. Avanza a la siguiente lección y sigamos construyendo conocimiento juntos.</p>`
    })
  }

  showMemorySuccessMessage(oportunities: number) {
    return this.messageSwal.fire({
      showConfirmButton: true,
      confirmButtonText: 'Continuar',
      imageUrl:
        'https://superlikers-themes.s3.amazonaws.com/ppmu/quiz-increible.svg',
      title: 'Felicitaciones!',
      html: `<p>Lo has terminado en ${oportunities} intentos.</p>`
    })
  }
}
