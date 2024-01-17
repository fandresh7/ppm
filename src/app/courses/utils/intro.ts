import { IntroStep } from 'intro.js/src/core/steps'

export const sidebarTutorialSteps: Partial<IntroStep>[] = [
  {
    intro:
      'Explora todas las <strong class="bold">secciones del campus de tu nueva Universidad PPM </strong> has click para desplegar el menú',
    element: '#sidebar_intro_1'
  },
  {
    intro:
      '<strong class="bold">Aprende desde donde estés</strong> <br> Mira tus cursos en progreso y demás contenidos disponibles. <br> Accede a desafíos de conocimiento para desbloquear insignias y descubre hacks rápidos aplicables a tu rol.',
    element: '#sidebar_intro_2'
  },
  {
    intro:
      '<strong class="title-intro">PPM Mindset al alcance de un clic </strong> Descubre todo el contenido que necesitas comprender para llevar tu conocimiento del área al siguiente nivel.',
    element: '#sidebar_intro_3'
  },
  {
    intro:
      '<strong class="title-intro">¡Reconoce tus logros!</strong> Completa tus cursos con éxito y desbloquea tus certificaciones. <br> Compártelas con tu equipo o en tus redes profesionales. ',
    element: '#sidebar_intro_4'
  },
  {
    intro:
      '<strong class="title-intro">Aprende en comunidad</strong> Inicia la conversación y comparte en este espacio tus conocimientos. <br> Activa el poder del aprendizaje colaborativo. ',
    element: '#sidebar_intro_5'
  }
]
