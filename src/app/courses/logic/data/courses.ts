import { Course } from '../models/courses'

export const COURSES: Course[] = [
  {
    id: 1,
    category: 'course_1',
    name: 'I. VIC Básico',
    description:
      'Aprende todos los datos básicos que necesitas tener claro para tu primer encuentro con nuestro Costo Variable Industrial, desde un enfoque sencillo y paso a paso. <br><br> En este curso, identificarás la ubicación de VIC dentro de nuestro estado de ganancias y pérdidas (P&L). Además de las características de los costos que componen al VIC y cómo se presupuesta el costo de los SKUS que producimos en AB InBev. <br><br> También entenderás cómo gestionamos las variaciones geográficas, de precio y performance, que tenemos durante el año. Para cerrar, pondrás en práctica todo lo aprendido, identificando cada variación del VIC (costo variable industrial) con ejemplos prácticos diseñados para ti. <strong class="bold">¡Toma este curso y comienza a aprender!</strong> ',
    pilar: 'VIC',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/VICBasico.png',
    assessment: 1,
    expert: '',
    lessonsIds: [56, 51, 1, 2, 3, 4, 5, 6, 7, 8, 45],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 2,
    category: 'course_2',
    name: "II. KPI's y Monetización",
    description:
      'Prepárate para conocer el sistema de medición de AB InBev paso a paso. <br><br> Al tomar este curso básico comprenderás el marco general de nuestro sistema de medición, su monetización, y cómo usamos esta información para mantener y mejorar los resultados de nuestra compañía, garantizando alineación a escala global y excelencia en la gestión. Apúntate ahora mismo y comienza tu recorrido.',
    pilar: 'KPI',
    level: 'level2',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/KPI_Intro_1.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/ExpertaKPImonetizacion.png',
    assessment: 2,
    expert: '',
    lessonsIds: [57, 52, 9, 10, 48, 11, 12, 13, 14, 15, 16, 47],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 3,
    category: 'course_3',
    name: 'III: Champions',
    description:
      '¡Atrévete a descubrir el gran Champions que hay en ti! <br> Este curso es un viaje de conocimiento en el que aprenderás por qué somos parte integral del ADN de nuestra compañía conociendo los roles claves que intervienen en nuestra rutina anual y mensual. Además, pondrás en práctica el cálculo de los ahorros en los diferentes tipos de iniciativas con ejemplos especialmente diseñados para ti.  Te aseguramos que al finalizar este curso serás un Champion. <span class="bold">¡Inicia este curso hoy!</span>',
    pilar: 'VIC',
    level: 'level3',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Intro_1.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/ExpertoChampions.png',
    assessment: 3,
    expert: '',
    lessonsIds: [58, 53, 17, 18, 19, 49, 20, 21, 22, 23, 46],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 4,
    category: 'course_4',
    name: 'IV. Operaciones Verticalizadas',
    description:
      "Atrévete a descubrir el <span class='bold'>proceso de producción de algunos de los ingredientes e insumos necesarios para la obtención de una gran cerveza.</span> <br><br> Conoce las características de los costos que componen las <span class='bold'>Operaciones Verticalizadas,</span> explorando el paso a paso de cada uno de los procesos de fabricación de nuestros productos: malta, maíz, botella, tapa y etiqueta. Comprende por qué controlamos estrictamente nuestros costos para liberar recursos y mantener un crecimiento sostenible de nuestros ingresos, aplicando casos prácticos diseñados para ti, donde identificarás coproductos, spoilage y todas las variables de costos de cada una de las etapas del proceso. ",
    pilar: 'VERTICAL OPERATIONS',
    level: 'level4',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Intro.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/OperacionesVerticalizadas.png',
    assessment: 4,
    expert: '',
    lessonsIds: [59, 54, 24, 25, 26, 27, 28, 50, 29, 30, 31, 32, 43],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 5,
    category: 'course_5',
    name: 'V. ZBB (Introducción)',
    description:
      "Bienvenidos a un recorrido por la <span class='bold'>metodología en la asignamos y monitoreamos todos nuestros gastos fijos</span> con el fin de optimizar costos en la compañía. En este curso de PPM University aprenderás conceptos básicos de <span class='bold'>Zero-Based Budgeting o Presupuesto Base Cero,</span>entendiendo a fondo la matriz que estructura y distribuye responsabilidades, paquetes y subpaquetes en Supply. Además, explorarás a detalle el paquete de Mantenimiento y para cerrar nuestro experto ZBB te acompañará en un recorrido a profundidad por el Dashboard en Power BI. ¿Estás listo? <span class='bold'>¡Inicia hoy!</span>",
    pilar: 'ZBB',
    level: 'level5',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Intro_1.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/ExpertoZBB.png',
    assessment: 5,
    expert: '',
    lessonsIds: [60, 55, 33, 34, 35, 36, 44, 37, 38, 39, 40, 41, 42],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 6,
    category: 'course_6',
    name: 'VI. CAPEX ToolKit 2.0',
    description:
      'Acepta el desafío y haz un recorrido por el Single Source of Truth (SSOT). En este curso de PPM University aprenderás a detalle el flujo de trabajo de la gestión del CAPEX, por cada una de nuestras BUs de Middle Americas. ¡Avanza y sigue fortaleciendo tu PPM Mindset!.',
    pilar: 'CAPEX',
    level: 'level6',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/CAPEXToolKIt.png',
    assessment: 6,
    expert: '',
    lessonsIds: [91, 102, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 96],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 7,
    category: 'course_7',
    name: 'VI.I. CAPEX ToolKit 2.0 PEC',
    description:
      'Acepta el desafío y haz un recorrido por el Single Source of Truth (SSOT). En este curso de PPM University aprenderás a detalle el flujo de trabajo de la gestión del CAPEX, por cada una de nuestras BUs de Middle Americas. ¡Avanza y sigue fortaleciendo tu PPM Mindset!.',
    pilar: 'CAPEX',
    level: 'level7',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/CAPEXToolKIt.png',
    assessment: 7,
    expert: '',
    lessonsIds: [97, 99, 71, 72, 73, 74, 75, 76, 98],
    requirements: [6],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 8,
    category: 'course_8',
    name: 'VI.II. CAPEX ToolKit 2.0 MEX',
    description:
      'Acepta el desafío y haz un recorrido por el Single Source of Truth (SSOT). En este curso de PPM University aprenderás a detalle el flujo de trabajo de la gestión del CAPEX, por cada una de nuestras BUs de Middle Americas. ¡Avanza y sigue fortaleciendo tu PPM Mindset!.',
    pilar: 'CAPEX',
    level: 'level8',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/CAPEXToolKIt.png',
    assessment: 8,
    expert: '',
    lessonsIds: [99, 77, 78, 79, 80, 81, 82, 100],
    requirements: [6],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 9,
    category: 'course_9',
    name: 'VI.IV. CAPEX ToolKit 2.0 COL',
    description:
      'Acepta el desafío y haz un recorrido por el Single Source of Truth (SSOT). En este curso de PPM University aprenderás a detalle el flujo de trabajo de la gestión del CAPEX, por cada una de nuestras BUs de Middle Americas. ¡Avanza y sigue fortaleciendo tu PPM Mindset!.',
    pilar: 'CAPEX',
    level: 'level9',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/CAPEXToolKIt.png',
    assessment: 9,
    expert: '',
    lessonsIds: [101, 83, 84, 85, 86, 87, 88, 103],
    requirements: [6],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 10,
    category: 'course_10',
    name: 'VI.III. CAPEX ToolKit 2.0 CAC-HES',
    description:
      'Acepta el desafío y haz un recorrido por el Single Source of Truth (SSOT). En este curso de PPM University aprenderás a detalle el flujo de trabajo de la gestión del CAPEX, por cada una de nuestras BUs de Middle Americas. ¡Avanza y sigue fortaleciendo tu PPM Mindset!.',
    pilar: 'CAPEX',
    level: 'level10',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/certificados/CAPEXToolKIt.png',
    assessment: 10,
    expert: '',
    lessonsIds: [104, 89, 90, 92, 93, 94, 95, 105],
    requirements: [6],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 11,
    category: 'course_11',
    name: 'VLC Básico',
    description:
      'Atrévete a descubrir los conceptos y procesos básicos que hacen parte de nuestra operación Logística. Conoce las características de los costos que componen VLC y la forma en la que impactan a cada paquete. Te aseguramos que al finalizar este curso obtendrás un conocimiento básico de los costos variables logísticos, siendo esto un gran plus para reconocer y entender cómo funciona la operación y el impacto que tienen cada uno de estos costos en la logística. ¿Estás listo? Inicia el curso',
    pilar: 'VLC',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Intro_Curso_VLC_Basico.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/diplomas/VLC+B%C3%81SICO.png',
    assessment: 11,
    expert: 'Leticia Lopez Lazaro',
    lessonsIds: [
      145, 106, 107, 108, 109, 115, 116, 117, 110, 111, 112, 113, 114
    ],
    requirements: [],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 12,
    category: 'course_12',
    name: 'CBS: Paso a Paso',
    description:
      '¡Bienvenido a tu curso CBS: Paso a Paso! Un curso rápido completamente dedicado a ser tu guía de conocimiento. Prepárate y sigue el paso a paso para el correcto llenado de este formato de la mano de nuestra experta Luz Elena Arizpe. ¿Estás listo? Comencemos.',
    pilar: 'CAPEX',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Intro_Curso_CBS.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/diplomas/CBS+-+PASO+A+PASO.png',
    assessment: 11,
    expert: 'Luz Elena Arizpe',
    lessonsIds: [118, 119, 120, 121, 122, 123, 124, 125],
    requirements: [6, 7, 8, 9, 10],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 13,
    category: 'course_13',
    name: 'CAPEX MAZsive',
    description:
      '<p>¡Bienvenido a <strong>CAPEX MAZsive</strong>!</p> <p>Una herramienta para facilitar el control financiero de los proyectos de nuestra zona, Middle Americas, conectado en tiempo real diferentes fuentes de datos.</p> <p>En este curso aprenderás a:</p> <ul> <li>Navegar en cada uno de los módulos de la herramienta.</li> <li>Controlar en tiempo real la ejecución de CAPEX de proyectos individuales, por cervecería, país o BU.</li> <li>Controlar los ahorros que se han tenido en los proyectos.</li> <li>Llevar el tracking del estado de aprobación de tus proyectos, con información directa de Capex360.</li> </ul> <p>¿Estás listo para un nuevo viaje? Inicia el curso.</p>',
    pilar: 'PPM Of The Future',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Intro_Curso_CAPEX_MAZsive.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/diplomas/CAPEX+MAZsive.png',
    assessment: 11,
    expert: ' Beatriz Pepita |  Brianna Martin',
    lessonsIds: [
      126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
      141, 142, 143
    ],
    requirements: [6, 7, 8, 9, 10],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 14,
    category: 'course_14',
    name: 'Champions: ENG & CAPEX',
    description:
      '<p>Bienvenido a un nuevo curso. ¡Una oportunidad sin igual para identificar diferentes formas de hacer eficiente el budget de tus proyectos! Inicia el curso y descubre cómo lograr los objetivos de tu proyecto de manera estratégica: con menos dinero, pero garantizando la calidad y el alcance de tus proyectos. ¿Estás listo para sumarte a este reto con Champions?</p>',
    pilar: 'CAPEX',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Intro_Curso_CAPEX_MAZsive.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/diplomas/Champions+ENG+%26+Capex.png',
    assessment: 11,
    expert: 'Luz Elena Arizpe',
    lessonsIds: [146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157],
    requirements: [6, 7, 8, 9, 10],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 15,
    category: 'course_15',
    name: 'Leasing',
    description:
      '<p>¡Bienvenido a tu curso de Leasing! Conoce todo acerca del Leasing, una alternativa con la que podemos adquirir inmuebles,  o incluso equipos de transporte para hacer más eficientes nuestros costos y atender las necesidades de la operación. ¿Estás listo para unirte en está emocionante aventura de aprendizaje? Da click e inicia el curso. </p>',
    pilar: 'VLC CASHFLOW',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Intro_Curso_Leasing.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Leasing.png',
    assessment: 11,
    expert: 'Laura Vasquez',
    lessonsIds: [
      158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
      173, 174
    ],
    requirements: [11],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 16,
    category: 'course_16',
    name: 'Postmortem: Paso a Paso',
    description:
      '<p>Aprende todos los datos básicos que necesitas tener claro para evaluar el resultado real frente a los objetivos del caso de negocio. Bienvenido a tu primer encuentro con nuestro formato postmortem, desde un enfoque sencillo y paso a paso. Te aseguramos que al terminar este curso habrás aprendido a identificar oportunidades de mejora en las etapas de evaluación, aprobación, planificación y ejecución de tus proyectos. ¡Toma este curso y comienza a aprender!</p>',
    pilar: 'CAPEX',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_16/Intro_Curso_Postmortem.mp4',
    certificadoImage:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Leasing.png',
    assessment: 11,
    expert: 'Rafael Martinez | Marisol Pilco | Carlos Marin',
    lessonsIds: [175, 176, 177, 178, 179, 180, 181, 182, 183, 184],
    requirements: [6, 7, 8, 9, 10],
    contentHours: 2,
    practiceHours: 12
  },
  {
    id: 17,
    category: 'course_17',
    name: 'VLC PPM',
    description:
      '<p>Es momento de subir unos escalones en tu conocimiento.</p> <p>Bienvenido a tu curso VLC PPM</p> <p>¡Una oportunidad sin igual para profundizar en los costos de VLC!</p> <p>Aprende de la mano de nuestra experta Leticia López PPM T1 y T2 Performance Manager a:</p> <ul> <li>Identificar cuáles son los costos variables logísticos que se contabilizan en AB InBev y su impacto en cada uno de los paquetes.</li> <li>Conocer el Flex Budget y las variaciones que se pueden presentar en el proceso logistico.</li> <li>Y realizar un recorrido detallado por el SCFD, la herramienta en la que reportamos mensualmente al equipo global toda la información del gasto generado al cierre de VLC.</li> </ul> <p>¿Estás listo? </p>',
    pilar: 'VLC',
    level: 'level1',
    introductionVideo:
      'https://contenidospmm.s3.amazonaws.com/cursos/course_17/Intro_Curso_VLC_PPM.mp4',
    certificadoImage:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/vclpmmCertificado.png',
    assessment: 11,
    expert: 'Leticia Lopez Lazaro',
    lessonsIds: [
      185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199
    ],
    requirements: [1],
    contentHours: 2,
    practiceHours: 12
  }
]
