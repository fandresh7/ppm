import { Lesson, LessonType } from '../models/lessons'

export const LESSONS: Lesson[] = [
  {
    id: 1,
    category: 'lesson_1',
    type: LessonType.Video,
    name: '1. VIC en el P&L',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit1_Lesson1.png',
    description:
      'En esta lección aprenderás a identificar y comprender nuestra estructura de profit and loss statement (P&L), ubicando a VIC dentro de ella. <br><br>Ten en cuenta descargar los recursos de esta lección para consultarlo cuando quieras: <ul>    <li class="mt-10">-Descarga la <strong class="bold">infografía</strong> y ten a la mano las definiciones básicas de la primera lección de este curso. </li> <li class="mt-10">-Descarga el <strong class="bold">SCFD Origination Handbook</strong> </li> <li class="mt-10">- VIC y comprende toda la información clave sobre procesos, sistemas y preguntas frecuentes.</li> </ul>',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit1_Lesson1_1.mp4',
      duration: '3:16',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/U1_L1_VIC_BASICS_LITE.vtt'
    },
    resources: [
      {
        name: 'Infografía Glosario',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/Infograf%C3%ADa+Glosario.pdf'
      },
      {
        name: 'VIC Handbook',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VIC+Handbook.pdf'
      },
      {
        name: 'Presentación de lección (VIC - U1L1)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/Presentaci%C3%B3n+de+lecci%C3%B3n+(VIC+-+U1L1).pdf'
      }
    ]
  },
  {
    id: 2,
    category: 'lesson_2',
    type: LessonType.Video,
    name: '2. ¿Qué es VIC?',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit1_Lesson2.png',
    description:
      'Avanza y descubre más detalles. En esta lección respondemos qué es VIC y cuáles son las categorías de costos que lo componen. <br><br> Descarga los recursos de esta lección y consúltalo cuando quieras.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit1_Lesson2.mp4',
      duration: '6:45',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/VIC_U1_L2_QUE_ES_VIC.vtt'
    },
    resources: [
      {
        name: 'Presentación de lección (VIC - U1L2)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PPT_VICB_Unit1_Lesson2.pdf'
      }
    ]
  },
  {
    id: 3,
    category: 'lesson_3',
    type: LessonType.Video,
    name: '3. Bienvenido a casa VIC',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/Thumbnail_VIC_Unit1_Lesson3.png',
    description:
      'Conoce la estructura de nuestra casa VIC y cómo sus pilares (Business Cycle) trabajan juntos para alcanzar las metas VIC. <strong class="bold mt-10 block">¡Inicia el Tour!</strong> Descarga los recursos de esta lección y consúltalo cuando quieras.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit1_Lesson3.mp4',
      duration: '4:58',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/U1_L3_casa_VIC.vtt'
    },
    resources: [
      {
        name: 'Presentación de lección (VIC - U1L3)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PPT_VICB_Unit1_Lesson3.pdf'
      }
    ]
  },
  {
    id: 4,
    category: 'lesson_4',
    type: LessonType.Video,
    name: '4. Introducción al modelo de costo',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit3_Lesson7.png',
    description:
      'En esta lección aprenderás las variables de costo que se presentan en la producción de cerveza. Adéntrate en la explicación del modelo de costos con el apoyo de nuestro primer caso de estudio, analizando tres cervecerías de México.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit2_Lesson4.mp4',
      duration: '7:22',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/VICB_Unit2_Lesson4.vtt'
    },
    resources: [
      {
        name: 'Presentación de lección (VIC - U2L4)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PPT_VICB_Unidad2_Leccion4.pdf'
      }
    ]
  },
  {
    id: 5,
    category: 'lesson_5',
    type: LessonType.Video,
    name: '5. Variaciones al estándar y Costo Estándar Nacional',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit2_Lesson5.png',
    description:
      'Comprende los tres tipos de variaciones al estándar definidos en sesiones pasadas: Variación uso o performance, Variación precio y Variación geográfica o Supply Plant Mix, considerando el costo estándar nacional.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit2_Lesson5.mp4',
      duration: '8:48',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/VICB_Unit2_Lesson5.vtt'
    },
    resources: [
      {
        name: 'Presentación de lección (VIC - U1L3)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PPT_VICB_Unit2_Lesson5.pdf'
      }
    ]
  },
  {
    id: 6,
    category: 'lesson_6',
    type: LessonType.Video,
    name: '6. Conozca sus números',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit2_Lesson6.png',
    description:
      'Identifica el costo estándar y sus variaciones en una sola gráfica. Entiende cómo funciona el waterfall de VIC, sus divisiones y cómo puedes interpretar los datos que allí se presentan.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_Unit2_Lesson6.mp4',
      duration: '5:39'
    },
    resources: [
      {
        name: 'Presentación de lección (VIC - U2L6)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PPT_VICB_Unit2_Lesson6.pdf'
      }
    ]
  },
  {
    id: 7,
    category: 'lesson_7',
    type: LessonType.Video,
    name: '7. Budget Paso a Paso',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/poster/Thumbnail_VIC_Unit3_Lesson7.png',
    description:
      'Comprende de la mano de nuestra experta VIC, cómo se construye el presupuesto en AB InBev, mediente la explicación práctica de un waterfall. <br><br> Descarga el <strong class="bold">template de budget</strong> y práctica con datos reales.  ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/U3_L7_+tutorial+budget+sin+subs-.mp4',
      duration: '7:35',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit3_Lesson7.mp4_en.vtt'
    },
    resources: [
      {
        name: 'TEMPLATE BUDGET',
        file: 'https://superlikers-themes.s3.amazonaws.com/ppmu/TemplateBudget_xlsx.xlsx'
      }
    ]
  },
  {
    id: 8,
    category: 'lesson_8',
    type: LessonType.Infografia,
    name: '8. Infografía: Ideas clave del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Ya estás muy cerca de terminar el curso. Descarga la <span class="bold">infografía final</span> y ten a la mano todos los datos claves vistos a lo largo del curso <span class="bold">VIC Básico: Paso a Paso.</span>',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/PDF_PUNTOS+CLAVES.pdf'
    },
    resources: []
  },
  {
    id: 9,
    category: 'lesson_9',
    type: LessonType.Video,
    name: "1. Definición y Top KPI's",
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson1.png',
    description:
      "Identifica de forma general qué medimos en AB InBev y por qué lo hacemos. Únete al recorrido por el Top 10 Global KPI's y nuestro ranking zonal. <span class='bold'>¡Vamos allá!</span> <br><br> Ten a la mano todo el contenido extra que trae tu primera lección: <ul><li> <strong class='bold'>-Top de definiciones básicas</strong> de los Indicadores de desempeño en AB InBev.</li><li class='mt-10'>-Infografía VOP's y KPI's.</li></ul>",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPI_Unit1_Lesson1.mp4',
      duration: '7:44'
    },
    resources: [
      {
        name: "Recurso: KPI's Glosario",
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/%5BPDF%5D+KPI+DEFINICIONES+B%C3%81SICAS.pdf'
      },
      {
        name: 'Verticales KPIS',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/INFOGRAFIA_VOP_KPIs.pdf'
      },
      {
        name: 'Presentación curso',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/%5BPRESS%5D+Curso+Indicadores.pdf'
      }
    ]
  },
  {
    id: 10,
    category: 'lesson_10',
    type: LessonType.Video,
    name: "2. Proceso de medición con Top KPI's: Parte I",
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson2.1.png',
    description:
      "Sumérgete en un viaje express por nuestro proceso de producción visto desde un contexto de medición. <strong class='bold'>Ten a la mano todo el contenido extra que trae esta lección:</strong> <br> <br> -Tabla de KPI's. <br><br> Avanza a la siguiente lección y completa la prueba rápida.  ",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPI_Unit1_Lesson2.1.mp4',
      duration: '10:08',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/kpi/PI_Unit1_Lesson2.1_ING.vtt'
    },
    resources: [
      {
        name: 'Tabla de KPIS ',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPIs+Information.xlsm'
      }
    ]
  },
  {
    id: 11,
    category: 'lesson_11',
    type: LessonType.Video,
    name: "3. Proceso de medición con Top KPI's: Parte II",
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson2.2.png',
    description:
      "Continua en el viaje express por el proceso de medición explorarando los KPI's restantes de nuestro TOP 10 GLOBAL.",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPI_Unit1_Lesson2.2.mp4',
      duration: '3:20',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/kpi/KPI_Unit1_Lesson2.2_ING.vtt'
    },
    resources: []
  },
  {
    id: 12,
    category: 'lesson_12',
    type: LessonType.Video,
    name: "4. Informes de KPI's",
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson3_Tutorial.png',
    description:
      "Aprende de la mano de nuestra experta en KPI's a identificar los elementos claves de un Informe/Reporte de Indicadores en AB InBev.",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/KPI_Unit1_Lesson3_1.mp4',
      duration: '7:25',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/kpi/KPI_Unit2_Lesson4_ING.vtt'
    },
    resources: []
  },
  {
    id: 13,
    category: 'lesson_13',
    type: LessonType.Video,
    name: '5. Agregaciones | Promedios | Last Value',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson4.png',
    description:
      "En esta lección conocerás los cálculos básicos de agregaciones, promedios y last value, tomando como referencia algunos de nuestros KPI's del TOP 10 GLOBAL.",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPI_Unit2_Lesson4.mp4',
      duration: '7:02',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/kpi/KPI_Unit2_Lesson4_ING..vtt'
    },
    resources: []
  },
  {
    id: 14,
    category: 'lesson_14',
    type: LessonType.Infografia,
    name: '6. Infografía: Políticas globales de cálculo',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson5.png',
    description:
      "Descarga la <span class='bold'>infografía</span> y descubre todo lo que necesitas saber sobre las <span class='bold'>políticas globales de medición y cálculo para nuestros KPI's.</span>",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/PDF_POLITICAS-GLOBALES_V2.pdf'
    },
    resources: []
  },
  {
    id: 15,
    category: 'lesson_15',
    type: LessonType.Video,
    name: '7. Monetización de KPIS y su método | Proceso para monetizar un KPI',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/posters/Thumbnail_KPI_Unit1_Lesson6.png',
    description:
      "Pon en práctica conceptos clave mientras conoces el paso a paso básico del proceso de monetización de KPI's en AB InBev.",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/KPI_Unit3_Lesson6.mp4',
      duration: '10:55',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/kpi/KPI_Unit3_Lesson6_ING.vtt'
    },
    resources: []
  },
  {
    id: 16,
    category: 'lesson_16',
    type: LessonType.Infografia,
    name: '8. Infografía: Ideas clave del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      "Ya estás muy cerca de terminar el curso. <ul><li>-Descarga la <span class='bold'>infografía</span> y ten a la mano la <span class='bold'>información destacada del curso Indicadores de desempeño y monetización.</span></li><li class='mt-10'>-Descarga la <span class='bold'>presentación final</span> del curso y chécala cuando quieras.</li></ul> ",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/new/INFOGRAFIA_PUNTOS_CLAVES_KPIS+U3-L7.pdf'
    },
    resources: [
      {
        name: 'Presentación final del curso Indicadores y monetización (Incluye todas la lecciones)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/%5BPRESS%5D+Curso+Indicadores.pdf'
      },
      {
        name: 'Presentación final del curso Indicadores y monetización (Incluye todas la lecciones)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/%5BPRESS%5D+Curso+Indicadores.pptx'
      }
    ]
  },
  {
    id: 17,
    category: 'lesson_17',
    type: LessonType.Video,
    name: '1. Qué es Champions, fundamentos y principios',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/posters/Thumbnail_Champions_Unit1_Lesson1.png',
    description:
      "En esta lección aprenderás información básica sobre el programa de optimización de costos dentro de Supply, Logística y Procurement. <br><br> <strong class='bold'>-Descarga el CHAMPION PROGRAM HANDBOOK</strong> y comprende toda la información sobre el ciclo del proceso, iniciativas y tracking.",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit1_Lesson1_1.mp4',
      duration: '4:05',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit1_Lesson1_ING.vtt'
    },
    resources: [
      {
        name: 'Recurso: Champions Handbook',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/Champion+Program+Handbook+-+2020+-+July_update.pdf'
      }
    ]
  },
  {
    id: 18,
    category: 'lesson_18',
    type: LessonType.Video,
    name: '2. Roles:  PPM | Package owner | Project Leader',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/posters/Thumbnail_Champions_Unit1_Lesson2.png',
    description:
      'Comprende e identifica las funciones y responsabilidades de los roles clave de Champions.',
    VideoContent: {
      video:
        'https://ƒcontenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit1_Lesson2_1.mp4',
      duration: '2:51',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit1_Lesson2_ING.vtt'
    },
    resources: []
  },
  {
    id: 19,
    category: 'lesson_19',
    type: LessonType.Video,
    name: '3. Ciclo Champions: Anual',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/posters/Thumbnail_Champions_Unit1_Lesson3.1.png',
    description:
      'Prepárate para un recorrido guiado por nuestra rutina anual de trabajo y conoce cada una de las actividades que la componen. <br><br> Avanza a la siguiente lección y completa la prueba rápida. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit1_Lesson3.1.mp4',
      duration: '5:07',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit1_Lesson3.1_ING.vtt'
    },
    resources: []
  },
  {
    id: 20,
    category: 'lesson_20',
    type: LessonType.Video,
    name: '4. Ciclo Champions: Mensual',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/posters/Thumbnail_Champions_Unit1_Lesson3.2.png',
    description:
      'Conoce como organizamos las actividades mensuales y cuáles son las interacciones clave para el seguimiento de iniciativas. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit1_Lesson3.2.mp4',
      duration: '5:11',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit1_Lesson3.2_ING.vtt'
    },
    resources: []
  },
  {
    id: 21,
    category: 'lesson_21',
    type: LessonType.Video,
    name: '5. Tipos de iniciativas:  PI, VE, VPO/DPO, Footprint',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Identifica los conceptos y fórmula de cada iniciativas y entiende como funcionan.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit2_Lesson4.mp4',
      duration: '5:20',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit2_Lesson4_ESP.vtt'
    },
    resources: []
  },
  {
    id: 22,
    category: 'lesson_22',
    type: LessonType.Video,
    name: '6. Aprende con ejemplos ',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/posters/Thumbnail_Champions_Unit2_Lesson5.png',
    description:
      'Diferencia, cálcula e interpreta con casos prácticos los ahorros/beneficios de cada uno de los tipos de iniciativas del programa.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Unit2_Lesson5_1.mp4',
      duration: '10:10',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Unit2_Lesson5_ING.vtt'
    },
    resources: [
      {
        name: 'Presentación final del Curso Champions Paso a Paso (Incluye todas las lecciones)',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/%5BPRESS%5D+CURSO+CHAMPIONS.pdf'
      }
    ]
  },
  {
    id: 23,
    category: 'lesson_23',
    type: LessonType.Infografia,
    name: '7. Infografía / One pager: Ideas clave del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      "Ya estás muy cerca de terminar el curso. <ul><li>-Descarga la <span class='bold'>infografía</span> y ten a la mano la información destacada del curso Indicadores de desempeño y monetización.</li><li class='mt-10'>-Descarga la <span class='bold'>presentación final del curso</span> y chécala cuando quieras.</li></ul> ",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/INFO_CHAMPIONS_PASO_A_PASO.pdf'
    },
    resources: []
  },
  {
    id: 24,
    category: 'lesson_24',
    type: LessonType.Video,
    name: '1. Costos asociados a Verticales',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson1.png',
    description:
      'En esta lección aprenderás a identificar y comprender los tipos de costos y las categorías que los componen.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit1_Lesson1_1.mp4',
      duration: '9:15',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit1_Lesson1_ING.vtt'
    },
    resources: []
  },
  {
    id: 25,
    category: 'lesson_25',
    type: LessonType.Video,
    name: '2. Conoce la familia de Verticales',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson2.png',
    description:
      'Conoce la participación de las Operaciones Verticalizadas en la cadena de suministro, desde la materia Prima hasta el empaque.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit1_Lesson2_1.mp4',
      duration: '4:49',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit1_Lesson2_ING.vtt'
    },
    resources: []
  },
  {
    id: 26,
    category: 'lesson_26',
    type: LessonType.Video,
    name: '3. Malta: Proceso de producción',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson3.png',
    description:
      'Estudia el proceso productivo para obtener malta de calidad con el apoyo de nuestro primer caso de estudio, analizando cada una de las etapas del proceso maltero en las Operaciones Verticalizadas.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit2_Lesson3_1.mp4',
      duration: '11:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit2_Lesson3_ENG.vtt'
    },
    resources: []
  },
  {
    id: 27,
    category: 'lesson_27',
    type: LessonType.Video,
    name: '4. Maíz: Proceso de producción',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson4.png',
    description:
      'Conoce el proceso de producción del maíz y cómo trabajamos para que las mermas sean reutilizadas en otras industrias reduciendo al máximo los desperdecios en nuestra operación.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit2_Lesson4_1.mp4',
      duration: '6:01'
    },
    resources: []
  },
  {
    id: 28,
    category: 'lesson_28',
    type: LessonType.Video,
    name: '5. Botella: Proceso técnico de fabricación',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson5.1.png',
    description:
      "Prepárate para un recorrido guiado por el proceso de fabricación de botellas de vidrio en AB InBev. <strong class='bold'>¡Inicia el tour!</strong> <br><br> <span class='bold'>Avanza a la siguiente lección y completa la prueba rápida. </span>",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit3_Lesson5.1_1.mp4',
      duration: '9:10',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit3_Lesson5.1_ING.vtt'
    },
    resources: []
  },
  {
    id: 29,
    category: 'lesson_29',
    type: LessonType.Video,
    name: '6. Botella: Variables de costos en la producción',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson5.2.png',
    description:
      'Identifica las variables de costos en cada una de las etapas del proceso de fabricación de botellas y completa la misión.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit3_Lesson5.2_1.mp4',
      duration: '7:46',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit3_Lesson5.2.mp4_ING.vtt'
    },
    resources: []
  },
  {
    id: 30,
    category: 'lesson_30',
    type: LessonType.Video,
    name: '7. Fabricación de tapas: Paso a Paso',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson6.png',
    description:
      'Sigue el paso a paso a profundidad de las cinco etapas necesarias para producir Tapas en Middle Americas.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit3_Lesson6_1.mp4',
      duration: '11:21'
    },
    resources: []
  },
  {
    id: 31,
    category: 'lesson_31',
    type: LessonType.Video,
    name: '8. Caso práctico: Producción de etiquetas',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/posters/Thumbnail_Verticales_Unit1_Lesson8.png',
    description:
      'Descubre el proceso de producción de etiquetas con apoyo de un caso práctico. ¿Estás listo para una última misión?',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Unit3_Lesson7_1.mp4',
      duration: '8:54',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Unit3_Lesson7.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 32,
    category: 'lesson_32',
    type: LessonType.Infografia,
    name: '9. Infografía: Ideas clave del curso ',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      "Ya estás muy cerca de terminar el curso. <ul><li>-Descarga la <span class='bold'>infografía</span> y ten a la mano la información destacada del curso Indicadores de desempeño y monetización.</li><li class='mt-10'>-Descarga la <span class>presentación final del curso </span> y chécala cuando quieras. </li></ul> ",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/INF_+Puntos+Claves.pdf'
    },
    resources: [
      {
        name: 'Presentación final del curso',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/%5BPRESS%5D+CURSO+VERTICALES.pdf'
      },
      {
        name: 'Presentación final del curso',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/%5BPRESS%5D+CURSO+VERTICALES.pptx'
      }
    ]
  },
  {
    id: 33,
    category: 'lesson_33',
    type: LessonType.Video,
    name: '1. Matriz ZBB: Supply y sus paquetes',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit1_Lesson1.png',
    description:
      'Conoce qué es y cómo funciona la metodología de presupuesto utilizada en AB InBev para la optimización de nuestros costos.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Unit1_Lesson1_1.mp4',
      duration: '13:28',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit1_Lesson1.vtt'
    },
    resources: []
  },
  {
    id: 34,
    category: 'lesson_34',
    type: LessonType.Infografia,
    name: '2. Guía rápida del ZBB por los Paquetes Supply',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit1_Lesson2.png',
    description:
      "Descarga la guía consolidada e inicia el recorrido por la política global de los <span class='bold'>paquetes gestionados en la función Supply de Middle Americas.</span><br><br> Adicional descarga el consolidado de <span class='bold'>Politicas Globales 2023.</span>",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/PDF_ZBB_U1-L2_DIRECTIVAS.pdf'
    },
    resources: [
      {
        name: 'Recurso: PDF POLÍTICAS GLOBALES',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/2023+Global+ZBB+Policies+(Consolidated).pdf'
      }
    ]
  },
  {
    id: 35,
    category: 'lesson_35',
    type: LessonType.Video,
    name: '3. Rutina ZBB Supply MAZ',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit1_Lesson3.1.png',
    description:
      "Identifica cada una de las actividades y entregables de la rutina mensual de ZBB en Supply MAZ y aprende un poco más sobre la visualización de la rutina del paquete Mantenimiento. <br><br> <span class='bold'>Avanza a la siguiente lección y completa la prueba rápida. </span> ",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Unit1_Lesson3.1.mp4',
      duration: '6:36',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit1_Lesson3.1.vtt'
    },
    resources: []
  },
  {
    id: 36,
    category: 'lesson_36',
    type: LessonType.Video,
    name: '4. Rutina ZBB Supply MAZ | Simulación Paquete Mantenimiento ',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit1_Lesson3.2.png',
    description:
      'Mira esta lección y sigue el paso a paso de la simulación dentro del paquete de Mantenimiento que preparamos para ti.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Unit1_Lesson3.2_1.mp4',
      duration: '7:06',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit1_Lesson3.2.vtt'
    },
    resources: [
      {
        name: 'Recurso: Gestión de gastos ZBB & VIC',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/Gesti%C3%B3n+de+gastos+ZBB+%26+VIC.pdf'
      }
    ]
  },
  {
    id: 37,
    category: 'lesson_37',
    type: LessonType.Video,
    name: '5. Mantenimiento a fondo',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit1_Lesson4.png',
    description:
      "Explora a profundidad el paquete de Mantenimiento y todas las actividades relacionadas, identifica las tres líneas de costos y comprende el paso a paso del tratamiento y análisis de la información dentro del paquete. <br><br> Descarga el <span class='bold'>recurso y conoce el paso a paso del lineamiento regional México</span>  para la gestión del gastos del paquete <span class='bold'>ZBB & VIC.</span> ",
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Unit1_Lesson4.mp4',
      duration: '12:54',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit1_Lesson4.vtt'
    },
    resources: []
  },
  {
    id: 38,
    category: 'lesson_38',
    type: LessonType.Video,
    name: '6. Entendiendo las gráficas',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende en compañía del experto ZBB cómo analizar y obtener correctamente los datos dentro de nuestro dashboard ZBB Non People de Power BI.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/3.2+ZBB_U2_L5_sin+subs_1.mp4',
      duration: '22:01',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit2_Lesson5.vtt'
    },
    resources: []
  },
  {
    id: 39,
    category: 'lesson_39',
    type: LessonType.Video,
    name: '7. Vista ZBB Detallada',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit2_Lesson6.png',
    description:
      'Visualiza a detalle la sección Details, conoce cómo interactúa la información del ZBB a nivel BU, paquetes y subpaquetes.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/3.1+ZZB_U2_L6_sin+subs_1.mp4',
      duration: '14:23',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit2_Lesson6.vtt'
    },
    resources: []
  },
  {
    id: 40,
    category: 'lesson_40',
    type: LessonType.Video,
    name: '8. Vistas adicionales',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/posters/Thumbnail_ZBB_Unit2_Lesson7.png',
    description:
      'Prepárate para un recorrido por los filtros independientes LE Accuracy, Site Performance y Word cloud by Site de nuestro dashboard ZBB Non People de Power BI.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/3.+ZBB_L7_sin+subs_1.mp4',
      duration: '9:15',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Unit2_Lesson7.vtt'
    },
    resources: [
      {
        name: 'Presentación del Curso Introducción a ZBB',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/%5BPRESS%5D+Curso+ZBB.pdf'
      }
    ]
  },
  {
    id: 41,
    category: 'lesson_41',
    type: LessonType.Infografia,
    name: '9. Infografía: Ideas clave del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      "Ya estás muy cerca de terminar el curso. <ul><li>-Descarga la <span class='bold'>infografía</span> y ten a la mano la información destacada del curso Indicadores de desempeño y monetización.</li><li class='mt-10'>-Descarga la <span class='bold'> presentación final del curso </span> y chécala cuando quieras. </li></ul>",
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/%5BPRESS%5D+Curso+ZBB.pdf'
    },
    resources: [
      {
        name: 'Presentación del Curso Introducción a ZBB',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/%5BPRESS%5D+Curso+ZBB.pdf'
      },
      {
        name: 'Presentación del Curso Introducción a ZBB',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/%5BPRESS%5D+Curso+ZBB.pptx'
      }
    ]
  },
  {
    id: 42,
    category: 'introduccion_zbb',
    type: LessonType.Test,
    name: 'EVALUACIÓN FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 43,
    category: 'operaciones_verticalizadas',
    type: LessonType.Test,
    name: 'EVALUACIÓN FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 44,
    category: 'quiz_zzb',
    type: LessonType.Dragdrop,
    name: 'Quiz ZZB'
  },
  {
    id: 45,
    category: 'vic_paso',
    type: LessonType.Test,
    name: 'EVALUACIÓN FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 46,
    category: 'champions',
    type: LessonType.Test,
    name: 'EVALUACIÓN FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 47,
    category: 'indicadores_monetizacion',
    type: LessonType.Test,
    name: 'EVALUACIÓN FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 48,
    category: 'quiz_monetizacion',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 49,
    category: 'quiz_champions',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 50,
    category: 'quiz_verticales',
    type: LessonType.Memory,
    name: 'Quiz station'
  },
  {
    id: 51,
    category: 'lesson_42',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso <p class="bold">Itzayana Montesinos</p>',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/SUB_VICB_INTRO.vtt'
    },
    resources: []
  },
  {
    id: 51,
    category: 'lesson_42',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso Itzayana Montesinos',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/VIC/SUB_VICB_INTRO.vtt'
    },
    resources: []
  },
  {
    id: 52,
    category: 'lesson_43',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso Araceli Páez Forero',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_2/KPI_Intro_1.mp4',
      duration: '1:28'
    },
    resources: []
  },
  {
    id: 53,
    category: 'lesson_44',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso Luisa Casasbuenas',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_3/CHAMPIONS_Intro_1.mp4',
      duration: '1:08',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/champions/CHAMPIONS_Intro.vtt'
    },
    resources: []
  },
  {
    id: 54,
    category: 'lesson_45',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso Mariana',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_4/Verticales_Intro.mp4',
      duration: '1:39',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/verticales/Verticales_Intro_ING.vtt'
    },
    resources: []
  },
  {
    id: 55,
    category: 'lesson_46',
    type: LessonType.Video,
    name: 'Introducción al curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Bienvenido al curso Óscar Contreras',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_5/ZBB_Intro_1.mp4',
      duration: '1:19',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/ZBB/ZBB_Intro.vtt'
    },
    resources: []
  },
  {
    id: 56,
    category: 'vic_paso_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 57,
    category: 'indicadores_monetizacion_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 58,
    category: 'champions_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 59,
    category: 'operaciones_verticalizadas_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 60,
    category: 'introduccion_zbb_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 61,
    category: 'lesson_47',
    type: LessonType.Video,
    name: '1. Overview: ¿Qué es CAPEX ToolKit?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Identifica y comprende cada una de las diferencias de nuestro flujo de trabajo en CAPEX. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Lesson0.mp4',
      duration: '3:26',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_Lesson0_Ingles.vtt'
    },
    resources: []
  },
  {
    id: 62,
    category: 'lesson_48',
    type: LessonType.Video,
    name: '2. Overview y CAPEX 360 Access',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido aprendiz a la primera unidad! Preparate para un recorrido guiado con el experto Carlos Marín por el concepto, caraterísticas y acceso a la herramienta CAPEX 360, una plataforma que utilizamos para todas las solicitudes de gastos de capital en Middle Americas. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson1.mp4',
      duration: '5:12',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/SUB_ES__U1L1_CAPEX360_.vtt'
    },
    resources: [
      {
        name: 'Presupuestación de CapEx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/%5BINF%5D+Presupuesto+CapEx+(1).pdf'
      }
    ]
  },
  {
    id: 63,
    category: 'lesson_49',
    type: LessonType.Video,
    name: '3. ¿Qué es RIA? | Tipos de RIA',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende de la mano de nuestro experto Carlos Marín qué es y como se estructura el Formato RIA.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson2.mp4',
      duration: '2:52',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_Unit1_Lesson2.vtt'
    },
    resources: [
      {
        name: 'RIA Template for RIA Upload 2022-23.xlsm',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/RIA+Template+for+RIA+Upload+2022-23.xlsm'
      }
    ]
  },
  {
    id: 64,
    category: 'lesson_50',
    type: LessonType.Video,
    name: '4. Navegación y llenado de Formato RIA (Parte 1)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Conoce como navegar y llenar el formato RIA para un proyecto de Costo.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson3.1.mp4',
      duration: '10:11',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/CAPEX+U1_L3+PARTE+1+ES+.vtt'
    },
    resources: []
  },
  {
    id: 65,
    category: 'lesson_51',
    type: LessonType.Video,
    name: '5. Navegación y llenado de Formato RIA (Parte 2)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Ahora veamos como llenar el formato para un proyecto de Capacidad.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson3.2.mp4',
      duration: '7:43',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/CAPEX+U1_L3+PARTE+2+ES+.vtt'
    },
    resources: []
  },
  {
    id: 66,
    category: 'lesson_52',
    type: LessonType.Video,
    name: '6. Navegación y llenado de Formato RIA (Parte 3)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Avanza y descubre como llenar correctamente el RIA en un proyecto de Viability. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson3.3.mp4',
      duration: '5:57',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U1+-+L3+-+Parte+3+%5BCAPEX+360%5D.vtt'
    },
    resources: []
  },
  {
    id: 67,
    category: 'lesson_53',
    type: LessonType.Video,
    name: '7. One Pager y proceso de Ejecución  (Parte 1)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'El formato One Pager es el resumen ejecutivo donde debes indicar el costo que tendrían los beneficios u obligaciones de ejecutar un proyecto. Prepárate y sigue el paso a paso para el correcto llenado de este formato en un proyecto de tipo Capacidad.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson4.1.mp4',
      duration: '11:41',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_ES_Unit1_Lesson4.1.vtt'
    },
    resources: [
      {
        name: ' Capacity CAPEX Approval Template - 2023 v2.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/5Mio+and+Above+-+Capacity+CAPEX+Approval+Template+-+2023+v2.pptx'
      }
    ]
  },
  {
    id: 68,
    category: 'lesson_54',
    type: LessonType.Video,
    name: '8. One Pager y proceso de Ejecución  (Parte 2)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'El formato One Pager es el resumen ejecutivo donde debes indicar el costo que tendrían los beneficios u obligaciones de ejecutar un proyecto. Prepárate y sigue el paso a paso para el correcto llenado de este formato en un proyecto de Costo.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U1L4+_CAPEX360_(Part+2).mp4',
      duration: '7:38',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U1_L4_P2_CAPEX360.vtt'
    },
    resources: []
  },
  {
    id: 69,
    category: 'lesson_55',
    type: LessonType.Video,
    name: '9. One Pager y proceso de Ejecución  (Parte 3)',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'El formato One Pager es el resumen ejecutivo donde debes indicar el costo que tendrían los beneficios u obligaciones de ejecutar un proyecto. Prepárate y sigue el paso a paso para el correcto llenado de este formato en un proyecto de Viability. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U1L4_CAPEX+360+(Parte+3).mp4',
      duration: '7:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_U1L4_CAPEX+360+(Parte+3).vtt'
    },
    resources: [
      {
        name: ' CAPEX Approval Guidelines and Template (Viability).pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/2023+B21+H2+CAPEX+Approval+Guidelines+and+Template+(Viability).pptx'
      }
    ]
  },
  {
    id: 70,
    category: 'lesson_56',
    type: LessonType.Video,
    name: '10. Cargue de RIA a 360',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Conoce cómo navegar y cargar la documentación de un proyecto a nuestra herramienta de aprobación CAPEX 360.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit1_Lesson5.mp4',
      duration: '12:04',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_ES_Unit1_Lesson5.vtt'
    },
    resources: []
  },
  {
    id: 71,
    category: 'lesson_57',
    type: LessonType.Video,
    name: '1. Rutina Inicial: Documentación (Pasos 1 al 4) PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a una nueva unidad! Es momento de comprender e identificar conceptos previos, funciones, responsabilidades y documentos necesarios para la aprobación de proyectos CAPEX en la BU de PEC. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson6_PEC.mp4',
      duration: '9:18',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Subs_U2_L6_%5BPEC%5D.vtt'
    },
    resources: [
      {
        name: '23_MA_ESL_0325 MOC v2_MAZ_Noise Mitigation Plant_Quito.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/23_MA_ESL_0325+MOC+v2_MAZ_Noise+Mitigation+Plant_Quito.xlsx'
      },
      {
        name: '23_MA_ESL_0325 ONE PAGER_Noise Mitigation Plant_Quito.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/23_MA_ESL_0325+ONE+PAGER_Noise+Mitigation+Plant_Quito.pptx'
      },
      {
        name: '23_MA_ESL_0325 PROJECT STATEMENT_Noise Mitigation Plant_Quito.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/23_MA_ESL_0325+PROJECT+STATEMENT_Noise+Mitigation+Plant_Quito.xlsx'
      },
      {
        name: '23_MA_ESL_0325 RIA Noise Mitigation Plant_Quito.xlsm',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/23_MA_ESL_0325+RIA+Noise+Mitigation+Plant_Quito.xlsm'
      }
    ]
  },
  {
    id: 72,
    category: 'lesson_58',
    type: LessonType.Video,
    name: '2. Rutina Asignación de Recursos y Ejecución (Pasos 5 al 9) PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Sumérgete en un viaje express por nuestra rutina de asignación de recursos y ejecución de proyectos CAPEX.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson7_PEC.mp4',
      duration: '5:52',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/SUB_ES_Unit2_Lesson7_PEC.vtt'
    },
    resources: [
      {
        name: 'Creacion O.I. ESL MLIM y Cusco.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/Rutina+Asignaci%C3%B3n+de+Recursos+y+EjecucionPasos5al9/Creacion+O.I.+ESL+MLIM+y+Cusco.xlsx'
      },
      {
        name: 'Template COPEC 2023 ESL 0039.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/Rutina+Asignaci%C3%B3n+de+Recursos+y+EjecucionPasos5al9/Template+COPEC+2023+ESL+0039.xlsx'
      }
    ]
  },
  {
    id: 73,
    category: 'lesson_59',
    type: LessonType.Video,
    name: '3. Rutina de Seguimiento (Pasos 10 - 11) PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás cómo se monitorea diaria y semanalmente la ejecucción de los presupuestos en CAPEX para obtener avances correctos en cada proyecto. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson8_PEC.mp4',
      duration: '9:04',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/SUB_eS_Unit2_Lesson8_PEC.vtt'
    },
    resources: [
      {
        name: 'Template LE_TM MAZ 2023 LE.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/Template+LE_TM+MAZ+2023+LE.xlsx'
      }
    ]
  },
  {
    id: 74,
    category: 'lesson_60',
    type: LessonType.Video,
    name: '4. Rutina de cierre: Seguimiento y Post Mortem (Pasos 12 al 14) PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descubre que sucede luego de finalizar un proyecto en CAPEX: qué tenemos que hacer, a quien se entrega el proyecto y en que casos debemos hacer una revisión posterior de logros, beneficios y lecciones aprendidas.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson9_PEC.mp4',
      duration: '6:54',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_ES_Unit2_Lesson9_PEC.vtt'
    },
    resources: [
      {
        name: '21_MA_CSD_0134 RIA Compuertas - Energy Sav - Postmortem (2).xlsm',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/Rutina+de+cierre+Seguimiento+y+Post+MortemPasos1214/21_MA_CSD_0134+RIA+Compuertas+-+Energy+Sav+-+Postmortem+(2).xlsm'
      },
      {
        name: 'CAPEX Post Mortem Template_Compuertas MGYE .pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/Rutina+de+cierre+Seguimiento+y+Post+MortemPasos1214/CAPEX+Post+Mortem+Template_Compuertas+MGYE+.pptx'
      }
    ]
  },
  {
    id: 75,
    category: 'lesson_61',
    type: LessonType.Infografia,
    name: '5. Infografía:Proceso de Aprobación CAPEX PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía del Proceso de aprobación en CAPEX y ten a la mano el paso a paso visto a lo largo del curso Capex ToolKit 2.0',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/FLUJOGRAMA+PEC+-+CURSO+CAPEX+TOOLKIT+2.0_V3.pdf'
    },
    resources: []
  },
  {
    id: 76,
    category: 'lesson_62',
    type: LessonType.Infografia,
    name: '6. Infografía: Paquetes CAPEX y dueños PEC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Regional PEC Rutina de Seguimiento y Postmortem Marisol Pilco ',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Infograf%C3%ADa_PaquetesyDue%C3%B1os+(1).pdf'
    },
    resources: []
  },
  {
    id: 77,
    category: 'lesson_63',
    type: LessonType.Video,
    name: '1. Rutina Inicial: Documentación (Pasos 1 al 4) MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a una nueva unidad! Es momento de comprender e identificar conceptos previos, funciones, responsabilidades y documentos necesarios para la aprobación de proyectos CAPEX en México.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson6_MEX.mp4',
      duration: '15:25',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Subs_U2L6_MEX.vtt'
    },
    resources: [
      {
        name: 'Safety SIF Prevention TUX.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/01_PS_23_MA_ESL_0069_Safety+SIF+Prevention_TUX.xlsx'
      },
      {
        name: 'Safety SIF Prevention TUX.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/03_OP_23_MA_ESL_0069_Safety+SIF+Prevention_TUX.pptx'
      }
    ]
  },
  {
    id: 78,
    category: 'lesson_64',
    type: LessonType.Video,
    name: '2. Rutina Asignación de Recursos y Ejecución (Pasos 5 al 10) MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Sumérgete en un viaje express por nuestra rutina de asignación de recursos y ejecución de proyectos CAPEX. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U2L7_%5BMEX%5D_.mp4',
      duration: '5:17',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2+-+L7+%5BMEX%5D+CAPEX+Toolkit.vtt'
    },
    resources: [
      {
        name: 'Formato_Solicitud Elementos Safety SIF Prevention-TUX.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Formato_Solicitud+Elementos+PEP_23_MA_ESL_0069_Safety++SIF+Prevention-TUX.xlsx'
      }
    ]
  },
  {
    id: 79,
    category: 'lesson_65',
    type: LessonType.Video,
    name: '3. Rutina de Seguimiento (Pasos 11 - 13) MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende como los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos para obtener avances correctos en cada proyecto.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U2L8_MEX_.mp4',
      duration: '7:25'
    },
    resources: [
      {
        name: 'Template LE_TM MAZ 2023 LE.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Template+LE_TM+MAZ+2023+LE.xlsx'
      }
    ]
  },
  {
    id: 80,
    category: 'lesson_66',
    type: LessonType.Video,
    name: '4. Rutina de cierre: Seguimiento y Post Mortem (Pasos 14 al 16) MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Regional MEX | Rutina Asignación de Recursos y Ejecución José Luis Espinoza PPM CAPEX ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson9_MEX.mp4',
      duration: '5:57',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2+-+L9+%5BMEX%5D+CAPEX+Toolkit.vtt'
    },
    resources: [
      {
        name: 'CAPEX Post Mortem Drum dryer in APAN Mex V2.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CAPEX+Post+Mortem+Drum+dryer+in+APAN+Mex+V2.pptx'
      }
    ]
  },
  {
    id: 81,
    category: 'lesson_67',
    type: LessonType.Infografia,
    name: '5. Infografía: Proceso de Aprobación CAPEX MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía del Proceso de aprobación en CAPEX y ten a la mano el paso a paso visto a lo largo del curso Capex ToolKit 2.0',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/cac_hes.pdf'
    },
    resources: []
  },
  {
    id: 82,
    category: 'lesson_68',
    type: LessonType.Infografia,
    name: '6. Infografía: Paquetes CAPEX y dueños MEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Regional MEX | Rutina de Seguimiento y Postmortem José Luis Espinoza PPM CAPEX ',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Infograf%C3%ADa_PaquetesyDue%C3%B1os+(1).pdf'
    },
    resources: []
  },
  {
    id: 83,
    category: 'lesson_69',
    type: LessonType.Video,
    name: '1. Rutina Inicial: Documentación (Pasos 1 al 4) COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a una nueva unidad! Es momento de comprender e identificar conceptos previos, funciones, responsabilidades y documentos necesarios para la aprobación de proyectos CAPEX en Colombia. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson6_COL.mp4',
      duration: '9:46',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/%5BES%5D+U2+-+L6+-+%5BCOL%5D.vtt'
    },
    resources: [
      {
        name: 'revention-RIA-ESL-CAPEX-TOC-2023.xlsm',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/2___RIA+-+23-MA_ESL_0029+-+SIF-prevention-RIA-ESL-CAPEX-TOC-2023.xlsm'
      },
      {
        name: 'One Pager - prevention-One_pager-ESL-CAPEX-TOC-2023.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/2___One+Pager+-+23_MA_ESL_0029+-+SIF-prevention-One_pager-ESL-CAPEX-TOC-2023.pptx'
      }
    ]
  },
  {
    id: 84,
    category: 'lesson_70',
    type: LessonType.Video,
    name: '2. Rutina Asignación de Recursos y Ejecución (Pasos 5 al 10) COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Sumérgete en un viaje express por nuestra rutina de asignación de recursos y ejecución de proyectos CAPEX.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U2L7_COL_CAPEX.mp4',
      duration: '6:47',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2L7_%5BCOL%5D_CAPEX.vtt'
    },
    resources: [
      {
        name: 'Template COPEC 2023- 0052.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/8___Template+COPEC+2023-+0052.xlsx'
      },
      {
        name: 'Formato Creacion OI 0026-0027-0366.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/6___Formato+Creacion+OI+0026-0027-0366.xlsx'
      }
    ]
  },
  {
    id: 85,
    category: 'lesson_71',
    type: LessonType.Video,
    name: '3. Rutina de Seguimiento (Pasos 11 - 12) COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende como los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos para obtener avances correctos en cada proyecto.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson8_COL.mp4',
      duration: '7:32',
      subtitles: ''
    },
    resources: [
      {
        name: 'Template LE_TM MAZ 2023 LE.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/12.1___Template+LE_TM+MAZ+2023+LE.xlsx'
      }
    ]
  },
  {
    id: 86,
    category: 'lesson_72',
    type: LessonType.Video,
    name: '4. Rutina de cierre: Seguimiento y Post Mortem (Pasos 13 al 15) COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descubre que sucede luego de finalizar un proyecto CAPEX en Colombia: qué hacemos, a quién entregamos el proyecto y en que casos realizamos una revisión posterior de logros, beneficios y lecciones aprendidas.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson9_COL.mp4',
      duration: '7:32',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2+-+L9+%5BCOL%5D+CAPEX+Toolkit.vtt'
    },
    resources: [
      {
        name: 'Post Mortem Tocancipa_ BU COL v1.0 CON CCT.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/14___Post+Mortem+Tocancipa_+BU+COL+v1.0++CON+CCT.pptx'
      }
    ]
  },
  {
    id: 87,
    category: 'lesson_73',
    type: LessonType.Infografia,
    name: '5. Infografía:Proceso de Aprobación CAPEX COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía del Proceso de aprobación en CAPEX y ten a la mano el paso a paso visto a lo largo del curso Capex ToolKit 2.0',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/FLUJOGRAMA+COL+-+CURSO+CAPEX+TOOLKIT+2.0_V3.pdf'
    },
    resources: []
  },
  {
    id: 88,
    category: 'lesson_74',
    type: LessonType.Infografia,
    name: '6. Infografía: Paquetes CAPEX y dueños COL',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía y descubre todo lo que necesitas saber sobre los paquetes en que se divide el presupuesto de CAPEX.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Infograf%C3%ADa_PaquetesyDue%C3%B1os+(1).pdf'
    },
    resources: []
  },
  {
    id: 89,
    category: 'lesson_75',
    type: LessonType.Video,
    name: '1. Rutina Inicial: Documentación (Pasos 1 al 4) CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a una nueva unidad! Es momento de comprender e identificar conceptos previos, funciones, responsabilidades y documentos necesarios para la aprobación de proyectos CAPEX en las Regionales de CAC y HES.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U2L6_CAC_HES_.mp4',
      duration: '11:49',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/%5BING%5D+U2+-+L6+-+%5BCAC-HES%5D-+CAPEX.vtt'
    },
    resources: [
      {
        name: 'Plant Fabric - CAC - PANAMA - 23_MA_UPP_0212.xlsm',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/2___RIA_MA_UPP_Plant+Fabric+-+CAC+-+PANAMA+-+23_MA_UPP_0212.xlsm'
      },
      {
        name: 'One pager_Plant Fabric - CAC - PAN.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/2___One+pager_Plant+Fabric+-+CAC+-+PAN.pptx'
      }
    ]
  },
  {
    id: 90,
    category: 'lesson_76',
    type: LessonType.Video,
    name: '2. Rutina de Asignación de Recursos (Pasos 5 al 9) CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Sumérgete en un viaje express por nuestra rutina de asignación de recursos y ejecución de proyectos CAPEX. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson7_CAC-HES.mp4',
      duration: '6:49',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/%5BING%5D_U2_L7_CAC-HES+.vtt'
    },
    resources: [
      {
        name: 'Justificacion Aprobación UPP SVBL.docx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/6___Justificacion++Aprobaci%C3%B3n+UPP+SVBL.docx'
      },
      {
        name: 'Template Creación OI 2023 LC B- Brewing 110K.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/6____23_MA_UPP_0060+Template+Creaci%C3%B3n+OI+2023+LC+B-+Brewing+110K.xlsx'
      }
    ]
  },
  {
    id: 91,
    category: 'capex_toolkit_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACIÓN INICIAL'
  },
  {
    id: 92,
    category: 'lesson_77',
    type: LessonType.Video,
    name: '3. Rutina de Ejecución y Seguimiento (Pasos 10 - 11) CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás cómo los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos en CAPEX.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/CapexToolKit2.0_Unit2_Lesson8_CAC-HES.mp4',
      duration: '12:25',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2_L8+ING.vtt'
    },
    resources: [
      {
        name: 'Template LE_TM MAZ 2023 LE.xlsx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/11.1___Template+LE_TM+MAZ+2023+LE.xlsx'
      }
    ]
  },
  {
    id: 93,
    category: 'lesson_78',
    type: LessonType.Video,
    name: '4. Rutina de cierre: Seguimiento y Post Mortem (Pasos 12 al 14) CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás cómo los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos en CAPEX.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/U2L9_%5BCAC-HES%5D_.mp4',
      duration: '7:10',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/U2_L9+ING.vtt'
    },
    resources: [
      {
        name: 'CAPEX Post Mortem RGB.pptx',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/capex/13___CAPEX+Post+Mortem+RGB.pptx'
      }
    ]
  },
  {
    id: 94,
    category: 'lesson_79',
    type: LessonType.Infografia,
    name: '5. Infografía:Proceso de Aprobación CAPEX CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás cómo los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos en CAPEX.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/cac.pdf'
    },
    resources: []
  },
  {
    id: 95,
    category: 'lesson_80',
    type: LessonType.Infografia,
    name: '6. Infografía: Paquetes CAPEX y dueños CAC-HES',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás cómo los PPM monitorean diaria y semanalmente la ejecucción de los presupuestos en CAPEX.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Infograf%C3%ADa_PaquetesyDue%C3%B1os+(1).pdf'
    },
    resources: []
  },
  {
    id: 96,
    category: 'capex_toolkit_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 97,
    category: 'capex_toolkit_pec_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL PEC'
  },
  {
    id: 98,
    category: 'capex_toolkit_pec_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 99,
    category: 'capex_toolkit_mex_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL MEX'
  },
  {
    id: 100,
    category: 'capex_toolkit_mex_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL',
    attempt: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_1/VICB_INTRO_1.mp4',
      duration: '1:06'
    }
  },
  {
    id: 101,
    category: 'capex_toolkit_col_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 102,
    category: 'lesson_81',
    type: LessonType.Video,
    name: 'INTRO CAPEX ',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¿Estás listo para conocer nuestro proceso end-to-end? Da play y descubre todo lo que CAPEX ToolKit 2.0 tiene para ti.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/Intro_CapexToolKit2.0.mp4',
      duration: '1:11',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/capex/Sub_Ingles_Intro_Capex.vtt'
    },
    resources: []
  },
  {
    id: 103,
    category: 'capex_toolkit_col_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 104,
    category: 'capex_toolkit_cac_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 105,
    category: 'capex_toolkit_cac_final',
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 106,
    category: 'lesson_82',
    type: LessonType.Video,
    name: '1. ¿Qué es VLC?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido aprendiz a la primera unidad! Da play e inicia el recorrido por todos aquellos costos logísticos producidos desde que nuestro producto sale de la línea de producción hasta que es entregado al cliente final.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit1_Lesson1_VLC_Basico.mp4',
      duration: '3:35',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson1_VLC_Basico.mp4_en.vtt'
    },
    resources: [
      {
        name: '[INFO] IFRS 16 Rule.pdf',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/curso_11/%5BINFO%5D+IFRS+16+Rule.pdf'
      },
      {
        name: '[PDF] Chart of accounts Logistics.pdf',
        file: 'https://contenidospmm.s3.amazonaws.com/recursos/curso_11/%5BPDF%5D+Chart+of+accounts+Logistics.pdf'
      }
    ]
  },
  {
    id: 107,
    category: 'vcl_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 108,
    category: 'lesson_83',
    type: LessonType.Video,
    name: '2. T1 Overall Cost',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Continua en el viaje express por el proceso logístico de VLC y sumérgete en la primera línea de distribución. ¡Vamos!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit1_Lesson2_VLC_Basico.mp4',
      duration: '2:55',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson2_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 109,
    category: 'lesson_84',
    type: LessonType.Video,
    name: '3. T2 Overall Cost',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Es momento de sumergirnos en T2! Identifica de forma general todos los costos asociados a personas o procesos desde que el producto llega al Centro de Distribución hasta que es entregado al POC o cliente final. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit1_Lesson3_VLC_Basico.mp4',
      duration: '2:37',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson3_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 110,
    category: 'lesson_85',
    type: LessonType.Video,
    name: '6. T2: Transport - Logistic Support - People Cost',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Toma tu ticket para comenzar el tour guiado! Sumérgete en un viaje express por el proceso logístico en T2 y descubre cómo cada una de las etapas de la línea de distribución se refleja y conecta con nuestros costos en AB InBev.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit3_Lesson5_VLC_Basico.mp4',
      duration: '4:31',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit3_Lesson5_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 111,
    category: 'quiz_vcl_v2',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 112,
    category: 'lesson_86',
    type: LessonType.Video,
    name: '7. Mix y Volumen',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Es momento de conocer el efecto Mix y Volumen de manera gráfica! Aprende qué es un Waterfall y cómo puedes interpretar los datos que allí se presentan. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit4_Lesson6_VLC_Basico.mp4',
      duration: '5:26',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit4_Lesson6_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 113,
    category: 'lesson_87',
    type: LessonType.Infografia,
    name: '8. Presetación final del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la PPT final del curso y ten a la mano los conceptos y procesos básicos que hacen parte del Costo Variable Logístico (VLC)</span>',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/%5BPRESS%5D+CURSO+VLC+B%C3%81SICO.pdf'
    },
    resources: []
  },
  {
    id: 114,
    category: 'vcl_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 115,
    category: 'lesson_88',
    type: LessonType.Video,
    name: '4. T1 Nacional: Transport - Logistic Support - People',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Avanza y descubre más detalles. En esta lección conocerás los costos asociados al proceso de distribución nacional.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit2_Lesson4.1_VLC_Basico.mp4',
      duration: '0:00',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson4.1_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 116,
    category: 'lesson_89',
    type: LessonType.Video,
    name: '5. T1 Internacional: Transport - Logistic Support - People ',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'prende sobre los costos de VLC en el proceso de distribución internacional. ¡Avanza y aprovecha al máximo todo lo que traemos para tí!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Unit2_Lesson4.2_VLC_Basico.mp4',
      duration: '0:00',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/VLC+B%C3%A1sico/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson4.2_VLC_Basico.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 117,
    category: 'quiz_vcl',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 118,
    category: 'cbs_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 119,
    category: 'lesson_90',
    type: LessonType.Video,
    name: 'INTRO CBS',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¿Estás listos para conocer todo sobre CBS? Preparate para un recorrido guiado con la experta Luz Elena Arizpe Delgado, encargada de ayudarte a descubrir toda la información relevante sobre el llenado de un Template de CBS.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Intro_Curso_CBS.mp4',
      duration: '1:59',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CBS/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Intro_Curso_CBS.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 120,
    category: 'lesson_91',
    type: LessonType.Video,
    name: '1.¿Qué es CBS?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'CBS o Cost Breakdown Structure es un template de desglose financiero llevado a detalle por cada área, aquí debes especificar todas las compras de equipos o adquisición de servicios que requiere tu proyecto para su desarrollo y cumplimiento. Da play y descubre todo lo que PPM University tiene para ti. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Unit1_Lesson1_CBS.mp4',
      duration: '3:45',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CBS/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson1_CBS.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 121,
    category: 'lesson_92',
    type: LessonType.Video,
    name: '2.¿Cómo se estructura?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a una nueva unidad! Comprende e identifica los elementos claves que debes llenar en nuestro template de CBS.  ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Unit2_Lesson2_CBS.mp4',
      duration: '5:06',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CBS/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson2_CBS.mp4_en.vtt'
    },
    resources: [
      {
        name: 'Plantilla CBS 2023_V8',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Plantilla+CBS+2023_V8.xlsx'
      }
    ]
  },
  {
    id: 122,
    category: 'lesson_93',
    type: LessonType.Video,
    name: '3. ¿Cómo llenar el CBS?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Aprende de la mano con la experta! Sumérgete en un viaje express por nuestro template y logra la aprobación de tu proyecto. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Unit2_Lesson3_CBS.mp4',
      duration: '4:27',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CBS/Subtitulos+Espa%C3%B1ol/%5BSubtitleTools.com%5D+%5BSUB_ESP%5D+Unit2_Lesson3_CBS.vtt'
    },
    resources: [
      {
        name: 'Ejemplo_CBS_CMM_Pasteurizer L61_Challenge',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Ejemplo_CBS_CMM_Pasteurizer+L61_Challenge.xlsx'
      }
    ]
  },
  {
    id: 123,
    category: 'lesson_94',
    type: LessonType.Video,
    name: '4. ¿Cómo llenar el Booking?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Es momento de afianzar tus conocimientos. Ahora que sabes cómo llenar un template de CBS te enseñaremos a realizar el booking para tu proyecto. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/Unit2_Lesson4_CBS.mp4',
      duration: '4:27'
    },
    resources: []
  },
  {
    id: 124,
    category: 'lesson_95',
    type: LessonType.Infografia,
    name: '5. Presetación final del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la Presentación Final y ten a la mano la información destacada del curso CBS: Paso a Paso.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_12/%5BPRES%5D+Curso+CBS_+Paso+a+Paso.pdf'
    },
    resources: []
  },
  {
    id: 125,
    category: 'cbs_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 126,
    category: 'capex_mazsive_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 127,
    category: 'lesson_96',
    type: LessonType.Video,
    name: 'INTRO  CAPEX MAZsive',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Potencia tus conocimientos y habilidades! Preparate para un recorrido guiado con las expertas Brianna Martin y Beatriz Pepita por la herramienta CAPEX MAZsive. ¿Qué esperas para ser parte de la transformación en Supply? Da click aquí, y comienza el recorrido.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Intro_Curso_CAPEX_MAZsive.mp4',
      duration: '1:18'
    },
    resources: []
  },
  {
    id: 128,
    category: 'lesson_97',
    type: LessonType.Video,
    name: '1. ¿Qué es MAZsive?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás los aspectos generales de la herramienta, cómo surgió y cuáles son las tres fuentes de datos que la alimentan.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson1_CAPEX_MAZsive.mp4',
      duration: '3:32',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson1_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 129,
    category: 'lesson_98',
    type: LessonType.Video,
    name: '2. ¿Cómo ingresar?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Avanza y descubre cómo realiza el ingreso a la herramienta.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson2_CAPEX_MAZsive.mp4',
      duration: '1:58',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-Unit1_Lesson2_Champions_CAPEX.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 130,
    category: 'lesson_99',
    type: LessonType.Video,
    name: '3. Navegación de datos ',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'La visualización de datos de datos dentro de la plataforma se encuentra organizada de forma optimizada y escalada para todos los colaboradores de nuestra zona. ¿estás listo para navegar? Da clic en el video. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson3_CAPEX_MAZsive.mp4',
      duration: '5:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson3_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 131,
    category: 'lesson_100',
    type: LessonType.Video,
    name: '4. Navegación en Power BI',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección conocerás cómo navegar y visualizar los gráficos Power BI. ¡Comencemos! ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson4_CAPEX_MAZsive.mp4',
      duration: '6:21',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson4_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 132,
    category: 'lesson_101',
    type: LessonType.Video,
    name: '5. Gestión de usuario: Roles',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Es momento de conocer los usuarios, roles y permisos que existen en Capex MAZsive. Recuerda que es importante que cuando solicites tus accesos al equipo PPM Capex, especifiques cuál es tu posición, BU, y área a la que perteneces, ya que de esto depende el tipo de permiso que se te asignará. Inicia la lección y descubrelo.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson5_CAPEX_MAZsive.mp4',
      duration: '3:38',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson5_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 133,
    category: 'lesson_102',
    type: LessonType.Video,
    name: '6. Información Maestra',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Llamamos Información Maestra a todas las bases de datos y nombres estándar de las plantas, paquetes y países que encuentras dentro de la herramienta. Es importante que conozcas cómo consultarla, ya que será de utilidad en cualquiera de tus reportes. ¡Vamos allá!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson6_CAPEX_MAZsive.mp4',
      duration: '3:51',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson6_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: [
      {
        name: 'Informacion Maestra_Ubicaciones_Regional',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Informacion+Maestra_Ubicaciones_Regional.pdf'
      }
    ]
  },
  {
    id: 134,
    category: 'lesson_103',
    type: LessonType.Video,
    name: '7. Rutina de trabajo',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Llego el momento de aprender cómo es la rutina de trabajo dentro de CAPEX MAZsive. La herramienta es alimentada inicialmente, por el equipo PPM CAPEX, quien cargar el archivo base que la plataforma toma para buscar los datos en tiempo real en las diferentes fuentes de datos. ¿Sabes cuál es? Avanza y conócelo. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson7_CAPEX_MAZsive.mp4',
      duration: '4:25',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson7_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 135,
    category: 'lesson_104',
    type: LessonType.Video,
    name: '8. Reporte de usabilidad',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description: 'Descubre el menú de Reporte de Uso dentro de CAPEX MAZsive. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit1_Lesson8_CAPEX_MAZsive.mp4',
      duration: '8:52',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson8_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 136,
    category: 'lesson_105',
    type: LessonType.Video,
    name: '9. Real Time Data Execution',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En CAPEX MAZsive es importante tener en cuenta los horarios de la actualización diaria para la toma de información de tus proyectos en tiempo real. ¡Veámos como funciona en la plataforma!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit2_Lesson9_CAPEX_MAZsive.mp4',
      duration: '1:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson9_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 137,
    category: 'lesson_106',
    type: LessonType.Video,
    name: '10. Historical Data',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Conoce como navegar el módulo de Historical Data dentro de CAPEX MAZsive. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit2_Lesson10_CAPEX_MAZsive.mp4',
      duration: '1:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson10_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: [
      {
        name: 'TnM MAZ 2023 LE 10+2',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/TnM+MAZ+2023+LE+10%2B2(24-11-2023+13.56.58).xlsx'
      }
    ]
  },
  {
    id: 138,
    category: 'lesson_107',
    type: LessonType.Video,
    name: '11. CBS',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Continua el viaje por la herramienta CAPEX MAZsive. Aprende a profundidad cómo consultar el desglose del presupuesto de los proyectos CAPEX. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit2_Lesson11_CAPEX_MAZsive.mp4',
      duration: '1:14',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson11_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 139,
    category: 'lesson_108',
    type: LessonType.Video,
    name: '12. Saving/ Unsavings',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¿Quieres consultar ahorros y desahorros de tus proyectos CAPEX? Aprendamos cómo hacerlo. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit2_Lesson12_CAPEX_MAZsive.mp4',
      duration: '7:35',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson12_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 140,
    category: 'lesson_109',
    type: LessonType.Video,
    name: '13. Approval Status',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Inicia esta lección y descubre como consultar el estado de aprobación de los proyectos CAPEX.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/Unit2_Lesson13_CAPEX_MAZsive.mp4',
      duration: '3:40',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/CAPEX+MAZsive/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson13_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 141,
    category: 'quiz_capex_mazsive',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 142,
    category: 'lesson_110',
    type: LessonType.Infografia,
    name: '14. Presetación final del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la PPT final del curso y ten a la mano el instructivo de la herramienta CAPEX MAZsive.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_13/%5BPRESS%5D+CAPEX+MAZsive.pdf'
    },
    resources: []
  },
  {
    id: 143,
    category: 'capex_mazsive_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 145,
    category: 'lesson_111',
    type: LessonType.Video,
    name: 'INTRO  VLC',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Bienvenido a un recorrido por VLC! Preparate para conocer y aprender junto a la experta Leticia Lopez las dos fases del proceso, Tier One y Tier Two. Da clic e inicia la experiencia.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/Intro_Curso_VLC_Basico.mp4',
      duration: '1:41'
    },
    resources: []
  },
  {
    id: 146,
    category: 'champions_eng_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 147,
    category: 'lesson_112',
    type: LessonType.Video,
    name: 'INTRO  Champions: ENG & CAPEX',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende de la mano de la experta Luz Elena Arizpe PPM FEP de Middle Americas como hacer más eficiente el presupuesto de tus proyectos. ¡En ABI no hay iniciativa pequeña, aquí valoramos tus ideas y las potenciamos para lograr la ejecución de más proyectos al año! ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Intro_Curso_Champions_CAPEX.mp4',
      duration: '1:42',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Champions/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Intro_Curso_Champions_CAPEX-ESP.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 148,
    category: 'lesson_113',
    type: LessonType.Infografia,
    name: '1. Context',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía y aprende los momentos en los que Champions tiene un papel protagónico en medio de la gestión de los proyectos en ENG & CAPEX.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Unit1_Lesson1_Champions_CAPEX.pdf'
    },
    resources: []
  },
  {
    id: 149,
    category: 'lesson_114',
    type: LessonType.Video,
    name: '2. Champions: Concepto, objetivos y Alcance',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Inicia un nuevo recorrido de aprendizaje que te permitirá subir al siguiente nivel! Descubre qué es Champions y por qué es tan importante para ABI. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Unit1_Lesson2_Champions_CAPEX.mp4',
      duration: '0:00',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Champions/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson2_Champions_CAPEX.mp4_en.vtt'
    },
    resources: [
      {
        name: 'HS 02 History Initiative Storage',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/HS+02+History+Initiative+Storage_231030+(1).xlsx'
      }
    ]
  },
  {
    id: 150,
    category: 'lesson_115',
    type: LessonType.Infografia,
    name: '3. INFO: Key Words',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la infografía y ten a la mano todos los conceptos claves de Champions. ',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/U1_Key+Words+(1).pdf'
    },
    resources: [
      {
        name: 'HS 02 History Initiative Storage_231030',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_11/HS+02+History+Initiative+Storage_231030.xlsx'
      }
    ]
  },
  {
    id: 151,
    category: 'lesson_116',
    type: LessonType.Video,
    name: '4. Ciclo de Champions',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Una nueva unidad esta a punto de iniciar! Aprende sobre ciclo anual de trabajo y conoce cada una de las etapas que la componen.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Unit2_Lesson3_Champions_CAPEX.mp4',
      duration: '3:24',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Champions/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit2_Lesson3_Champions_CAPEX.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 152,
    category: 'quiz_champions_eng_initial',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 153,
    category: 'lesson_117',
    type: LessonType.Video,
    name: '5. Roles y ResponsabilidadeS',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Cada una de estas iniciativas es de gran importancia para ABI y cada rol tendrá una responsabilidad frente a este proceso! Por eso es momento de identificar las funciones y responsabilidades que tiene el equipo para comunicar las iniciativas de Champions y alcanzar los objetivos.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Unit2_Lesson4_Champions_CAPEX.mp4',
      duration: '2:40'
    },
    resources: []
  },
  {
    id: 154,
    category: 'lesson_118',
    type: LessonType.Video,
    name: '6. Rutina Mensual',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Conoce cómo llevamos la trazabilidad de las iniciativas y la forma que tenemos en ABI para visibilizarlas en nuestras actividades mensuales. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/Unit2_Lesson4_Champions_CAPEX.mp4',
      duration: '4:06',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Champions/Subtitulos+Ingles/%5BSubtitleTools.com%5D+ING+-+Unit1_Lesson4_CAPEX_MAZsive.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 155,
    category: 'lesson_119',
    type: LessonType.Infografia,
    name: '7. INFO: Champions Way',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Avanza y descarga la infografía con todos los datos clave vistos a lo largo del curso Champiosn: ENG & CAPEX.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/%5BINFO%5D+Champions+Way.pdf'
    },
    resources: []
  },
  {
    id: 156,
    category: 'lesson_120',
    type: LessonType.Infografia,
    name: '8. Presetación final del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la Presentación Final y ten a la mano la información destacada del curso.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_11/course_14/%5BPress%5D+Curso+Champions.pdf'
    },
    resources: []
  },
  {
    id: 157,
    category: 'champions_eng_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  },
  {
    id: 158,
    category: 'leasing_initial',
    initial: true,
    type: LessonType.Test,
    name: 'EVALUACION INICIAL'
  },
  {
    id: 159,
    category: 'lesson_121',
    type: LessonType.Video,
    name: 'INTRO Leasing',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Preparate por un recorrido guiado con nuestras experta en Leasing Laura Margarita Vazquez, tu trainner en esta formación. Este curso está diseñado para ayudarte a comprender el leasing y cómo puedes aprovecharlo, una estrategia financiera que nos permite usar activos sin necesidad de comprarlos de inmediato ya que podemos arrendarlos o alquilarlos. ¡Súmate y aprendamos juntos!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Intro_Curso_Leasing.mp4',
      duration: '1:32',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Intro_Curso_Leasing.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 160,
    category: 'lesson_122',
    type: LessonType.Video,
    name: '1.¿Qué es Leasing?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta lección aprenderás qué es leasing o arrendamiento en español, modalidad por la que en AB InBev, adquirimos inmuebles, maquinaria o incluso equipos de transporte, para hacer más eficientes nuestros costos y atender las necesidades de la operación.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit1_Lesson1_Leasing.mp4',
      duration: '4:00',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Unit1_Lesson1_Leasing.mp4_en.vtt'
    },
    resources: [
      {
        name: '[INF] U1_L1_Glosario_Leasing',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_15/%5BINF%5D+U1_L1_Glosario_Leasing.png'
      }
    ]
  },
  {
    id: 161,
    category: 'lesson_123',
    type: LessonType.Video,
    name: '2.General Overview',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Anímate y continúa explorando todo el conocimiento que traemos para tí! En AB InBev nuestras solicitudes de arrendamiento siguen ciertas etapas que garantizan la optimización de los recursos avanza y descúbrelas. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit1_Lesson2_Leasing.mp4',
      duration: '5:26',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Unit1_Lesson2_Leasing.mp4_en.vtt'
    },
    resources: [
      {
        name: '[INF] U1_L2_Gestión de solicitudes de Leasing',
        file: 'https://contenidospmm.s3.amazonaws.com/cursos/course_15/%5BINF%5D+U1_L2_Gesti%C3%B3n+de+solicitudes+de+Leasing.png'
      }
    ]
  },
  {
    id: 162,
    category: 'lesson_124',
    type: LessonType.Video,
    name: '3.Teoria: One Pager',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Ahora que aprendiste los conceptos claves y el proceso para solicitar un Leasing, estás listo para conocer el Business Case y su estructura. ¡Continúa tu recorrido y sácale provecho a toda la información!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson3.1_Leasing.mp4',
      duration: '3:34',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-Unit2_Lesson3.1_Leasing.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 163,
    category: 'lesson_125',
    type: LessonType.Video,
    name: '4.Teoría: Template Financiero',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Sube de nivel! Ya estás listo para aprender los conceptos clave que te ayudarán a completar la información del template financiero. ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson3.2_Leasing.mp4',
      duration: '4:10',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Unit2_Lesson3.2_Leasing.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 164,
    category: 'lesson_126',
    type: LessonType.Video,
    name: '5.¿Cómo diligenciar el Template?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      '¡Sácale el máximo provecho a esta información y optimiza tus operaciones! Sigue el paso a paso para llenar con éxito tu template financiero.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson3.3_Leasing.mp4',
      duration: '6:13',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Unit2_Lesson3.3_Leasing.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 165,
    category: 'lesson_127',
    type: LessonType.Video,
    name: '6.¿Cómo diligenciar el One Pager?',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprendiz tu caso de negocio se estructura con dos componentes: El One Pager y el Template Financiero. Ya que conoces el paso a paso para completar el excel, ha llegado el momento de completar la información del One Pager. ¡Avancemos!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson3.4_Leasing.mp4',
      duration: '4:35',
      subtitles:
        'https://contenidospmm.s3.amazonaws.com/subtitulos/SUBTITULOS+PPM+ACTUALIZADOS/Leasing/en/ING+-+Unit2_Lesson3.4_Leasing.mp4_en.vtt'
    },
    resources: []
  },
  {
    id: 166,
    category: 'lesson_128',
    type: LessonType.Video,
    name: '7.Caso Práctico: Justificación y viabilidad del Leasing ',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Ya conoces toda la teoría y ahora es momento de aprender cómo crear una solicitud de Leasing. ¡Presta atención y explora el caso práctico! ',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson4_Leasing.mp4',
      duration: '5:26'
    },
    resources: []
  },
  {
    id: 167,
    category: 'lesson_129',
    type: LessonType.Video,
    name: '8.Caso Práctico: Evaluación del Caso de Negocio',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'En esta oportunidad conocer cómo se desarrolla la evaluación interna de tu caso de negocio. Da play y continúa con tu aprendizaje.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson5_Leasing.mp4',
      duration: '3:45'
    },
    resources: []
  },
  {
    id: 168,
    category: 'lesson_130',
    type: LessonType.Video,
    name: '9. Caso Práctico: Elección del Proveedor',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Ahora que estudiamos las dos primeras etapas del proceso de pre-aprobación de tu Leasing, estás listo para conocer todo sobre la elección de un proveedor',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit2_Lesson6_Leasing.mp4',
      duration: '4:36'
    },
    resources: []
  },
  {
    id: 169,
    category: 'quiz_leasing',
    type: LessonType.Dragdrop,
    name: 'Quiz station'
  },
  {
    id: 170,
    category: 'lesson_131',
    type: LessonType.Video,
    name: '10. Solicitud y aprobación del proyecto',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Has llegado a la unidad 3 de tu curso Leasing. En este nuevo recorrido y luego de conocer el proceso para armar tu estrategia y business case, es momento de conocer el journey de aprobación.',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit3_Lesson7.1_Leasing.mp4',
      duration: '3:02'
    },
    resources: []
  },
  {
    id: 171,
    category: 'lesson_132',
    type: LessonType.Video,
    name: '11. Aprobación oficial de acuerdo a DAG',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Aprende todo sobre la DAG. ¡Presta mucha atención e identifica la autoridad por la que deberá ser aprobado tu proyecto!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit3_Lesson7.2_Leasing.mp4',
      duration: '3:46'
    },
    resources: []
  },
  {
    id: 172,
    category: 'lesson_133',
    type: LessonType.Video,
    name: '12. Tracking and Monitoring',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Llegó el momento de conocer la forma en la que monitoreamos y hacemos seguimiento a la ejecución de tu estrategia. ¡Quédate hasta el final de este video y lleva tu conocimiento a otro nivel!',
    VideoContent: {
      video:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/Unit3_Lesson7.3_Leasing.mp4',
      duration: '4:41'
    },
    resources: []
  },
  {
    id: 173,
    category: 'lesson_134',
    type: LessonType.Infografia,
    name: '13. Presetación final del curso',
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/vicbasico/as.png',
    description:
      'Descarga la Presentación Final y ten a la mano la información destacada del curso.',
    InfografiaContent: {
      infografia:
        'https://contenidospmm.s3.amazonaws.com/cursos/course_15/%5BPress%5D+Curso+Leasing.pdf'
    },
    resources: []
  },
  {
    id: 174,
    category: 'leasing_final',
    type: LessonType.Test,
    name: 'EVALUACION FINAL'
  }
]
