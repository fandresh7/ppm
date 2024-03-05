import { QuestionType, TestLesson } from '../models/tests'

export const TESTS: TestLesson[] = [
  {
    category: 'introduccion_zbb',
    page: 'introduccion_zbb',
    external: 'introduccion_zbb',
    steps: 11,
    title: 'Introducción a ZBB',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Introducción a ZBB.A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/curso_introduccion_a_ZBB.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Balance de Ganancia y Pérdidas.',
            isCorrect: false
          },
          {
            text: 'Paquete.',
            isCorrect: false
          },
          {
            text: 'Entidad.',
            isCorrect: false
          },
          {
            text: 'Subpaquete.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Quién es el responsable de liderar una visión consolidada del ZBB por funciones a nivel regional?',
        options: [
          {
            text: 'Package Owner.',
            isCorrect: false
          },
          {
            text: 'Director de Zona.',
            isCorrect: false
          },
          {
            text: 'Entity Owner.',
            isCorrect: true
          },
          {
            text: 'Package Co-Owner.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál de los siguientes paquetes NO son gestionados en Supply?',
        options: [
          {
            text: 'People y Provision.',
            isCorrect: false
          },
          {
            text: 'Sales y Maintenance.',
            isCorrect: false
          },
          {
            text: 'Travel y Supply Chain Overhead.',
            isCorrect: false
          },
          {
            text: 'Sales y Marketing.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: 'Selecciona la opción correcta:',
        options: [
          {
            text: 'Utilities.',
            isCorrect: true
          },
          {
            text: 'Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Costo Variable Industrial.',
            isCorrect: false
          },
          {
            text: 'Servicios.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las tres categorías de costos en las que se divide el paquete de Mantenimiento?',
        options: [
          {
            text: 'VLC, VILC y VIC..',
            isCorrect: false
          },
          {
            text: 'VIC, UPP (CAPEX Upholding) y ZBB.',
            isCorrect: true
          },
          {
            text: 'VIC, Equipamiento Industrial y ZBB.',
            isCorrect: false
          },
          {
            text: 'ZBB, CAPEX y UPI.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona en qué paquetes se alojan los tipos de gastos (A) (B) y (C):',
        options: [
          {
            text: 'VIC Performance.',
            isCorrect: false
          },
          {
            text: 'Building & Facilities Maintenance Materials.',
            isCorrect: false
          },
          {
            text: '3rd Party Labor - Preventive & Monitoring.',
            isCorrect: false
          },
          {
            text: 'Industrial Equipment Machinery Materials Corrective & Emergency.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Checkbox,
        label:
          'Selecciona las tres reglas que necesita tener un costo de mantenimiento para ser considerado como variable:',
        options: [
          {
            text: 'El costo debe originarse de un plan de mantenimiento preventivo.',
            isCorrect: true
          },
          {
            text: 'El plan de mantenimiento debe ser creado a través de un análisis RCM o Revisión PM.',
            isCorrect: true
          },
          {
            text: 'El costo debe originarse de un plan de mantenimiento correctivo y de emergencia.',
            isCorrect: false
          },
          {
            text: 'La frecuencia del plan de mantenimiento preventivo debe ser menor o igual a un año.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿A cuál de las siguientes operaciones NO aplica el análisis de cuota por hectolitro asociado al paquete de Mantenimiento?',
        options: [
          {
            text: 'Operación Verticalizada.',
            isCorrect: true
          },
          {
            text: 'Operación Especial.',
            isCorrect: false
          },
          {
            text: 'Operación Cervecera.',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Cuál es la diferencia entre los costos de ZBB y VIC?',
        options: [
          {
            text: 'El gasto es fijo por operaciones y áreas.',
            isCorrect: false
          },
          {
            text: 'La naturaleza del costo varía de acuerdo al efecto volumen.',
            isCorrect: true
          },
          {
            text: 'El gasto es variable de acuerdo a los diferentes tipos de operaciones de la compañía.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'De acuerdo a la gráfica que se presenta a continuación, ¿Cuál es la interpretación correcta de sus datos?',
        options: [
          {
            text: 'Análisis de cuota por tonelada de las Operaciones Verticalizadas.',
            isCorrect: false
          },
          {
            text: 'Análisis de las tres categorías de costos del paquete Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Análisis de un mejoramiento progresivo histórico en los planes de mantenimiento preventivo.',
            isCorrect: true
          },
          {
            text: 'Evolución del gasto de mantenimiento proyectado para 2023.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'introduccion_zbb_initial',
    page: 'introduccion_zbb_initial',
    external: 'introduccion_zbb_initial',
    steps: 11,
    title: 'Introducción a ZBB',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Introducción a ZBB.A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/curso_introduccion_a_ZBB.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Balance de Ganancia y Pérdidas.',
            isCorrect: false
          },
          {
            text: 'Paquete.',
            isCorrect: false
          },
          {
            text: 'Entidad.',
            isCorrect: false
          },
          {
            text: 'Subpaquete.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Quién es el responsable de liderar una visión consolidada del ZBB por funciones a nivel regional?',
        options: [
          {
            text: 'Package Owner.',
            isCorrect: false
          },
          {
            text: 'Director de Zona.',
            isCorrect: false
          },
          {
            text: 'Entity Owner.',
            isCorrect: true
          },
          {
            text: 'Package Co-Owner.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál de los siguientes paquetes NO son gestionados en Supply?',
        options: [
          {
            text: 'People y Provision.',
            isCorrect: false
          },
          {
            text: 'Sales y Maintenance.',
            isCorrect: false
          },
          {
            text: 'Travel y Supply Chain Overhead.',
            isCorrect: false
          },
          {
            text: 'Sales y Marketing.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: 'Selecciona la opción correcta:',
        options: [
          {
            text: 'Utilities.',
            isCorrect: true
          },
          {
            text: 'Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Costo Variable Industrial.',
            isCorrect: false
          },
          {
            text: 'Servicios.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las tres categorías de costos en las que se divide el paquete de Mantenimiento?',
        options: [
          {
            text: 'VLC, VILC y VIC..',
            isCorrect: false
          },
          {
            text: 'VIC, UPP (CAPEX Upholding) y ZBB.',
            isCorrect: true
          },
          {
            text: 'VIC, Equipamiento Industrial y ZBB.',
            isCorrect: false
          },
          {
            text: 'ZBB, CAPEX y UPI.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona en qué paquetes se alojan los tipos de gastos (A) (B) y (C):',
        options: [
          {
            text: 'VIC Performance.',
            isCorrect: false
          },
          {
            text: 'Building & Facilities Maintenance Materials.',
            isCorrect: false
          },
          {
            text: '3rd Party Labor - Preventive & Monitoring.',
            isCorrect: false
          },
          {
            text: 'Industrial Equipment Machinery Materials Corrective & Emergency.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Checkbox,
        label:
          'Selecciona las tres reglas que necesita tener un costo de mantenimiento para ser considerado como variable:',
        options: [
          {
            text: 'El costo debe originarse de un plan de mantenimiento preventivo.',
            isCorrect: true
          },
          {
            text: 'El plan de mantenimiento debe ser creado a través de un análisis RCM o Revisión PM.',
            isCorrect: true
          },
          {
            text: 'El costo debe originarse de un plan de mantenimiento correctivo y de emergencia.',
            isCorrect: false
          },
          {
            text: 'La frecuencia del plan de mantenimiento preventivo debe ser menor o igual a un año.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿A cuál de las siguientes operaciones NO aplica el análisis de cuota por hectolitro asociado al paquete de Mantenimiento?',
        options: [
          {
            text: 'Operación Verticalizada.',
            isCorrect: true
          },
          {
            text: 'Operación Especial.',
            isCorrect: false
          },
          {
            text: 'Operación Cervecera.',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Cuál es la diferencia entre los costos de ZBB y VIC?',
        options: [
          {
            text: 'El gasto es fijo por operaciones y áreas.',
            isCorrect: false
          },
          {
            text: 'La naturaleza del costo varía de acuerdo al efecto volumen.',
            isCorrect: true
          },
          {
            text: 'El gasto es variable de acuerdo a los diferentes tipos de operaciones de la compañía.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'De acuerdo a la gráfica que se presenta a continuación, ¿Cuál es la interpretación correcta de sus datos?',
        options: [
          {
            text: 'Análisis de cuota por tonelada de las Operaciones Verticalizadas.',
            isCorrect: false
          },
          {
            text: 'Análisis de las tres categorías de costos del paquete Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Análisis de un mejoramiento progresivo histórico en los planes de mantenimiento preventivo.',
            isCorrect: true
          },
          {
            text: 'Evolución del gasto de mantenimiento proyectado para 2023.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vic_paso',
    page: 'vic_paso',
    external: 'vic_paso',
    steps: 11,
    title: 'VIC Básico',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso VIC Básico: Paso a Paso.A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image: 'https://superlikers-themes.s3.amazonaws.com/ppmu/icon-vic-paso.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: 'la estructura correcta de nuestro P&L en AB InBev:',
        options: [
          {
            text: '(1) Sales and Marketing (2) MACO (3) CORES (4) VIC (5) VLC (6) Gross Revenue (7) Net Revenue (8) Discounts (9) Excise.',
            isCorrect: false
          },
          {
            text: '(1) Gross Revenue (2)Excise (3) Discounts (4)Net Revenue (5) VIC (6) VLC (7) MACO (8) Sales and Marketing (9) CORES.',
            isCorrect: true
          },
          {
            text: '(1) Net Revenue (2) Gross Revenue (3) Discounts (4) VIC (5) Excise (6) VLC (7) Sales and Marketing (8) MACO (9) CORES.',
            isCorrect: false
          },
          {
            text: '(1) Gross Revenue (2) Net Revenue (3) Excise (4) Discounts (5) VIC (6) VLC (7) MACO (8) Sales and Marketing (9) CORES.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Qué se entiende por VIC Standard?',
        options: [
          {
            text: 'Son los descuentos y promociones en el mercado.',
            isCorrect: false
          },
          {
            text: 'Son los costos corporativos que cambian en proporción a cuánto produce o vende AB InBev.',
            isCorrect: false
          },
          {
            text: 'Son los costos asociados a la comercialización y mercadeo del producto.',
            isCorrect: false
          },
          {
            text: 'Es la receta que contiene los compromisos de precio y consumo para cada sku.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿En qué visual comparativa vemos los efectos de las tres variaciones al estándar del VIC?',
        options: [
          {
            text: 'En el costo estándar nacional.',
            isCorrect: false
          },
          {
            text: 'En el Budget versus Actual.',
            isCorrect: true
          },
          {
            text: 'En paquetes de la receta estándar.',
            isCorrect: false
          },
          {
            text: 'En el LE versus Actual.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Qué es un Co-Producto?',
        options: [
          {
            text: 'Son los materiales que entran en el proceso de producción para aumentar la eficiencia y están incluidos en la receta.',
            isCorrect: false
          },
          {
            text: 'Son todas las salidas del proceso que a pesar de no ser producto terminado pueden ser comercializados y no están incluídas en la receta.',
            isCorrect: true
          },
          {
            text: 'Son todas las salidas por ineficiencias sobre el producto terminado incluidos en la receta.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona a qué tipo de variación hacemos referencia:',
        options: [
          {
            text: 'Variación de precio positiva.',
            isCorrect: false
          },
          {
            text: 'Variación de performance negativa. ',
            isCorrect: false
          },
          {
            text: 'Variación Geográfica/Supply Plant Mix Positivo.',
            isCorrect: true
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Top Down.',
            isCorrect: true
          },
          {
            text: 'Bottom Up.',
            isCorrect: false
          },
          {
            text: 'Supply Chain Financial Data.',
            isCorrect: false
          },
          {
            text: 'Top Down and Bottom Up Reconciliation.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Según los siguientes paquetes de costos del VIC: \n     ¿Cuáles son los que están incluidos físicamente dentro del producto terminado?',
        options: [
          {
            text: 'Energía, fluidos y Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Materia prima y material de empaque.',
            isCorrect: false
          },
          {
            text: 'Materia prima, materiales auxiliares y material de empaque.',
            isCorrect: true
          },
          {
            text: 'Las opciones A y B son correctas.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: 'Lee detenidamente el ejemplo y responde a la pregunta:',
        options: [
          {
            text: 'Variación de precio negativa.',
            isCorrect: true
          },
          {
            text: 'Variación de precio positiva.',
            isCorrect: false
          },
          {
            text: 'Variación Geográfica negativa.',
            isCorrect: false
          },
          {
            text: 'Variación Logística negativa.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          'De acuerdo a la lista de empaques que se presentan: \n     ¿Cuál de ellos es un activo fijo y no está considerado en el VIC?',
        options: [
          {
            text: 'Lata/Bote.',
            isCorrect: false
          },
          {
            text: 'Botella PET.',
            isCorrect: false
          },
          {
            text: 'Botella retornable.',
            isCorrect: true
          },
          {
            text: ' Botella Vídrio.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona a qué tipo de variación hacemos referencia:',
        options: [
          {
            text: 'Variación por Supplier Mix.',
            isCorrect: false
          },
          {
            text: 'Variación de uso o performance.',
            isCorrect: true
          },
          {
            text: 'Variación de precio.',
            isCorrect: false
          },
          {
            text: 'Variación por capacidad de la Cervecería.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vic_paso_initial',
    page: 'vic_paso_initial',
    external: 'vic_paso_initial',
    steps: 11,
    title: 'VIC Básico',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso VIC Básico: Paso a Paso.A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image: 'https://superlikers-themes.s3.amazonaws.com/ppmu/icon-vic-paso.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: 'la estructura correcta de nuestro P&L en AB InBev:',
        options: [
          {
            text: '(1) Sales and Marketing (2) MACO (3) CORES (4) VIC (5) VLC (6) Gross Revenue (7) Net Revenue (8) Discounts (9) Excise.',
            isCorrect: false
          },
          {
            text: '(1) Gross Revenue (2)Excise (3) Discounts (4)Net Revenue (5) VIC (6) VLC (7) MACO (8) Sales and Marketing (9) CORES.',
            isCorrect: true
          },
          {
            text: '(1) Net Revenue (2) Gross Revenue (3) Discounts (4) VIC (5) Excise (6) VLC (7) Sales and Marketing (8) MACO (9) CORES.',
            isCorrect: false
          },
          {
            text: '(1) Gross Revenue (2) Net Revenue (3) Excise (4) Discounts (5) VIC (6) VLC (7) MACO (8) Sales and Marketing (9) CORES.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Qué se entiende por VIC Standard?',
        options: [
          {
            text: 'Son los descuentos y promociones en el mercado.',
            isCorrect: false
          },
          {
            text: 'Son los costos corporativos que cambian en proporción a cuánto produce o vende AB InBev.',
            isCorrect: false
          },
          {
            text: 'Son los costos asociados a la comercialización y mercadeo del producto.',
            isCorrect: false
          },
          {
            text: 'Es la receta que contiene los compromisos de precio y consumo para cada sku.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿En qué visual comparativa vemos los efectos de las tres variaciones al estándar del VIC?',
        options: [
          {
            text: 'En el costo estándar nacional.',
            isCorrect: false
          },
          {
            text: 'En el Budget versus Actual.',
            isCorrect: true
          },
          {
            text: 'En paquetes de la receta estándar.',
            isCorrect: false
          },
          {
            text: 'En el LE versus Actual.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Qué es un Co-Producto?',
        options: [
          {
            text: 'Son los materiales que entran en el proceso de producción para aumentar la eficiencia y están incluidos en la receta.',
            isCorrect: false
          },
          {
            text: 'Son todas las salidas del proceso que a pesar de no ser producto terminado pueden ser comercializados y no están incluídas en la receta.',
            isCorrect: true
          },
          {
            text: 'Son todas las salidas por ineficiencias sobre el producto terminado incluidos en la receta.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona a qué tipo de variación hacemos referencia:',
        options: [
          {
            text: 'Variación de precio positiva.',
            isCorrect: false
          },
          {
            text: 'Variación de performance negativa. ',
            isCorrect: false
          },
          {
            text: 'Variación Geográfica/Supply Plant Mix Positivo.',
            isCorrect: true
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Top Down.',
            isCorrect: true
          },
          {
            text: 'Bottom Up.',
            isCorrect: false
          },
          {
            text: 'Supply Chain Financial Data.',
            isCorrect: false
          },
          {
            text: 'Top Down and Bottom Up Reconciliation.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Según los siguientes paquetes de costos del VIC: \n     ¿Cuáles son los que están incluidos físicamente dentro del producto terminado?',
        options: [
          {
            text: 'Energía, fluidos y Mantenimiento.',
            isCorrect: false
          },
          {
            text: 'Materia prima y material de empaque.',
            isCorrect: false
          },
          {
            text: 'Materia prima, materiales auxiliares y material de empaque.',
            isCorrect: true
          },
          {
            text: 'Las opciones A y B son correctas.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: 'Lee detenidamente el ejemplo y responde a la pregunta:',
        options: [
          {
            text: 'Variación de precio negativa.',
            isCorrect: true
          },
          {
            text: 'Variación de precio positiva.',
            isCorrect: false
          },
          {
            text: 'Variación Geográfica negativa.',
            isCorrect: false
          },
          {
            text: 'Variación Logística negativa.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          'De acuerdo a la lista de empaques que se presentan: \n     ¿Cuál de ellos es un activo fijo y no está considerado en el VIC?',
        options: [
          {
            text: 'Lata/Bote.',
            isCorrect: false
          },
          {
            text: 'Botella PET.',
            isCorrect: false
          },
          {
            text: 'Botella retornable.',
            isCorrect: true
          },
          {
            text: ' Botella Vídrio.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Según el ejemplo que presentamos a continuación, selecciona a qué tipo de variación hacemos referencia:',
        options: [
          {
            text: 'Variación por Supplier Mix.',
            isCorrect: false
          },
          {
            text: 'Variación de uso o performance.',
            isCorrect: true
          },
          {
            text: 'Variación de precio.',
            isCorrect: false
          },
          {
            text: 'Variación por capacidad de la Cervecería.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'champions',
    page: 'champions',
    external: 'champions',
    steps: 11,
    title: 'Champions: Paso a Paso',
    description:
      '¡Es hora de retar tu conocimiento!A continuación, se muestran 10 preguntas de selección múltiple. Lee detenidamente los enunciados y elige las respuestas correctas.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/curso_introduccion_a_ZBB.png',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Dentro de los fundamentos de Champions, ¿Qué se entiende por sentido de dueños?',
        options: [
          {
            text: 'Mantener siempre una mentalidad de líder.',
            isCorrect: false
          },
          {
            text: 'Tratar cada dólar como si fuera tuyo.',
            isCorrect: true
          },
          {
            text: 'Controlar estrictamente nuestros costos.',
            isCorrect: false
          },
          {
            text: 'Asumir los resultados como algo personal.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Según el material, selecciona la respuesta correcta: \n    ¿A qué concepto del modelo de costo hace referencia esta descripción:',
        options: [
          {
            text: 'Connect',
            isCorrect: false
          },
          {
            text: 'Cost',
            isCorrect: true
          },
          {
            text: 'Win',
            isCorrect: false
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: 'Completa la oración con la opción correcta.',
        options: [
          {
            text: 'Líder de proyecto',
            isCorrect: false
          },
          {
            text: 'VP',
            isCorrect: false
          },
          {
            text: 'PPM',
            isCorrect: true
          },
          {
            text: 'Package Owner',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál de los roles de Champions prioriza las iniciativas y la asignación de recursos? ',
        options: [
          {
            text: 'Package Owner',
            isCorrect: true
          },
          {
            text: 'PPM',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto',
            isCorrect: false
          },
          {
            text: 'VP',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones NO es una función del Líder de proyecto?',
        options: [
          {
            text: 'Priorizar actividades y recursos al alcance de las iniciativas.',
            isCorrect: false
          },
          {
            text: 'Producir el Business Case para un proyecto. ',
            isCorrect: false
          },
          {
            text: 'Producir el Business Case para un proyecto. ',
            isCorrect: false
          },
          {
            text: 'Persona encargada de asegurar el alineamiento funcional para proyectos interdepartamentales complejos.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué es un commoditie?',
        options: [
          {
            text: 'Es un material homogéneo entre las empresas que lo producen.',
            isCorrect: false
          },
          {
            text: 'Materiales donde Procurement no tiene control ni poder para negociar.',
            isCorrect: false
          },
          {
            text: 'Materiales donde Procurement si tiene control y poder de negociación. ',
            isCorrect: false
          },
          {
            text: 'Las opciones A y B son correctas.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Lee cada una de las opciones y selecciona la estructura correcta de nuestra rutina mensual en Champions',
        options: [
          {
            text: '(1) Working day-10 (2) Working day-15 (3) 1YP VA Days Zone (4) Base Final Champions.',
            isCorrect: false
          },
          {
            text: '(1) Gap Distribution (2) Working day-10 (3) Working day-15 (4) GCT Upload.',
            isCorrect: false
          },
          {
            text: '(1) Working day-10 (2) Working day-15 (3) Semana 3 (4) Semana 4.',
            isCorrect: true
          },
          {
            text: '(1) VA Days (2) Kick off (3) Champions Global (4)GCT Upload.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Prueba que conoces los tipos de iniciativas respondiendo\n     ¿A qué tipo de iniciativa corresponde esta formula?',
        options: [
          {
            text: 'VE Price',
            isCorrect: false
          },
          {
            text: 'A y C son correctas',
            isCorrect: true
          },
          {
            text: 'Price',
            isCorrect: false
          },
          {
            text: 'VPO',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Qué tipo de iniciativa es la eliminación de cualquier material que no cambie las especificaciones del producto?',
        options: [
          {
            text: 'VE Performance',
            isCorrect: true
          },
          {
            text: 'VPO/DPO',
            isCorrect: false
          },
          {
            text: 'Footprint',
            isCorrect: false
          },
          {
            text: 'Price',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Al paquete de VILC Sueldos y Salarios ¿Qué tipo de iniciativas se pueden aplicar?',
        options: [
          {
            text: 'PI, VE, VPO/DPO y Footprint',
            isCorrect: false
          },
          {
            text: 'VE y Footprint',
            isCorrect: false
          },
          {
            text: 'VPO/DPO y Footprint',
            isCorrect: true
          },
          {
            text: 'PI,VPO/DPO y Footprint',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'champions_initial',
    page: 'champions_initial',
    external: 'champions_initial',
    steps: 11,
    title: 'Champions: Paso a Paso',
    description:
      '¡Es hora de retar tu conocimiento!A continuación, se muestran 10 preguntas de selección múltiple. Lee detenidamente los enunciados y elige las respuestas correctas.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/curso_introduccion_a_ZBB.png',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Dentro de los fundamentos de Champions, ¿Qué se entiende por sentido de dueños?',
        options: [
          {
            text: 'Mantener siempre una mentalidad de líder.',
            isCorrect: false
          },
          {
            text: 'Tratar cada dólar como si fuera tuyo.',
            isCorrect: true
          },
          {
            text: 'Controlar estrictamente nuestros costos.',
            isCorrect: false
          },
          {
            text: 'Asumir los resultados como algo personal.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Según el material, selecciona la respuesta correcta: \n    ¿A qué concepto del modelo de costo hace referencia esta descripción:',
        options: [
          {
            text: 'Connect',
            isCorrect: false
          },
          {
            text: 'Cost',
            isCorrect: true
          },
          {
            text: 'Win',
            isCorrect: false
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: 'Completa la oración con la opción correcta.',
        options: [
          {
            text: 'Líder de proyecto',
            isCorrect: false
          },
          {
            text: 'VP',
            isCorrect: false
          },
          {
            text: 'PPM',
            isCorrect: true
          },
          {
            text: 'Package Owner',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál de los roles de Champions prioriza las iniciativas y la asignación de recursos? ',
        options: [
          {
            text: 'Package Owner',
            isCorrect: true
          },
          {
            text: 'PPM',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto',
            isCorrect: false
          },
          {
            text: 'VP',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones NO es una función del Líder de proyecto?',
        options: [
          {
            text: 'Priorizar actividades y recursos al alcance de las iniciativas.',
            isCorrect: false
          },
          {
            text: 'Producir el Business Case para un proyecto. ',
            isCorrect: false
          },
          {
            text: 'Producir el Business Case para un proyecto. ',
            isCorrect: false
          },
          {
            text: 'Persona encargada de asegurar el alineamiento funcional para proyectos interdepartamentales complejos.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué es un commoditie?',
        options: [
          {
            text: 'Es un material homogéneo entre las empresas que lo producen.',
            isCorrect: false
          },
          {
            text: 'Materiales donde Procurement no tiene control ni poder para negociar.',
            isCorrect: false
          },
          {
            text: 'Materiales donde Procurement si tiene control y poder de negociación. ',
            isCorrect: false
          },
          {
            text: 'Las opciones A y B son correctas.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Lee cada una de las opciones y selecciona la estructura correcta de nuestra rutina mensual en Champions',
        options: [
          {
            text: '(1) Working day-10 (2) Working day-15 (3) 1YP VA Days Zone (4) Base Final Champions.',
            isCorrect: false
          },
          {
            text: '(1) Gap Distribution (2) Working day-10 (3) Working day-15 (4) GCT Upload.',
            isCorrect: false
          },
          {
            text: '(1) Working day-10 (2) Working day-15 (3) Semana 3 (4) Semana 4.',
            isCorrect: true
          },
          {
            text: '(1) VA Days (2) Kick off (3) Champions Global (4)GCT Upload.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Prueba que conoces los tipos de iniciativas respondiendo\n     ¿A qué tipo de iniciativa corresponde esta formula?',
        options: [
          {
            text: 'VE Price',
            isCorrect: false
          },
          {
            text: 'A y C son correctas',
            isCorrect: true
          },
          {
            text: 'Price',
            isCorrect: false
          },
          {
            text: 'VPO',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Qué tipo de iniciativa es la eliminación de cualquier material que no cambie las especificaciones del producto?',
        options: [
          {
            text: 'VE Performance',
            isCorrect: true
          },
          {
            text: 'VPO/DPO',
            isCorrect: false
          },
          {
            text: 'Footprint',
            isCorrect: false
          },
          {
            text: 'Price',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Al paquete de VILC Sueldos y Salarios ¿Qué tipo de iniciativas se pueden aplicar?',
        options: [
          {
            text: 'PI, VE, VPO/DPO y Footprint',
            isCorrect: false
          },
          {
            text: 'VE y Footprint',
            isCorrect: false
          },
          {
            text: 'VPO/DPO y Footprint',
            isCorrect: true
          },
          {
            text: 'PI,VPO/DPO y Footprint',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'indicadores_monetizacion',
    page: 'indicadores_monetizacion',
    external: 'indicadores_monetizacion',
    steps: 11,
    title: 'Indicadores de desempeño y monetización',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento sobre indicadores de desempeño y monetización, nivel básico. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/icon-indicadores-monetizacion.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿Qué componentes conforman el volumen envasado en AB InBev?\n     La suma de los hectolitros producidos de cerveza neta, agua y gaseosa, compone \n     el volumen envasado en líneas de terceros o en líneas propias.',
        options: [
          {
            text: 'Totalidad de hectolitros de cerveza producidas dentro del año fiscal.',
            isCorrect: false
          },
          {
            text: 'Incluye solo la totalidad de hectolitros producidos por líneas de terceros.',
            isCorrect: false
          },
          {
            text: 'Hectolitros producidos de cerveza neta, agua y gaseosa.',
            isCorrect: true
          },
          {
            text: 'Hectolitros producidos de cerveza neta, y la mitad de soft drinks.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Selecciona la opción que contenga los responsables correctos de cada uno de los KPI’s que se indican a continuación:',
        options: [
          {
            text: '(1) Regional Planning Manager (2) Dueño Zonal (3) Dueño Global.',
            isCorrect: false
          },
          {
            text: '(1) Plant Planning Manager (2) Regional Planning Manager (3) Dueño Zonal.',
            isCorrect: true
          },
          {
            text: '(1) Dueño del kpi a nivel de planta (2) Owners de Áreas (3) Director de Planta.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Lee cada una de las opciones y selecciona los tres elementos clave que necesitas \n     tener en cuenta al momento de monetizar un KPI/ Indicador:',
        options: [
          {
            text: 'Volumen, Precios y Método de monetización.',
            isCorrect: false
          },
          {
            text: 'Presupuesto, Informes de KPIS, Resultados del Latest Estimated.',
            isCorrect: false
          },
          {
            text: 'KPI’s, Precios y Método.',
            isCorrect: true
          },
          {
            text: 'KPI’s, Weighter Code, Método de monetización y Precios.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Fíjate en la fórmula que presentamos a continuación y responde a qué tipo de volumen hace referencia:',
        options: [
          {
            text: 'Volumen producido',
            isCorrect: false
          },
          {
            text: 'Volumen envasado',
            isCorrect: false
          },
          {
            text: 'Volumen empacado',
            isCorrect: false
          },
          {
            text: 'Volumen estandarizado',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los tres parámetros que usamos en AB InBev para interpretar y analizar resultados?',
        options: [
          {
            text: 'Operación cervecera, Operación Vertical y Operación Especial.',
            isCorrect: false
          },
          {
            text: 'Operaciones, Agregaciones de tiempo, Agregaciones geográficas.',
            isCorrect: true
          },
          {
            text: 'Operaciones de las plantas, Operaciones de las Business Units, Operaciones de la zona.',
            isCorrect: false
          },
          {
            text: 'Agregaciones acumuladas del mes, Agregaciones acumuladas al año terminado, Agregaciones al año terminado.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿A qué hace referencia el término “Latest Estimated” (LE)?',
        options: [
          {
            text: 'Es el acumulado del año.',
            isCorrect: false
          },
          {
            text: 'Valor proyectado dentro de dos años.',
            isCorrect: false
          },
          {
            text: 'Es el valor en que cerró el año.',
            isCorrect: false
          },
          {
            text: 'Es la proyección del KPI al final del año.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿A qué KPI nos referimos cuando decimos que calificamos la adherencia del Brand profile de nuestras cervezas?',
        options: [
          {
            text: 'Service Level',
            isCorrect: false
          },
          {
            text: 'BSSI - Brewer Support Sensory Index',
            isCorrect: true
          },
          {
            text: 'TEL - Total Extract Losses',
            isCorrect: false
          },
          {
            text: 'Consumer Complaints',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: '¿Cuál es la frecuencia de medición de los KPI en Global?',
        options: [
          {
            text: 'Trimestral',
            isCorrect: false
          },
          {
            text: 'Anual',
            isCorrect: false
          },
          {
            text: 'Mensual',
            isCorrect: true
          },
          {
            text: 'Semanal',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          'Lee atentamente la siguiente definición y selecciona la opción de KPI correcta: “Accidente que provoca una incapacidad laboral mayor a un día de trabajo.”',
        options: [
          {
            text: 'Modified Duties Injuries',
            isCorrect: false
          },
          {
            text: 'Lost Time Injuries',
            isCorrect: true
          },
          {
            text: 'Medical Treatment Injuries',
            isCorrect: false
          },
          {
            text: 'First Aid Injuries',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones hace referencia a la ecuación del KPI GLY?',
        options: [
          {
            text: '(EPT) Effective Production Time / (ST) Scheduled Time.',
            isCorrect: true
          },
          {
            text: '(EPT) Effective Production Time + (ST) Scheduled Time.',
            isCorrect: false
          },
          {
            text: '(EPT) Effective Performance Time/(ST) Scheduled Time.',
            isCorrect: false
          },
          {
            text: '(EPT) Effective Production Time + (ST) Standard Time.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'indicadores_monetizacion_initial',
    page: 'indicadores_monetizacion_initial',
    external: 'indicadores_monetizacion_initial',
    steps: 11,
    title: 'Indicadores de desempeño y monetización',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento sobre indicadores de desempeño y monetización, nivel básico. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://superlikers-themes.s3.amazonaws.com/ppmu/icon-indicadores-monetizacion.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿Qué componentes conforman el volumen envasado en AB InBev?\n     La suma de los hectolitros producidos de cerveza neta, agua y gaseosa, compone \n     el volumen envasado en líneas de terceros o en líneas propias.',
        options: [
          {
            text: 'Totalidad de hectolitros de cerveza producidas dentro del año fiscal.',
            isCorrect: false
          },
          {
            text: 'Incluye solo la totalidad de hectolitros producidos por líneas de terceros.',
            isCorrect: false
          },
          {
            text: 'Hectolitros producidos de cerveza neta, agua y gaseosa.',
            isCorrect: true
          },
          {
            text: 'Hectolitros producidos de cerveza neta, y la mitad de soft drinks.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Selecciona la opción que contenga los responsables correctos de cada uno de los KPI’s que se indican a continuación:',
        options: [
          {
            text: '(1) Regional Planning Manager (2) Dueño Zonal (3) Dueño Global.',
            isCorrect: false
          },
          {
            text: '(1) Plant Planning Manager (2) Regional Planning Manager (3) Dueño Zonal.',
            isCorrect: true
          },
          {
            text: '(1) Dueño del kpi a nivel de planta (2) Owners de Áreas (3) Director de Planta.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Lee cada una de las opciones y selecciona los tres elementos clave que necesitas \n     tener en cuenta al momento de monetizar un KPI/ Indicador:',
        options: [
          {
            text: 'Volumen, Precios y Método de monetización.',
            isCorrect: false
          },
          {
            text: 'Presupuesto, Informes de KPIS, Resultados del Latest Estimated.',
            isCorrect: false
          },
          {
            text: 'KPI’s, Precios y Método.',
            isCorrect: true
          },
          {
            text: 'KPI’s, Weighter Code, Método de monetización y Precios.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Fíjate en la fórmula que presentamos a continuación y responde a qué tipo de volumen hace referencia:',
        options: [
          {
            text: 'Volumen producido',
            isCorrect: false
          },
          {
            text: 'Volumen envasado',
            isCorrect: false
          },
          {
            text: 'Volumen empacado',
            isCorrect: false
          },
          {
            text: 'Volumen estandarizado',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los tres parámetros que usamos en AB InBev para interpretar y analizar resultados?',
        options: [
          {
            text: 'Operación cervecera, Operación Vertical y Operación Especial.',
            isCorrect: false
          },
          {
            text: 'Operaciones, Agregaciones de tiempo, Agregaciones geográficas.',
            isCorrect: true
          },
          {
            text: 'Operaciones de las plantas, Operaciones de las Business Units, Operaciones de la zona.',
            isCorrect: false
          },
          {
            text: 'Agregaciones acumuladas del mes, Agregaciones acumuladas al año terminado, Agregaciones al año terminado.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿A qué hace referencia el término “Latest Estimated” (LE)?',
        options: [
          {
            text: 'Es el acumulado del año.',
            isCorrect: false
          },
          {
            text: 'Valor proyectado dentro de dos años.',
            isCorrect: false
          },
          {
            text: 'Es el valor en que cerró el año.',
            isCorrect: false
          },
          {
            text: 'Es la proyección del KPI al final del año.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿A qué KPI nos referimos cuando decimos que calificamos la adherencia del Brand profile de nuestras cervezas?',
        options: [
          {
            text: 'Service Level',
            isCorrect: false
          },
          {
            text: 'BSSI - Brewer Support Sensory Index',
            isCorrect: true
          },
          {
            text: 'TEL - Total Extract Losses',
            isCorrect: false
          },
          {
            text: 'Consumer Complaints',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: '¿Cuál es la frecuencia de medición de los KPI en Global?',
        options: [
          {
            text: 'Trimestral',
            isCorrect: false
          },
          {
            text: 'Anual',
            isCorrect: false
          },
          {
            text: 'Mensual',
            isCorrect: true
          },
          {
            text: 'Semanal',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          'Lee atentamente la siguiente definición y selecciona la opción de KPI correcta: “Accidente que provoca una incapacidad laboral mayor a un día de trabajo.”',
        options: [
          {
            text: 'Modified Duties Injuries',
            isCorrect: false
          },
          {
            text: 'Lost Time Injuries',
            isCorrect: true
          },
          {
            text: 'Medical Treatment Injuries',
            isCorrect: false
          },
          {
            text: 'First Aid Injuries',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones hace referencia a la ecuación del KPI GLY?',
        options: [
          {
            text: '(EPT) Effective Production Time / (ST) Scheduled Time.',
            isCorrect: true
          },
          {
            text: '(EPT) Effective Production Time + (ST) Scheduled Time.',
            isCorrect: false
          },
          {
            text: '(EPT) Effective Performance Time/(ST) Scheduled Time.',
            isCorrect: false
          },
          {
            text: '(EPT) Effective Production Time + (ST) Standard Time.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'operaciones_verticalizadas',
    page: 'operaciones_verticalizadas',
    external: 'operaciones_verticalizadas',
    steps: 11,
    title: 'Aprendiendo de las Operaciones Verticalizadas',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del curso Aprendiendo de las Operaciones Verticalizadas.\n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image: 'https://superlikers-themes.s3.amazonaws.com/curso_operaciones.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: '(1) VPLC + VLC (2) VIC (3) VLC',
            isCorrect: false
          },
          {
            text: '(1) VIC + VLC (2) VPLC (3) VIC',
            isCorrect: false
          },
          {
            text: '(1) VIC + VPLC (2) VLC (3) VIC.',
            isCorrect: true
          },
          {
            text: '(1) VPLC + VIC (2) VIC (3) VLC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el orden correcto de las etapas del proceso maltero en AB InBev?',
        options: [
          {
            text: '(1) Recepción, pre limpieza (2) Almacenamiento (3) Clasificación y Remojo (4) Secado (5) Desgerminación (6) Despacho.',
            isCorrect: false
          },
          {
            text: '(1) Recepción, pre limpieza y almacenamiento (2) Clasificación (3) Remojo y Germinación (4) Secado (5) Desgerminación (6) Despacho.',
            isCorrect: true
          },
          {
            text: '(1) Recepción, pre limpieza y almacenamiento (2) Clasificación (3) Germinación (4) Remojo (5) Secado (6) Despacho.',
            isCorrect: false
          },
          {
            text: '(1) Recepción y almacenamiento (2) Clasificación (3) Remojo y Germinación (4) Secado (5) Desgerminación (6) Despacho',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Por cuántas semanas se deja reposar el grano de malta para estabilizar sus características?',
        options: [
          {
            text: 'Tres semanas.',
            isCorrect: false
          },
          {
            text: 'Dos semanas.',
            isCorrect: true
          },
          {
            text: 'Una semana y media.',
            isCorrect: false
          },
          {
            text: 'Entre dos y tres semanas',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: 'Completa la oración con la opción correcta:',
        options: [
          {
            text: 'Maltería Tropical',
            isCorrect: false
          },
          {
            text: 'Volumen envasado',
            isCorrect: false
          },
          {
            text: 'Maltería Zacatecas',
            isCorrect: false
          },
          {
            text: 'Maltería Lima',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las materias primas principales en la fabricación del vidrio?',
        options: [
          {
            text: 'Arena, Soda, Caliza y Cullet',
            isCorrect: true
          },
          {
            text: 'Arena, PVC, Cullet',
            isCorrect: false
          },
          {
            text: 'Soda, Aluminio, Agua',
            isCorrect: false
          },
          {
            text: 'Cullet, Gas, Arena, Ácido giberélico.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿A qué fase del proceso de fabricación de tapas nos referimos cuando decimos: “formado de las coronas de la tapa”?',
        options: [
          {
            text: 'Troquelado',
            isCorrect: true
          },
          {
            text: 'Ensamble',
            isCorrect: false
          },
          {
            text: 'Conversión',
            isCorrect: false
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Tecnología Offset',
            isCorrect: false
          },
          {
            text: 'Gofrado',
            isCorrect: false
          },
          {
            text: 'Tecnología flexográfica',
            isCorrect: true
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Selecciona las etapas del proceso de fabricación de tapas donde se genera spoilage',
        options: [
          {
            text: 'Impresión',
            isCorrect: false
          },
          {
            text: 'Recubrimiento',
            isCorrect: false
          },
          {
            text: 'Troquelado',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el Hominy Gritz?',
        options: [
          {
            text: 'Es el principal CoProducto del maíz, que se aprovecha en un 100% y se vende a la industria ganadera para alimento de animales',
            isCorrect: true
          },
          {
            text: 'Es el CoProducto resultante a partir de todos aquellos granos que no cumplen con las especificaciones de AB InBev.',
            isCorrect: false
          },
          {
            text: 'Es el CoProducto producido en el alistamiento del grano para el despacho de los silos al ensacado.',
            isCorrect: false
          },
          {
            text: 'Es el CoProducto generado en las tomas de aspiración de los transportadores del grano, elevadores, cribas y básculas de reciba.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Cuales son los tipos de papel que se utilizan para las etiquetas producidas en Indugral',
        options: [
          {
            text: 'Papel bond, papel esmaltado',
            isCorrect: false
          },
          {
            text: 'Papel esmaltado y metalizado',
            isCorrect: false
          },
          {
            text: 'Papel esmaltado, papel esmaltado gofrado y papel metalizado',
            isCorrect: true
          },
          {
            text: 'Papel carbón',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'operaciones_verticalizadas_initial',
    page: 'operaciones_verticalizadas_initial',
    external: 'operaciones_verticalizadas_initial',
    steps: 11,
    title: 'Aprendiendo de las Operaciones Verticalizadas',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del curso Aprendiendo de las Operaciones Verticalizadas.\n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image: 'https://superlikers-themes.s3.amazonaws.com/curso_operaciones.svg',
    initialMessage:
      'Para obtener el certificado de este curso debes pasar mínimo con el 80% de las respuestas correctas, para esto tendrás 3 intentos, de lo contrario deberás ver un video de las lecciones de curso, el cual te dará un nuevo intento.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: '(1) VPLC + VLC (2) VIC (3) VLC',
            isCorrect: false
          },
          {
            text: '(1) VIC + VLC (2) VPLC (3) VIC',
            isCorrect: false
          },
          {
            text: '(1) VIC + VPLC (2) VLC (3) VIC.',
            isCorrect: true
          },
          {
            text: '(1) VPLC + VIC (2) VIC (3) VLC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el orden correcto de las etapas del proceso maltero en AB InBev?',
        options: [
          {
            text: '(1) Recepción, pre limpieza (2) Almacenamiento (3) Clasificación y Remojo (4) Secado (5) Desgerminación (6) Despacho.',
            isCorrect: false
          },
          {
            text: '(1) Recepción, pre limpieza y almacenamiento (2) Clasificación (3) Remojo y Germinación (4) Secado (5) Desgerminación (6) Despacho.',
            isCorrect: true
          },
          {
            text: '(1) Recepción, pre limpieza y almacenamiento (2) Clasificación (3) Germinación (4) Remojo (5) Secado (6) Despacho.',
            isCorrect: false
          },
          {
            text: '(1) Recepción y almacenamiento (2) Clasificación (3) Remojo y Germinación (4) Secado (5) Desgerminación (6) Despacho',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Por cuántas semanas se deja reposar el grano de malta para estabilizar sus características?',
        options: [
          {
            text: 'Tres semanas.',
            isCorrect: false
          },
          {
            text: 'Dos semanas.',
            isCorrect: true
          },
          {
            text: 'Una semana y media.',
            isCorrect: false
          },
          {
            text: 'Entre dos y tres semanas',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: 'Completa la oración con la opción correcta:',
        options: [
          {
            text: 'Maltería Tropical',
            isCorrect: false
          },
          {
            text: 'Volumen envasado',
            isCorrect: false
          },
          {
            text: 'Maltería Zacatecas',
            isCorrect: false
          },
          {
            text: 'Maltería Lima',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las materias primas principales en la fabricación del vidrio?',
        options: [
          {
            text: 'Arena, Soda, Caliza y Cullet',
            isCorrect: true
          },
          {
            text: 'Arena, PVC, Cullet',
            isCorrect: false
          },
          {
            text: 'Soda, Aluminio, Agua',
            isCorrect: false
          },
          {
            text: 'Cullet, Gas, Arena, Ácido giberélico.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿A qué fase del proceso de fabricación de tapas nos referimos cuando decimos: “formado de las coronas de la tapa”?',
        options: [
          {
            text: 'Troquelado',
            isCorrect: true
          },
          {
            text: 'Ensamble',
            isCorrect: false
          },
          {
            text: 'Conversión',
            isCorrect: false
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta:',
        options: [
          {
            text: 'Tecnología Offset',
            isCorrect: false
          },
          {
            text: 'Gofrado',
            isCorrect: false
          },
          {
            text: 'Tecnología flexográfica',
            isCorrect: true
          },
          {
            text: 'Ninguno',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Selecciona las etapas del proceso de fabricación de tapas donde se genera spoilage',
        options: [
          {
            text: 'Impresión',
            isCorrect: false
          },
          {
            text: 'Recubrimiento',
            isCorrect: false
          },
          {
            text: 'Troquelado',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el Hominy Gritz?',
        options: [
          {
            text: 'Es el principal CoProducto del maíz, que se aprovecha en un 100% y se vende a la industria ganadera para alimento de animales',
            isCorrect: true
          },
          {
            text: 'Es el CoProducto resultante a partir de todos aquellos granos que no cumplen con las especificaciones de AB InBev.',
            isCorrect: false
          },
          {
            text: 'Es el CoProducto producido en el alistamiento del grano para el despacho de los silos al ensacado.',
            isCorrect: false
          },
          {
            text: 'Es el CoProducto generado en las tomas de aspiración de los transportadores del grano, elevadores, cribas y básculas de reciba.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'Cuales son los tipos de papel que se utilizan para las etiquetas producidas en Indugral',
        options: [
          {
            text: 'Papel bond, papel esmaltado',
            isCorrect: false
          },
          {
            text: 'Papel esmaltado y metalizado',
            isCorrect: false
          },
          {
            text: 'Papel esmaltado, papel esmaltado gofrado y papel metalizado',
            isCorrect: true
          },
          {
            text: 'Papel carbón',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_initial',
    page: 'capex_toolkit_initial',
    external: 'capex_toolkit_initial',
    steps: 7,
    title: 'Mide tu conocimiento ',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/icon_capex.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿Qué documentación se necesita para respaldo en una aprobación de un proyecto en la herramienta CAPEX 360?',
        options: [
          {
            text: 'Formato RIA',
            isCorrect: false
          },
          {
            text: 'One Pager',
            isCorrect: false
          },
          {
            text: 'Postmortem',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'En el llenado de un Formato RIA se deben incluir los KPIs para proyectos de…',
        options: [
          {
            text: 'Viability (QLD, ESL, UPP, OTH)',
            isCorrect: true
          },
          {
            text: 'Costo',
            isCorrect: false
          },
          {
            text: 'Capacidad',
            isCorrect: false
          },
          {
            text: 'IT',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál es el mínimo de llenado en un One Pager?',
        options: [
          {
            text: 'Caso de negocio',
            isCorrect: false
          },
          {
            text: 'CBS (Cost Breakdown Structure)',
            isCorrect: false
          },
          {
            text: 'Capacity File y Cronograma',
            isCorrect: false
          },
          {
            text: 'Todos las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento necesario para?  ',
        options: [
          {
            text: 'Evaluación financiera y aprobación del proyecto',
            isCorrect: true
          },
          {
            text: 'Seguimiento de finalización del proyecto',
            isCorrect: false
          },
          {
            text: 'Opciones a y b son correctas',
            isCorrect: false
          },
          {
            text: 'Ninguno de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles de las siguientes fechas deben incluirse en el Formato RIA?',
        options: [
          {
            text: 'Solo la fecha de inicio del proyecto',
            isCorrect: false
          },
          {
            text: 'El ingreso de la primera y última factura, y fecha de inicio de beneficio',
            isCorrect: true
          },
          {
            text: 'Fecha de FSP',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿Qué indicadores financieros son los que deberían tener en cuenta para los análisis de un Formato RIA?',
        options: [
          {
            text: 'Payback',
            isCorrect: false
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          },
          {
            text: 'Todos anteriores',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_final',
    page: 'capex_toolkit_final',
    external: 'capex_toolkit_final',
    steps: 7,
    title: 'Mide tu conocimiento ',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/icon_capex.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿Qué documentación se necesita para respaldo en una aprobación de un proyecto en la herramienta CAPEX 360?',
        options: [
          {
            text: 'Formato RIA',
            isCorrect: false
          },
          {
            text: 'One Pager',
            isCorrect: false
          },
          {
            text: 'Postmortem',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'En el llenado de un Formato RIA se deben incluir los KPIs para proyectos de…',
        options: [
          {
            text: 'Viability (QLD, ESL, UPP, OTH)',
            isCorrect: true
          },
          {
            text: 'Costo',
            isCorrect: false
          },
          {
            text: 'Capacidad',
            isCorrect: false
          },
          {
            text: 'IT',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál es el mínimo de llenado en un One Pager?',
        options: [
          {
            text: 'Caso de negocio',
            isCorrect: false
          },
          {
            text: 'CBS (Cost Breakdown Structure)',
            isCorrect: false
          },
          {
            text: 'Capacity File y Cronograma',
            isCorrect: false
          },
          {
            text: 'Todos las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento necesario para?  ',
        options: [
          {
            text: 'Evaluación financiera y aprobación del proyecto',
            isCorrect: true
          },
          {
            text: 'Seguimiento de finalización del proyecto',
            isCorrect: false
          },
          {
            text: 'Opciones a y b son correctas',
            isCorrect: false
          },
          {
            text: 'Ninguno de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Cuáles de las siguientes fechas deben incluirse en el Formato RIA?',
        options: [
          {
            text: 'Solo la fecha de inicio del proyecto',
            isCorrect: false
          },
          {
            text: 'El ingreso de la primera y última factura, y fecha de inicio de beneficio',
            isCorrect: true
          },
          {
            text: 'Fecha de FSP',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿Qué indicadores financieros son los que deberían tener en cuenta para los análisis de un Formato RIA?',
        options: [
          {
            text: 'Payback',
            isCorrect: false
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          },
          {
            text: 'Todos anteriores',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_pec_initial',
    page: 'capex_toolkit_pec_initial',
    external: 'capex_toolkit_pec_initial',
    steps: 9,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones. Solo tienes un intento, concéntrate y aprueba tu quiz de la unidad.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-pec.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: 'El One Pager es un documento que:',
        options: [
          {
            text: 'Muestra la evaluación financiera del proyecto',
            isCorrect: false
          },
          {
            text: 'Muestra un resumen del proyecto o Caso de Negocio',
            isCorrect: true
          },
          {
            text: 'Muestra todos los cambios que se van a generar con la implementación del proyecto',
            isCorrect: false
          },
          {
            text: 'Representa el Acta de Constitución de un proyecto',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'La rutina de gestión de las inversiones en bienes de Capital o CAPEX se inicia:',
        options: [
          {
            text: 'Con la colocación de la PR',
            isCorrect: false
          },
          {
            text: 'Con la asignación del Pedido',
            isCorrect: false
          },
          {
            text: 'Con la recepción del Formato One Year Plan',
            isCorrect: true
          },
          {
            text: 'Con la aprobación del proyecto en CAPEX 360',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Para liberar un Proyecto se requieren 4 documentos, ¿Cuál de las siguientes opciones contiene los documentos correctos?',
        options: [
          {
            text: 'RIA, ONE PAGER, PR Y PROJECT STATEMENT',
            isCorrect: false
          },
          {
            text: 'RIA, ONE PAGER, PROJECT STATEMENT Y MOC',
            isCorrect: true
          },
          {
            text: 'RIA, ONE PAGER, PR Y PO',
            isCorrect: false
          },
          {
            text: 'RIA, ONE PAGER, PR y Post Mortem',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Cuándo se puede empezar a ejecutar un proyecto?',
        options: [
          {
            text: 'En el momento cuando se aprueba en Capex 360',
            isCorrect: false
          },
          {
            text: 'Se recibe confirmación de asignación de recursos en SAP',
            isCorrect: true
          },
          {
            text: 'Cuando ya se cuenta con el Código de Orden Interna',
            isCorrect: false
          },
          {
            text: 'Cuando el equipo de PPMs ya cuenta con el ID Global del Proyecto',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'El LE (Last Estimated) es una actualización de las proyecciones de ejecución de nuestro presupuesto, se realiza:',
        options: [
          {
            text: 'Diariamente',
            isCorrect: false
          },
          {
            text: 'Los viernes al finalizar la semana',
            isCorrect: false
          },
          {
            text: 'La última semana de cada mes',
            isCorrect: true
          },
          {
            text: 'Un vez al año',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué es el Post Mortem?',
        options: [
          {
            text: 'Es una revisión post implementación de proyectos se aplica a proyectos de las categorías CSD y CPD',
            isCorrect: true
          },
          {
            text: 'Es una revisión post implementación de proyectos se aplica a proyectos de las categorías ESL y UPP',
            isCorrect: false
          },
          {
            text: 'Una hoja de cálculo que sirve para garantizar la continuidad del negocio',
            isCorrect: false
          },
          {
            text: 'El documento que solo se aplica a proyectos mayores a 1.5 Millones',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: 'El cierre contable del proyecto o Capitalización de Activos:',
        options: [
          {
            text: 'Se realiza al 100% de proyectos una vez que éstos se han culminado',
            isCorrect: false
          },
          {
            text: 'Se puede hacer un cierre contable o capitalización parcial',
            isCorrect: false
          },
          {
            text: 'Solo se realiza a proyectos de la categoría UPP',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Aprendiz, en caso de NO realizarse el cierre contable del proyecto o Capitalización de Activos ¿Qué podría pasar?',
        options: [
          {
            text: 'No nos pueden aprobar nuevos proyectos',
            isCorrect: false
          },
          {
            text: 'No se puede pagar a los proveedores',
            isCorrect: false
          },
          {
            text: 'Se afecta el resultado de la compañía (EBITDA) al no poder aprovechar el escudo fiscal',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_pec_final',
    page: 'capex_toolkit_pec_final',
    external: 'capex_toolkit_pec_final',
    steps: 9,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones. Solo tienes un intento, concéntrate y aprueba tu quiz de la unidad.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-pec.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: 'El One Pager es un documento que:',
        options: [
          {
            text: 'Muestra la evaluación financiera del proyecto',
            isCorrect: false
          },
          {
            text: 'Muestra un resumen del proyecto o Caso de Negocio',
            isCorrect: true
          },
          {
            text: 'Muestra todos los cambios que se van a generar con la implementación del proyecto',
            isCorrect: false
          },
          {
            text: 'Representa el Acta de Constitución de un proyecto',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'La rutina de gestión de las inversiones en bienes de Capital o CAPEX se inicia:',
        options: [
          {
            text: 'Con la colocación de la PR',
            isCorrect: false
          },
          {
            text: 'Con la asignación del Pedido',
            isCorrect: false
          },
          {
            text: 'Con la recepción del Formato One Year Plan',
            isCorrect: true
          },
          {
            text: 'Con la aprobación del proyecto en CAPEX 360',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Para liberar un Proyecto se requieren 4 documentos, ¿Cuál de las siguientes opciones contiene los documentos correctos?',
        options: [
          {
            text: 'RIA, ONE PAGER, PR Y PROJECT STATEMENT',
            isCorrect: false
          },
          {
            text: 'RIA, ONE PAGER, PROJECT STATEMENT Y MOC',
            isCorrect: true
          },
          {
            text: 'RIA, ONE PAGER, PR Y PO',
            isCorrect: false
          },
          {
            text: 'RIA, ONE PAGER, PR y Post Mortem',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Cuándo se puede empezar a ejecutar un proyecto?',
        options: [
          {
            text: 'En el momento cuando se aprueba en Capex 360',
            isCorrect: false
          },
          {
            text: 'Se recibe confirmación de asignación de recursos en SAP',
            isCorrect: true
          },
          {
            text: 'Cuando ya se cuenta con el Código de Orden Interna',
            isCorrect: false
          },
          {
            text: 'Cuando el equipo de PPMs ya cuenta con el ID Global del Proyecto',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'El LE (Last Estimated) es una actualización de las proyecciones de ejecución de nuestro presupuesto, se realiza:',
        options: [
          {
            text: 'Diariamente',
            isCorrect: false
          },
          {
            text: 'Los viernes al finalizar la semana',
            isCorrect: false
          },
          {
            text: 'La última semana de cada mes',
            isCorrect: true
          },
          {
            text: 'Un vez al año',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué es el Post Mortem?',
        options: [
          {
            text: 'Es una revisión post implementación de proyectos se aplica a proyectos de las categorías CSD y CPD',
            isCorrect: true
          },
          {
            text: 'Es una revisión post implementación de proyectos se aplica a proyectos de las categorías ESL y UPP',
            isCorrect: false
          },
          {
            text: 'Una hoja de cálculo que sirve para garantizar la continuidad del negocio',
            isCorrect: false
          },
          {
            text: 'El documento que solo se aplica a proyectos mayores a 1.5 Millones',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: 'El cierre contable del proyecto o Capitalización de Activos:',
        options: [
          {
            text: 'Se realiza al 100% de proyectos una vez que éstos se han culminado',
            isCorrect: false
          },
          {
            text: 'Se puede hacer un cierre contable o capitalización parcial',
            isCorrect: false
          },
          {
            text: 'Solo se realiza a proyectos de la categoría UPP',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Aprendiz, en caso de NO realizarse el cierre contable del proyecto o Capitalización de Activos ¿Qué podría pasar?',
        options: [
          {
            text: 'No nos pueden aprobar nuevos proyectos',
            isCorrect: false
          },
          {
            text: 'No se puede pagar a los proveedores',
            isCorrect: false
          },
          {
            text: 'Se afecta el resultado de la compañía (EBITDA) al no poder aprovechar el escudo fiscal',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_mex_initial',
    page: 'capex_toolkit_mex_initial',
    external: 'capex_toolkit_mex_initial',
    steps: 7,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-mex.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Qué paquetes tienen un retorno de inversión o ROI?',
        options: [
          {
            text: 'Costo (CSD) y Environmental (ESL)',
            isCorrect: false
          },
          {
            text: 'Capacidad (CPD) y Costo (CSD)',
            isCorrect: true
          },
          {
            text: 'Environmental (ESL) y Quality (QLD)',
            isCorrect: false
          },
          {
            text: 'Capacidade (CPD) y Others (OTH)',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Qué documentos se necesitan para la aprobación de proyectos?',
        options: [
          {
            text: 'Project Statement, MOC, CBS.',
            isCorrect: false
          },
          {
            text: 'MOC, CBS.',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: true
          },
          {
            text: 'RIA, OP, Project Statement',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Además de Capex 360, en qué otra herramienta podemos ver el estatus de liberación de nuestros proyectos?',
        options: [
          {
            text: 'SAP',
            isCorrect: false
          },
          {
            text: 'T&M',
            isCorrect: false
          },
          {
            text: 'CapEx MAZsive',
            isCorrect: true
          },
          {
            text: 'Dashboard',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué porcentaje de desviación máxima tenemos para nuestro LE(Last Estimated)?',
        options: [
          {
            text: '+- 3%',
            isCorrect: false
          },
          {
            text: '+-5%',
            isCorrect: true
          },
          {
            text: '20%',
            isCorrect: false
          },
          {
            text: '+-10%',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Quién es el responsable de la correcta ejecución del LE(Last Estimated)?',
        options: [
          {
            text: 'PPM',
            isCorrect: false
          },
          {
            text: 'Dueño de paquete',
            isCorrect: false
          },
          {
            text: 'Regional de proyectos',
            isCorrect: false
          },
          {
            text: 'Regional de proyectos',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿En qué porcentaje de ejecución de un proyecto se  puede capitalizar?',
        options: [
          {
            text: '80%',
            isCorrect: true
          },
          {
            text: '90%',
            isCorrect: false
          },
          {
            text: '100%',
            isCorrect: false
          },
          {
            text: '105%',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_mex_final',
    page: 'capex_toolkit_mex_final',
    external: 'capex_toolkit_mex_final',
    steps: 7,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-mex.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Qué paquetes tienen un retorno de inversión o ROI?',
        options: [
          {
            text: 'Costo (CSD) y Environmental (ESL)',
            isCorrect: false
          },
          {
            text: 'Capacidad (CPD) y Costo (CSD)',
            isCorrect: true
          },
          {
            text: 'Environmental (ESL) y Quality (QLD)',
            isCorrect: false
          },
          {
            text: 'Capacidade (CPD) y Others (OTH)',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Qué documentos se necesitan para la aprobación de proyectos?',
        options: [
          {
            text: 'Project Statement, MOC, CBS.',
            isCorrect: false
          },
          {
            text: 'MOC, CBS.',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: true
          },
          {
            text: 'RIA, OP, Project Statement',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Además de Capex 360, en qué otra herramienta podemos ver el estatus de liberación de nuestros proyectos?',
        options: [
          {
            text: 'SAP',
            isCorrect: false
          },
          {
            text: 'T&M',
            isCorrect: false
          },
          {
            text: 'CapEx MAZsive',
            isCorrect: true
          },
          {
            text: 'Dashboard',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué porcentaje de desviación máxima tenemos para nuestro LE(Last Estimated)?',
        options: [
          {
            text: '+- 3%',
            isCorrect: false
          },
          {
            text: '+-5%',
            isCorrect: true
          },
          {
            text: '20%',
            isCorrect: false
          },
          {
            text: '+-10%',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Quién es el responsable de la correcta ejecución del LE(Last Estimated)?',
        options: [
          {
            text: 'PPM',
            isCorrect: false
          },
          {
            text: 'Dueño de paquete',
            isCorrect: false
          },
          {
            text: 'Regional de proyectos',
            isCorrect: true
          },
          {
            text: 'Regional de proyectos',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿En qué porcentaje de ejecución de un proyecto se  puede capitalizar?',
        options: [
          {
            text: '80%',
            isCorrect: true
          },
          {
            text: '90%',
            isCorrect: false
          },
          {
            text: '100%',
            isCorrect: false
          },
          {
            text: '105%',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_col_initial',
    page: 'capex_toolkit_col_initial',
    external: 'capex_toolkit_col_initial',
    steps: 9,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-col.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Cuándo se inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'Con la recepción del T&M',
            isCorrect: false
          },
          {
            text: 'Con la recepción del One Year Plan',
            isCorrect: true
          },
          {
            text: 'Con la creación de la OI',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para aprobar un proyecto, qué documentos son requeridos?',
        options: [
          {
            text: 'Post Mortem',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: true
          },
          {
            text: 'Formato Solicitud cargue en SAP',
            isCorrect: false
          },
          {
            text: 'Formato creación OI',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué información debe contemplarse o añadirse en el formato One Pager?',
        options: [
          {
            text: 'Datos financieros del proyecto',
            isCorrect: false
          },
          {
            text: 'Datos generales del proyecto: Zona, país, nombre del proyecto, paquete, código global',
            isCorrect: false
          },
          {
            text: 'Detalle de las adquisiciones, imágenes, línea de vida del proyecto, Booking y Cash Flow, riesgos estimados',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento que nos sirve para?',
        options: [
          {
            text: 'Presentar al comité de seguimiento',
            isCorrect: false
          },
          {
            text: 'Realizar adquisiciones',
            isCorrect: false
          },
          {
            text: 'Resumir la inversión financiera y justificar la inversión del proyecto',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿En el Formato RIA qué datos debemos incluir?',
        options: [
          {
            text: 'Información general del proyecto, fechas de inicio inversión, fecha final y fecha de inicio beneficios, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: true
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: false
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs y Aprobación Capex 360',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿El Post Mortem es un documento que realizamos una vez?',
        options: [
          {
            text: 'Esté aprobado el proyecto',
            isCorrect: false
          },
          {
            text: 'Esté finalizado el proyecto',
            isCorrect: true
          },
          {
            text: 'Tengamos el número de la Orden Interna',
            isCorrect: false
          },
          {
            text: 'Esté cargado el presupuesto en SAP',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿El T&M (Tracking & Monitoring) es un documento que utilizamos para?',
        options: [
          {
            text: 'Realizar seguimiento a nuestros proyectos',
            isCorrect: true
          },
          {
            text: 'Para solicitar la capitalización el proyecto',
            isCorrect: false
          },
          {
            text: 'Para presentar a comité de aprobaciones',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: '¿El LE (Last Estimated) es un documento que?',
        options: [
          {
            text: 'Se realiza mensualmente',
            isCorrect: false
          },
          {
            text: 'Documento en el que se consignan resultados reales al mes de corte y proyectados los siguientes meses',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_col_final',
    page: 'capex_toolkit_col_final',
    external: 'capex_toolkit_col_final',
    steps: 9,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image: 'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-col.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Cuándo se inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'Con la recepción del T&M',
            isCorrect: false
          },
          {
            text: 'Con la recepción del One Year Plan',
            isCorrect: true
          },
          {
            text: 'Con la creación de la OI',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para aprobar un proyecto, qué documentos son requeridos?',
        options: [
          {
            text: 'Post Mortem',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: true
          },
          {
            text: 'Formato Solicitud cargue en SAP',
            isCorrect: false
          },
          {
            text: 'Formato creación OI',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué información debe contemplarse o añadirse en el formato One Pager?',
        options: [
          {
            text: 'Datos financieros del proyecto',
            isCorrect: false
          },
          {
            text: 'Datos generales del proyecto: Zona, país, nombre del proyecto, paquete, código global',
            isCorrect: false
          },
          {
            text: 'Detalle de las adquisiciones, imágenes, línea de vida del proyecto, Booking y Cash Flow, riesgos estimados',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento que nos sirve para?',
        options: [
          {
            text: 'Presentar al comité de seguimiento',
            isCorrect: false
          },
          {
            text: 'Realizar adquisiciones',
            isCorrect: false
          },
          {
            text: 'Resumir la inversión financiera y justificar la inversión del proyecto',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿En el Formato RIA qué datos debemos incluir?',
        options: [
          {
            text: 'Información general del proyecto, fechas de inicio inversión, fecha final y fecha de inicio beneficios, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: true
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: false
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs y Aprobación Capex 360',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿El Post Mortem es un documento que realizamos una vez?',
        options: [
          {
            text: 'Esté aprobado el proyecto',
            isCorrect: false
          },
          {
            text: 'Esté finalizado el proyecto',
            isCorrect: true
          },
          {
            text: 'Tengamos el número de la Orden Interna',
            isCorrect: false
          },
          {
            text: 'Esté cargado el presupuesto en SAP',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿El T&M (Tracking & Monitoring) es un documento que utilizamos para?',
        options: [
          {
            text: 'Realizar seguimiento a nuestros proyectos',
            isCorrect: true
          },
          {
            text: 'Para solicitar la capitalización el proyecto',
            isCorrect: false
          },
          {
            text: 'Para presentar a comité de aprobaciones',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label: '¿El LE (Last Estimated) es un documento que?',
        options: [
          {
            text: 'Se realiza mensualmente',
            isCorrect: false
          },
          {
            text: 'Documento en el que se consignan resultados reales al mes de corte y proyectados los siguientes meses',
            isCorrect: false
          },
          {
            text: 'Opciones A y B son correctas',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_cac_initial',
    page: 'capex_toolkit_cac_initial',
    external: 'capex_toolkit_cac_initial',
    steps: 7,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-cac-hes.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Cuándo se inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'Con la recepción del T&M',
            isCorrect: false
          },
          {
            text: 'Con la recepción del One Year Plan',
            isCorrect: true
          },
          {
            text: 'Con la creación de la OI',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para aprobar un proyecto, qué documentos son requeridos?',
        options: [
          {
            text: 'Post Mortem',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: true
          },
          {
            text: 'Formato Solicitud cargue en SAP',
            isCorrect: false
          },
          {
            text: 'Formato creación OI',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué información debe contemplarse o añadirse en el formato One Pager?',
        options: [
          {
            text: 'Datos financieros del proyecto',
            isCorrect: false
          },
          {
            text: 'Datos generales del proyecto: Zona, país, nombre del proyecto, paquete, código global',
            isCorrect: false
          },
          {
            text: 'Detalle de las adquisiciones, imágenes, línea de vida del proyecto, Booking y Cash Flow, riesgos estimados',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento que nos sirve para?',
        options: [
          {
            text: 'Presentar al comité de seguimiento',
            isCorrect: false
          },
          {
            text: 'Realizar adquisiciones',
            isCorrect: false
          },
          {
            text: 'Resumir la inversión financiera y justificar la inversión del proyecto',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿En el Formato RIA qué datos debemos incluir?',
        options: [
          {
            text: 'Información general del proyecto, fechas de inicio inversión, fecha final y fecha de inicio beneficios, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: true
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: false
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs y Aprobación Capex 360',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿El Post Mortem es un documento que realizamos una vez?',
        options: [
          {
            text: 'Esté aprobado el proyecto',
            isCorrect: false
          },
          {
            text: 'Esté finalizado el proyecto',
            isCorrect: true
          },
          {
            text: 'Tengamos el número de la Orden Interna',
            isCorrect: false
          },
          {
            text: 'Esté cargado el presupuesto en SAP',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_toolkit_cac_final',
    page: 'capex_toolkit_cac_final',
    external: 'capex_toolkit_cac_final',
    steps: 7,
    title: 'Mide tu conocimiento en nuestra Quiz Station',
    description:
      'A continuación se presentan 6 preguntas de selección múltiple. Lee los enunciados con atención y selecciona la respuesta que consideres correcta de acuerdo a lo aprendido en las lecciones.',
    image:
      'https://contenidospmm.s3.amazonaws.com/cursos/curso_6/img-cac-hes.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿Cuándo se inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'Con la recepción del T&M',
            isCorrect: false
          },
          {
            text: 'Con la recepción del One Year Plan',
            isCorrect: false
          },
          {
            text: 'Con la creación de la OI',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para aprobar un proyecto, qué documentos son requeridos?',
        options: [
          {
            text: 'Post Mortem',
            isCorrect: false
          },
          {
            text: 'One Pager, RIA, Project Statement, MOC y CBS',
            isCorrect: false
          },
          {
            text: 'Formato Solicitud cargue en SAP',
            isCorrect: false
          },
          {
            text: 'Formato creación OI',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué información debe contemplarse o añadirse en el formato One Pager?',
        options: [
          {
            text: 'Datos financieros del proyecto',
            isCorrect: false
          },
          {
            text: 'Datos generales del proyecto: Zona, país, nombre del proyecto, paquete, código global',
            isCorrect: false
          },
          {
            text: 'Detalle de las adquisiciones, imágenes, línea de vida del proyecto, Booking y Cash Flow, riesgos estimados',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿El Formato RIA es un documento que nos sirve para?',
        options: [
          {
            text: 'Presentar al comité de seguimiento',
            isCorrect: false
          },
          {
            text: 'Realizar adquisiciones',
            isCorrect: false
          },
          {
            text: 'Resumir la inversión financiera y justificar la inversión del proyecto',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿En el Formato RIA qué datos debemos incluir?',
        options: [
          {
            text: 'Información general del proyecto, fechas de inicio inversión, fecha final y fecha de inicio beneficios, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: false
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs.',
            isCorrect: false
          },
          {
            text: 'Información general del proyecto, Detalle de la inversión, beneficios (para proyectos CPD y CSD), Riesgos y KPIs y Aprobación Capex 360',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿El Post Mortem es un documento que realizamos una vez?',
        options: [
          {
            text: 'Esté aprobado el proyecto',
            isCorrect: false
          },
          {
            text: 'Esté finalizado el proyecto',
            isCorrect: false
          },
          {
            text: 'Tengamos el número de la Orden Interna',
            isCorrect: false
          },
          {
            text: 'Esté cargado el presupuesto en SAP',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vcl_initial',
    page: 'vcl_initial',
    external: 'vcl_initial',
    steps: 11,
    title: 'VLC Básico',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso VLC Básico. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿En qué categoría de costos se incluyen los gastos producidos desde que un producto sale de la línea de producción hasta que se entrega al cliente final?',
        options: [
          {
            text: 'ZBB',
            isCorrect: false
          },
          {
            text: 'Leasing',
            isCorrect: false
          },
          {
            text: 'VLC',
            isCorrect: true
          },
          {
            text: 'CAPE',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: En T2 el producto es llevado del __________ al __________.',
        options: [
          {
            text: 'Centro de distribución al Cliente final',
            isCorrect: true
          },
          {
            text: 'Cliente final al Cross-dock',
            isCorrect: false
          },
          {
            text: 'Línea de producción al Warehouse',
            isCorrect: false
          },
          {
            text: 'Centro de distribución al Cross-dock',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Qué costos se incluyen en ZBB?',
        options: [
          {
            text: 'Costos de rentar o prestar activos como camiones para la operación.',
            isCorrect: false
          },
          {
            text: 'Pérdidas en la cadena de suministro.',
            isCorrect: false
          },
          {
            text: 'Ganancias y pérdidas en la cadena de suministro.',
            isCorrect: false
          },
          {
            text: 'Costos fijos de la operación logística en T1 y T2',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué costos NO dependen del volumen de venta sino que son recurrentes en el tiempo?',
        options: [
          {
            text: 'VLC',
            isCorrect: false
          },
          {
            text: 'ZBB',
            isCorrect: true
          },
          {
            text: 'CAPEX',
            isCorrect: false
          },
          {
            text: 'Leasing',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Qué gastos se  incluyen en “People” cuando se cuenta con personal propio en T1?',
        options: [
          {
            text: 'Montacarguistas, ayudantes de almacén y choferes',
            isCorrect: true
          },
          {
            text: 'Pickers',
            isCorrect: false
          },
          {
            text: 'Selección de envase (sorting) en fábrica, choferes y mantenimiento de flota.',
            isCorrect: false
          },
          {
            text: 'Choferes, almacenamiento y montacarguistas.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'En Ab InBev llamamos __________ al tipo de centro de almacenamiento en donde la bodega secundaria está dentro de la planta.',
        options: [
          {
            text: 'Dry Depot',
            isCorrect: false
          },
          {
            text: 'Wet Depot',
            isCorrect: true
          },
          {
            text: 'Cross-dock',
            isCorrect: false
          },
          {
            text: 'UDC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿A qué línea de distribución corresponden los gastos del personal cuando el producto es trasladado del Centro de distribución al cliente?',
        options: [
          {
            text: 'First Tear (T1)',
            isCorrect: false
          },
          {
            text: 'ZBB',
            isCorrect: false
          },
          {
            text: 'Supply Chain Overhead',
            isCorrect: false
          },
          {
            text: 'Second Tear (T2)',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los términos o condiciones que ayudan a determinar las responsabilidades de los exportadores e importadores en las negociaciones internacionales?',
        options: [
          {
            text: 'NIIF',
            isCorrect: false
          },
          {
            text: 'Cláusulas de negociación Internacional',
            isCorrect: false
          },
          {
            text: 'Incoterms',
            isCorrect: true
          },
          {
            text: 'Normativa Aduanera',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          ' ¿Qué costos NO se facturan dentro de VLC si asumimos el rol de importador con un INCOTERM FAS?',
        options: [
          {
            text: 'Gastos del exportador',
            isCorrect: true
          },
          {
            text: 'Mantenimiento de montacargas',
            isCorrect: false
          },
          {
            text: 'Seguros e impuestos',
            isCorrect: false
          },
          {
            text: 'Almacenamiento de productos',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el orden correcto de las etapas de distribución en T2?',
        options: [
          {
            text: '(1) Descarga de vacíos (2) Recepción y picking (3) Carga y entrega del producto',
            isCorrect: false
          },
          {
            text: '(1)Recepción y picking (2) Retorno de ruta al CD (3) Entrega del producto',
            isCorrect: false
          },
          {
            text: '(1) Recepción, almacenaje y picking (2) Carga y descarga del producto (3) Retorno de ruta al CD',
            isCorrect: true
          },
          {
            text: '(1) Recepción, almacenaje y picking (2) Descarga de vacíos (3) Carga y entrega del producto',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vcl_final',
    page: 'vcl_final',
    external: 'vcl_final',
    steps: 11,
    title: 'VLC Básico',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso VLC Básico. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿En qué categoría de costos se incluyen los gastos producidos desde que un producto sale de la línea de producción hasta que se entrega al cliente final?',
        options: [
          {
            text: 'ZBB',
            isCorrect: false
          },
          {
            text: 'Leasing',
            isCorrect: false
          },
          {
            text: 'VLC',
            isCorrect: true
          },
          {
            text: 'CAPE',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: En T2 el producto es llevado del __________ al __________.',
        options: [
          {
            text: 'Centro de distribución al Cliente final',
            isCorrect: true
          },
          {
            text: 'Cliente final al Cross-dock',
            isCorrect: false
          },
          {
            text: 'Línea de producción al Warehouse',
            isCorrect: false
          },
          {
            text: 'Centro de distribución al Cross-dock',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Qué costos se incluyen en ZBB?',
        options: [
          {
            text: 'Costos de rentar o prestar activos como camiones para la operación.',
            isCorrect: false
          },
          {
            text: 'Pérdidas en la cadena de suministro.',
            isCorrect: false
          },
          {
            text: 'Ganancias y pérdidas en la cadena de suministro.',
            isCorrect: false
          },
          {
            text: 'Costos fijos de la operación logística en T1 y T2',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué costos NO dependen del volumen de venta sino que son recurrentes en el tiempo?',
        options: [
          {
            text: 'VLC',
            isCorrect: false
          },
          {
            text: 'ZBB',
            isCorrect: true
          },
          {
            text: 'CAPEX',
            isCorrect: false
          },
          {
            text: 'Leasing',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Qué gastos se  incluyen en “People” cuando se cuenta con personal propio en T1?',
        options: [
          {
            text: 'Montacarguistas, ayudantes de almacén y choferes',
            isCorrect: true
          },
          {
            text: 'Pickers',
            isCorrect: false
          },
          {
            text: 'Selección de envase (sorting) en fábrica, choferes y mantenimiento de flota.',
            isCorrect: false
          },
          {
            text: 'Choferes, almacenamiento y montacarguistas.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'En Ab InBev llamamos __________ al tipo de centro de almacenamiento en donde la bodega secundaria está dentro de la planta.',
        options: [
          {
            text: 'Dry Depot',
            isCorrect: false
          },
          {
            text: 'Wet Depot',
            isCorrect: true
          },
          {
            text: 'Cross-dock',
            isCorrect: false
          },
          {
            text: 'UDC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿A qué línea de distribución corresponden los gastos del personal cuando el producto es trasladado del Centro de distribución al cliente?',
        options: [
          {
            text: 'First Tear (T1)',
            isCorrect: false
          },
          {
            text: 'ZBB',
            isCorrect: false
          },
          {
            text: 'Supply Chain Overhead',
            isCorrect: false
          },
          {
            text: 'Second Tear (T2)',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los términos o condiciones que ayudan a determinar las responsabilidades de los exportadores e importadores en las negociaciones internacionales?',
        options: [
          {
            text: 'NIIF',
            isCorrect: false
          },
          {
            text: 'Cláusulas de negociación Internacional',
            isCorrect: false
          },
          {
            text: 'Incoterms',
            isCorrect: true
          },
          {
            text: 'Normativa Aduanera',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          ' ¿Qué costos NO se facturan dentro de VLC si asumimos el rol de importador con un INCOTERM FAS?',
        options: [
          {
            text: 'Gastos del exportador',
            isCorrect: true
          },
          {
            text: 'Mantenimiento de montacargas',
            isCorrect: false
          },
          {
            text: 'Seguros e impuestos',
            isCorrect: false
          },
          {
            text: 'Almacenamiento de productos',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el orden correcto de las etapas de distribución en T2?',
        options: [
          {
            text: '(1) Descarga de vacíos (2) Recepción y picking (3) Carga y entrega del producto',
            isCorrect: false
          },
          {
            text: '(1)Recepción y picking (2) Retorno de ruta al CD (3) Entrega del producto',
            isCorrect: false
          },
          {
            text: '(1) Recepción, almacenaje y picking (2) Carga y descarga del producto (3) Retorno de ruta al CD',
            isCorrect: true
          },
          {
            text: '(1) Recepción, almacenaje y picking (2) Descarga de vacíos (3) Carga y entrega del producto',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'cbs_initial',
    page: 'cbs_initial',
    external: 'cbs_initial',
    steps: 11,
    title: 'Curso CBS',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento sobre el curso CBS. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿En dónde inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'One Year Plan',
            isCorrect: true
          },
          {
            text: 'MOC',
            isCorrect: false
          },
          {
            text: 'CBS',
            isCorrect: false
          },
          {
            text: 'Anaplan',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para qué casos se solicitará el CBS?.',
        options: [
          {
            text: 'Proyectos superiores a 5 millones de dólares.',
            isCorrect: false
          },
          {
            text: 'Proyectos menores a 700 mil de dólares.',
            isCorrect: false
          },
          {
            text: 'Proyectos superiores a 1.5 millones de dólares.',
            isCorrect: true
          },
          {
            text: 'Proyectos que no superen los 1.5 millones de dólares.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'En el ___________ encontrarás el listado de los proyectos aprobados y el presupuesto anual.',
        options: [
          {
            text: 'RIA',
            isCorrect: false
          },
          {
            text: 'One Year Plan',
            isCorrect: true
          },
          {
            text: 'Project Statement',
            isCorrect: false
          },
          {
            text: 'MOC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el documento que NO le solicitará el PPM de la Regional a los equipos ?',
        options: [
          {
            text: 'RIA y MOC',
            isCorrect: false
          },
          {
            text: 'One Pager ',
            isCorrect: false
          },
          {
            text: 'Template financiero',
            isCorrect: true
          },
          {
            text: 'Project Statement y CBS',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Cost ____________ o Estructura de Costos es un template de desglose financiero llevado a detalle por cada ________.',
        options: [
          {
            text: 'Structure / área',
            isCorrect: false
          },
          {
            text: 'Structure / BU',
            isCorrect: false
          },
          {
            text: 'Breakdown Structure / PPM de zona',
            isCorrect: false
          },
          {
            text: 'Breakdown Structure / área',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué se especifica en un CBS?',
        options: [
          {
            text: 'La proyección de los gastos durante el tiempo de ejecución del proyecto. ',
            isCorrect: false
          },
          {
            text: 'Todas las compras de equipos o servicios necesarios  para el desarrollo del proyecto.',
            isCorrect: true
          },
          {
            text: 'Los gastos por función que aplicarán al proyecto desarrollado.',
            isCorrect: false
          },
          {
            text: 'El Budget vs el Actual. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: '¿Para qué sirve un CBS?',
        options: [
          {
            text: 'Para identificar los equipos o servicios que se necesita adquirir para la ejecución de un proyecto.',
            isCorrect: true
          },
          {
            text: 'Para identificar las variaciones de mi presupuesto actual. ',
            isCorrect: false
          },
          {
            text: 'Para establecer los ahorros o champions generados con mi estrategia.',
            isCorrect: false
          },
          {
            text: 'Para determinar los flujos de efectivo dentro de mi proyecto. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Los proyectos de cervecería, soft drinks o malteras serán cargados en _________ y para el resto de verticales, la carga se hará en __________.',
        options: [
          {
            text: 'Anaplan / RIA',
            isCorrect: false
          },
          {
            text: 'CAPEX 360 / Anaplan',
            isCorrect: false
          },
          {
            text: 'Anaplan / CAPEX 360',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: ' ¿Cuáles son los componentes de un CBS?',
        options: [
          {
            text: 'TD, One Pager, Phasing',
            isCorrect: false
          },
          {
            text: 'Template Odyssey, TD o Tabla dinámica, Phasing y datos.',
            isCorrect: true
          },
          {
            text: 'Template Odyssey, Tabla dinámica, Summary y Phasing.',
            isCorrect: false
          },
          {
            text: 'Datos, Phasing, Template Odyssey y Cash Flow.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los datos principales que deben ser llenados al ingresar al Odyssey?',
        options: [
          {
            text: 'El país y la tasa de impuestos asignada al proyecto.',
            isCorrect: false
          },
          {
            text: 'Id del proyecto y el identificador de carga a Anaplan.',
            isCorrect: false
          },
          {
            text: 'País y Id del proyecto.',
            isCorrect: true
          },
          {
            text: 'El identificador de carga y el área de la planta encargada.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'cbs_final',
    page: 'cbs_final',
    external: 'cbs_final',
    steps: 11,
    title: 'Curso CBS',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento sobre el curso CBS. A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: '¿En dónde inicia la rutina de gestión de CAPEX?',
        options: [
          {
            text: 'One Year Plan',
            isCorrect: true
          },
          {
            text: 'MOC',
            isCorrect: false
          },
          {
            text: 'CBS',
            isCorrect: false
          },
          {
            text: 'Anaplan',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label: '¿Para qué casos se solicitará el CBS?.',
        options: [
          {
            text: 'Proyectos superiores a 5 millones de dólares.',
            isCorrect: false
          },
          {
            text: 'Proyectos menores a 700 mil de dólares.',
            isCorrect: false
          },
          {
            text: 'Proyectos superiores a 1.5 millones de dólares.',
            isCorrect: true
          },
          {
            text: 'Proyectos que no superen los 1.5 millones de dólares.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'En el ___________ encontrarás el listado de los proyectos aprobados y el presupuesto anual.',
        options: [
          {
            text: 'RIA',
            isCorrect: false
          },
          {
            text: 'One Year Plan',
            isCorrect: true
          },
          {
            text: 'Project Statement',
            isCorrect: false
          },
          {
            text: 'MOC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el documento que NO le solicitará el PPM de la Regional a los equipos ?',
        options: [
          {
            text: 'RIA y MOC',
            isCorrect: false
          },
          {
            text: 'One Pager ',
            isCorrect: false
          },
          {
            text: 'Template financiero',
            isCorrect: true
          },
          {
            text: 'Project Statement y CBS',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Cost ____________ o Estructura de Costos es un template de desglose financiero llevado a detalle por cada ________.',
        options: [
          {
            text: 'Structure / área',
            isCorrect: false
          },
          {
            text: 'Structure / BU',
            isCorrect: false
          },
          {
            text: 'Breakdown Structure / PPM de zona',
            isCorrect: false
          },
          {
            text: 'Breakdown Structure / área',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label: '¿Qué se especifica en un CBS?',
        options: [
          {
            text: 'La proyección de los gastos durante el tiempo de ejecución del proyecto. ',
            isCorrect: false
          },
          {
            text: 'Todas las compras de equipos o servicios necesarios  para el desarrollo del proyecto.',
            isCorrect: true
          },
          {
            text: 'Los gastos por función que aplicarán al proyecto desarrollado.',
            isCorrect: false
          },
          {
            text: 'El Budget vs el Actual. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: '¿Para qué sirve un CBS?',
        options: [
          {
            text: 'Para identificar los equipos o servicios que se necesita adquirir para la ejecución de un proyecto.',
            isCorrect: true
          },
          {
            text: 'Para identificar las variaciones de mi presupuesto actual. ',
            isCorrect: false
          },
          {
            text: 'Para establecer los ahorros o champions generados con mi estrategia.',
            isCorrect: false
          },
          {
            text: 'Para determinar los flujos de efectivo dentro de mi proyecto. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Los proyectos de cervecería, soft drinks o malteras serán cargados en _________ y para el resto de verticales, la carga se hará en __________.',
        options: [
          {
            text: 'Anaplan / RIA',
            isCorrect: false
          },
          {
            text: 'CAPEX 360 / Anaplan',
            isCorrect: false
          },
          {
            text: 'Anaplan / CAPEX 360',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: ' ¿Cuáles son los componentes de un CBS?',
        options: [
          {
            text: 'TD, One Pager, Phasing',
            isCorrect: false
          },
          {
            text: 'Template Odyssey, TD o Tabla dinámica, Phasing y datos.',
            isCorrect: true
          },
          {
            text: 'Template Odyssey, Tabla dinámica, Summary y Phasing.',
            isCorrect: false
          },
          {
            text: 'Datos, Phasing, Template Odyssey y Cash Flow.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los datos principales que deben ser llenados al ingresar al Odyssey?',
        options: [
          {
            text: 'El país y la tasa de impuestos asignada al proyecto.',
            isCorrect: false
          },
          {
            text: 'Id del proyecto y el identificador de carga a Anaplan.',
            isCorrect: false
          },
          {
            text: 'País y Id del proyecto.',
            isCorrect: true
          },
          {
            text: 'El identificador de carga y el área de la planta encargada.',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_mazsive_initial',
    page: 'capex_mazsive_initial',
    external: 'capex_mazsive_initial',
    steps: 11,
    title: 'Capex MAZsive',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Capex MAZsive A continuación, se muestran 20 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          ' ¿A quién debes contactar si tienes problemas con el ingreso a Capex MAZsive?',
        options: [
          {
            text: 'Equipo de People MAZ',
            isCorrect: false
          },
          {
            text: 'Business Partner regiona',
            isCorrect: false
          },
          {
            text: 'Equipo PPM Capex',
            isCorrect: true
          },
          {
            text: 'Equipo Solutions',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las fuentes de datos conectadas en tiempo real a Capex MAZsive?',
        options: [
          {
            text: 'Capex360 y SAP',
            isCorrect: false
          },
          {
            text: 'Capex360, Anaplan, y SAP',
            isCorrect: true
          },
          {
            text: 'Anaplan y SA',
            isCorrect: false
          },
          {
            text: 'Anaplan, SAP y ServiceNow',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué tipos de históricos pueden encontrar dentro de la herramienta?',
        options: [
          {
            text: 'Históricos ejecución Capex (T&M)',
            isCorrect: false
          },
          {
            text: 'Históricos de costos (procurement)',
            isCorrect: false
          },
          {
            text: 'Impuestos (taxes)',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué información puedes consultar en el módulo de Approval Status',
        options: [
          {
            text: 'Estado de aprobación de los proyectos desde Capex360',
            isCorrect: false
          },
          {
            text: 'Listado de aprobadores, aprobador pendiente, monto aprobado, documentación cargada',
            isCorrect: false
          },
          {
            text: 'Estado de aprobación de los proyectos y monto aprobado',
            isCorrect: false
          },
          {
            text: 'Incisos A y B son correctos',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿Cuál es el target de %LE Accuracy de los proyectos?',
        options: [
          {
            text: '95 a 105% Accuracy',
            isCorrect: true
          },
          {
            text: '98 a 102% Accuracy',
            isCorrect: false
          },
          {
            text: '99 a 101% Accuracy',
            isCorrect: false
          },
          {
            text: '90 a 110% Accurac',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿Qué tipos de proyectos puedes consultar dentro del módulo de CBS?',
        options: [
          {
            text: 'Todos los proyectos MAZ',
            isCorrect: false
          },
          {
            text: 'Proyectos de más de 200KUSD',
            isCorrect: false
          },
          {
            text: 'Proyectos de más de 500KUSD',
            isCorrect: true
          },
          {
            text: 'Proyectos de más de 1 MioUSD',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los tipos de Savings que puede tener un proyecto, y que encuentras dentro de Capex MAZsive?',
        options: [
          {
            text: 'Ingeniería (CI) y Procurement (PI)',
            isCorrect: true
          },
          {
            text: 'Ingeniería (CI)',
            isCorrect: false
          },
          {
            text: 'Procurement (PI)',
            isCorrect: false
          },
          {
            text: 'Ingeniería (CI), Procurement (PI) y Otros',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿Cuántas actualizaciones automáticas de la información en tiempo real se hacen diariamente?',
        options: [
          {
            text: 'Tres',
            isCorrect: false
          },
          {
            text: 'Cuatro',
            isCorrect: true
          },
          {
            text: 'dos',
            isCorrect: false
          },
          {
            text: 'Una',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Qué puedes consultar dentro del módulo de información maestra?',
        options: [
          {
            text: 'Los datos conectados en tiempo real desde SAP',
            isCorrect: false
          },
          {
            text: 'Los datos estandarizados de nombres de plantas, regionales, BUs, paquetes, subpaquetes, tipos de cambio, entre otros.',
            isCorrect: true
          },
          {
            text: 'Los datos estandarizados de nombres de plantas, regionales, y BUs',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'La siguiente visual de datos, es un submódulo del módulo de Históricos T&M. ¿Cuál es el nombre del submódulo, y para qué sirve?',
        options: [
          {
            text: 'Submódulo Datos. Sirve para consultar únicamente datos en tiempo real desde SAP',
            isCorrect: false
          },
          {
            text: 'Submódulo Proyectos Capex. Sirve para consultar el 100% de los proyectos Capex. ',
            isCorrect: false
          },
          {
            text: 'Submódulo Multianual. Sirve para consultar proyectos con ejecución de Capex en varios años.',
            isCorrect: true
          },
          {
            text: 'Submódulo Multiproyectos. Sirve para consultar todos los proyectos de MAZ y otras zonas',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'capex_mazsive_final',
    page: 'capex_mazsive_final',
    external: 'capex_mazsive_final',
    steps: 11,
    title: 'Capex MAZsive',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Capex MAZsive A continuación, se muestran 20 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          ' ¿A quién debes contactar si tienes problemas con el ingreso a Capex MAZsive?',
        options: [
          {
            text: 'Equipo de People MAZ',
            isCorrect: false
          },
          {
            text: 'Business Partner regiona',
            isCorrect: false
          },
          {
            text: 'Equipo PPM Capex',
            isCorrect: true
          },
          {
            text: 'Equipo Solutions',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son las fuentes de datos conectadas en tiempo real a Capex MAZsive?',
        options: [
          {
            text: 'Capex360 y SAP',
            isCorrect: false
          },
          {
            text: 'Capex360, Anaplan, y SAP',
            isCorrect: true
          },
          {
            text: 'Anaplan y SA',
            isCorrect: false
          },
          {
            text: 'Anaplan, SAP y ServiceNow',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿Qué tipos de históricos pueden encontrar dentro de la herramienta?',
        options: [
          {
            text: 'Históricos ejecución Capex (T&M)',
            isCorrect: false
          },
          {
            text: 'Históricos de costos (procurement)',
            isCorrect: false
          },
          {
            text: 'Impuestos (taxes)',
            isCorrect: false
          },
          {
            text: 'Todas las anteriores.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Qué información puedes consultar en el módulo de Approval Status',
        options: [
          {
            text: 'Estado de aprobación de los proyectos desde Capex360',
            isCorrect: false
          },
          {
            text: 'Listado de aprobadores, aprobador pendiente, monto aprobado, documentación cargada',
            isCorrect: false
          },
          {
            text: 'Estado de aprobación de los proyectos y monto aprobado',
            isCorrect: false
          },
          {
            text: 'Incisos A y B son correctos',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿Cuál es el target de %LE Accuracy de los proyectos?',
        options: [
          {
            text: '95 a 105% Accuracy',
            isCorrect: true
          },
          {
            text: '98 a 102% Accuracy',
            isCorrect: false
          },
          {
            text: '99 a 101% Accuracy',
            isCorrect: false
          },
          {
            text: '90 a 110% Accurac',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿Qué tipos de proyectos puedes consultar dentro del módulo de CBS?',
        options: [
          {
            text: 'Todos los proyectos MAZ',
            isCorrect: false
          },
          {
            text: 'Proyectos de más de 200KUSD',
            isCorrect: false
          },
          {
            text: 'Proyectos de más de 500KUSD',
            isCorrect: true
          },
          {
            text: 'Proyectos de más de 1 MioUSD',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los tipos de Savings que puede tener un proyecto, y que encuentras dentro de Capex MAZsive?',
        options: [
          {
            text: 'Ingeniería (CI) y Procurement (PI)',
            isCorrect: true
          },
          {
            text: 'Ingeniería (CI)',
            isCorrect: false
          },
          {
            text: 'Procurement (PI)',
            isCorrect: false
          },
          {
            text: 'Ingeniería (CI), Procurement (PI) y Otros',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿Cuántas actualizaciones automáticas de la información en tiempo real se hacen diariamente?',
        options: [
          {
            text: 'Tres',
            isCorrect: false
          },
          {
            text: 'Cuatro',
            isCorrect: true
          },
          {
            text: 'dos',
            isCorrect: false
          },
          {
            text: 'Una',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Qué puedes consultar dentro del módulo de información maestra?',
        options: [
          {
            text: 'Los datos conectados en tiempo real desde SAP',
            isCorrect: false
          },
          {
            text: 'Los datos estandarizados de nombres de plantas, regionales, BUs, paquetes, subpaquetes, tipos de cambio, entre otros.',
            isCorrect: true
          },
          {
            text: 'Los datos estandarizados de nombres de plantas, regionales, y BUs',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          'La siguiente visual de datos, es un submódulo del módulo de Históricos T&M. ¿Cuál es el nombre del submódulo, y para qué sirve?',
        options: [
          {
            text: 'Submódulo Datos. Sirve para consultar únicamente datos en tiempo real desde SAP',
            isCorrect: false
          },
          {
            text: 'Submódulo Proyectos Capex. Sirve para consultar el 100% de los proyectos Capex. ',
            isCorrect: false
          },
          {
            text: 'Submódulo Multianual. Sirve para consultar proyectos con ejecución de Capex en varios años.',
            isCorrect: true
          },
          {
            text: 'Submódulo Multiproyectos. Sirve para consultar todos los proyectos de MAZ y otras zonas',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'champions_eng_initial',
    page: 'champions_eng_initial',
    external: 'champions_eng_initial',
    steps: 11,
    title: 'PRUEBA - Curso Champions',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Champions: Eng & CAPEX . A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es Champions?',
        options: [
          {
            text: 'Son todos los ahorros que se generan a nivel de ingeniería.',
            isCorrect: false
          },
          {
            text: 'Son todas las iniciativas de ahorro que se generan durante el primer trimestre del año.',
            isCorrect: false
          },
          {
            text: 'Son todos los proyectos que se desarrollan para cumplir con el presupuesto asignado.',
            isCorrect: false
          },
          {
            text: 'Son todas las iniciativas de ahorro que nos ayudan a hacer más eficiente nuestro presupuesto.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Al crear estas iniciativas también se crea la opción de ___________ las eficiencias en necesidades futuras de los proyectos',
        options: [
          {
            text: 'Duplicar',
            isCorrect: false
          },
          {
            text: 'Reinvertir',
            isCorrect: true
          },
          {
            text: 'Cambiar',
            isCorrect: false
          },
          {
            text: 'Gastar',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿A qué clasificación corresponden las iniciativas dentro de la ingeniería del proyecto?',
        options: [
          {
            text: 'Taxes',
            isCorrect: false
          },
          {
            text: 'Performance',
            isCorrect: true
          },
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Qué son las iniciativas por precio?',
        options: [
          {
            text: 'Son todas aquellas desarrolladas dentro de la ingeniería del proyecto.',
            isCorrect: false
          },
          {
            text: 'Son aquellas que permiten obtener mejores precios con los proveedores.',
            isCorrect: true
          },
          {
            text: 'Son iniciativas que permiten disminuir el gasto de impuestos a través de iniciativas gubernamentales.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Las iniciativas de __________ son aquellas que permiten disminuir el gasto en impuestos a través de iniciativas gubernamentales.',
        options: [
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Performance',
            isCorrect: false
          },
          {
            text: 'Taxes',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '__________ es la plataforma en la nube que nos permite documentar nuestros logros y avances en Champions.',
        options: [
          {
            text: 'RIA',
            isCorrect: false
          },
          {
            text: 'Anaplan',
            isCorrect: true
          },
          {
            text: 'CAPEX 360',
            isCorrect: false
          },
          {
            text: 'MOC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: '¿Para qué sirven las iniciativas de Champions?',
        options: [
          {
            text: 'Para hacer más eficiente el presupuesto y darle la oportunidad a más proyectos de ser ejecutados anualmente. ',
            isCorrect: true
          },
          {
            text: 'Para disminuir el presupuesto de los proyectos.',
            isCorrect: false
          },
          {
            text: 'Para construir históricos sobre los ahorros obtenidos en todas las BU´s.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿En qué momento del año se inicia la identificación de necesidades de los proyectos para los próximos 3 años?',
        options: [
          {
            text: 'Primer trimestre del año',
            isCorrect: false
          },
          {
            text: 'Noviembre',
            isCorrect: false
          },
          {
            text: 'Septiembre y octubre',
            isCorrect: false
          },
          {
            text: 'Primer semestre del año',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el ciclo de Champions?',
        options: [
          {
            text: 'Es el journey que se tiene en ABI para establecer y aprobar los proyectos e iniciativas como champions dentro de cada BU.',
            isCorrect: true
          },
          {
            text: 'Es el proceso que se sigue en ABI para la aprobación del presupuesto de un proyecto.',
            isCorrect: false
          },
          {
            text: 'Es el proceso que se lleva a cabo para validar los ahorros dentro de un proyecto.',
            isCorrect: false
          },
          {
            text: 'Es el proceso que se sigue en ABI para verificar que los ahorros obtenidos coincidan con los presupuestados inicialmente en el proyecto.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label: '¿Qué es el 3YP?',
        options: [
          {
            text: 'El Three Year Plan es el momento en el que se priorizan los proyectos más importantes para el año siguiente.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que se comunica a cada zona el presupuesto asignado para la realización de los proyectos del 1YP.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que sube el listado de proyectos a GCT en Anaplan.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que se definen los proyectos que será necesario realizar durante los siguientes 3 años.',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'champions_eng_final',
    page: 'champions_eng_final',
    external: 'champions_eng_final',
    steps: 11,
    title: 'PRUEBA - Curso Champions',
    description:
      'Aprendiz selecciona las respuestas correctas del siguiente test y valida tu conocimiento del Curso Champions: Eng & CAPEX . A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es Champions?',
        options: [
          {
            text: 'Son todos los ahorros que se generan a nivel de ingeniería.',
            isCorrect: false
          },
          {
            text: 'Son todas las iniciativas de ahorro que se generan durante el primer trimestre del año.',
            isCorrect: false
          },
          {
            text: 'Son todos los proyectos que se desarrollan para cumplir con el presupuesto asignado.',
            isCorrect: false
          },
          {
            text: 'Son todas las iniciativas de ahorro que nos ayudan a hacer más eficiente nuestro presupuesto.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Al crear estas iniciativas también se crea la opción de ___________ las eficiencias en necesidades futuras de los proyectos',
        options: [
          {
            text: 'Duplicar',
            isCorrect: false
          },
          {
            text: 'Reinvertir',
            isCorrect: true
          },
          {
            text: 'Cambiar',
            isCorrect: false
          },
          {
            text: 'Gastar',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          '¿A qué clasificación corresponden las iniciativas dentro de la ingeniería del proyecto?',
        options: [
          {
            text: 'Taxes',
            isCorrect: false
          },
          {
            text: 'Performance',
            isCorrect: true
          },
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label: '¿Qué son las iniciativas por precio?',
        options: [
          {
            text: 'Son todas aquellas desarrolladas dentro de la ingeniería del proyecto.',
            isCorrect: false
          },
          {
            text: 'Son aquellas que permiten obtener mejores precios con los proveedores.',
            isCorrect: true
          },
          {
            text: 'Son iniciativas que permiten disminuir el gasto de impuestos a través de iniciativas gubernamentales.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Las iniciativas de __________ son aquellas que permiten disminuir el gasto en impuestos a través de iniciativas gubernamentales.',
        options: [
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Performance',
            isCorrect: false
          },
          {
            text: 'Taxes',
            isCorrect: true
          },
          {
            text: 'Ninguna de las anteriores',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '__________ es la plataforma en la nube que nos permite documentar nuestros logros y avances en Champions.',
        options: [
          {
            text: 'RIA',
            isCorrect: false
          },
          {
            text: 'Anaplan',
            isCorrect: true
          },
          {
            text: 'CAPEX 360',
            isCorrect: false
          },
          {
            text: 'MOC',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label: '¿Para qué sirven las iniciativas de Champions?',
        options: [
          {
            text: 'Para hacer más eficiente el presupuesto y darle la oportunidad a más proyectos de ser ejecutados anualmente. ',
            isCorrect: true
          },
          {
            text: 'Para disminuir el presupuesto de los proyectos.',
            isCorrect: false
          },
          {
            text: 'Para construir históricos sobre los ahorros obtenidos en todas las BU´s.',
            isCorrect: false
          },
          {
            text: 'Ninguna de las anteriores.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿En qué momento del año se inicia la identificación de necesidades de los proyectos para los próximos 3 años?',
        options: [
          {
            text: 'Primer trimestre del año',
            isCorrect: false
          },
          {
            text: 'Noviembre',
            isCorrect: false
          },
          {
            text: 'Septiembre y octubre',
            isCorrect: false
          },
          {
            text: 'Primer semestre del año',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el ciclo de Champions?',
        options: [
          {
            text: 'Es el journey que se tiene en ABI para establecer y aprobar los proyectos e iniciativas como champions dentro de cada BU.',
            isCorrect: true
          },
          {
            text: 'Es el proceso que se sigue en ABI para la aprobación del presupuesto de un proyecto.',
            isCorrect: false
          },
          {
            text: 'Es el proceso que se lleva a cabo para validar los ahorros dentro de un proyecto.',
            isCorrect: false
          },
          {
            text: 'Es el proceso que se sigue en ABI para verificar que los ahorros obtenidos coincidan con los presupuestados inicialmente en el proyecto.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label: '¿Qué es el 3YP?',
        options: [
          {
            text: 'El Three Year Plan es el momento en el que se priorizan los proyectos más importantes para el año siguiente.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que se comunica a cada zona el presupuesto asignado para la realización de los proyectos del 1YP.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que sube el listado de proyectos a GCT en Anaplan.',
            isCorrect: false
          },
          {
            text: 'El Three Year Plan es el momento en el que se definen los proyectos que será necesario realizar durante los siguientes 3 años.',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'leasing_initial',
    page: 'leasing_initial',
    external: 'leasing_initial',
    steps: 11,
    title: 'PRUEBA - Curso Leasing',
    description:
      '¡Aprendiz es hora de retar tu conocimiento! \n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es un Leasing?',
        options: [
          {
            text: 'Es el pago que se realiza por el bien o servicio adquirido por la empresa.',
            isCorrect: false
          },
          {
            text: 'Es un contrato en el cual participan dos partes: un arrendador y un arrendatario.',
            isCorrect: true
          },
          {
            text: 'Es un acuerdo en el que ABI cede la propiedad de un activo.',
            isCorrect: false
          },
          {
            text: 'Es un contrato en el cual participan dos partes: arrendador y comprador.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿En qué modalidad de contrato se debe entregar el bien una vez finalizado el tiempo establecido?',
        options: [
          {
            text: 'Leasing',
            isCorrect: false
          },
          {
            text: 'Póliza de crédito',
            isCorrect: false
          },
          {
            text: 'Renting',
            isCorrect: true
          },
          {
            text: 'Factoring',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál no es una ventaja del Leasing?',
        options: [
          {
            text: 'Al finalizar el Leasing se podrá tener una opción de compra de acuerdo a lo establecido con el arrendatario.',
            isCorrect: false
          },
          {
            text: 'Permite  adquirir activos clave para la operación en tiempos determinados y de acuerdo a características específicas.',
            isCorrect: false
          },
          {
            text: 'Liberar capital y obtener liquidez de manera casi inmediata.',
            isCorrect: true
          },
          {
            text: 'Los contratos son supervisados por entidades especializadas, por lo que disminuyen los riesgos.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el indicador o tasa de oportunidad que se utiliza para descontar los flujos de caja futuros a la hora de valorar un proyecto de inversión?',
        options: [
          {
            text: 'WACC',
            isCorrect: true
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'Payback ',
            isCorrect: false
          },
          {
            text: 'Breakeven ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿Qué es el NPV?',
        options: [
          {
            text: 'Son los valores que representan la salida de efectivo por año de la inversión.',
            isCorrect: false
          },
          {
            text: 'Es el valor de los flujos futuros de la inversiones traídos a valor presente neto mediante una tasa de descuento.',
            isCorrect: true
          },
          {
            text: 'Es el valor que representa la salida de efectivo por año de la inversión realizada.',
            isCorrect: false
          },
          {
            text: 'Es un tipo de tasa de  interés anual fijada por la arrendadora o institución financiera.s',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿En qué etapa del proceso de solicitud de un Leasing se identifican las necesidades de cada BU y se presentan como solicitudes formales al equipo de zona?',
        options: [
          {
            text: 'Negociación',
            isCorrect: false
          },
          {
            text: 'Aprobación ',
            isCorrect: false
          },
          {
            text: 'Pre-aprobación',
            isCorrect: true
          },
          {
            text: 'Justificación y viabilidad del Leasing',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'En la etapa de aprobación de tu BC, ¿quién dará la aprobación final de tu estrategia?',
        options: [
          {
            text: 'Los VP de Finanzas',
            isCorrect: false
          },
          {
            text: 'Equipo de Zona.',
            isCorrect: false
          },
          {
            text: 'PPM y equipo operativo.',
            isCorrect: false
          },
          {
            text: 'Los VP´s: Logística, Procurement y Finanzas; en caso de aplicar, el equipo global.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿De qué equipo dependerá la aprobación de los casos de negocio para los países de la zona de CAC?',
        options: [
          {
            text: 'Equipo de la BU',
            isCorrect: false
          },
          {
            text: 'Equipo de zona',
            isCorrect: false
          },
          {
            text: 'AMBEV',
            isCorrect: true
          },
          {
            text: 'Equipo global',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el BC?',
        options: [
          {
            text: 'Es el documento en el que se expone toda la información relevante para solicitar el Leasing de un bien o inmueble.',
            isCorrect: true
          },
          {
            text: 'Es el documento en Excel en el que se expone toda la información financiera de una estrategia.',
            isCorrect: false
          },
          {
            text: 'Es el documento en el que se establecen las responsabilidades entre arrendador y arrendatario',
            isCorrect: false
          },
          {
            text: 'Es el documento en el que se expone la información operativa del Leasing.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones corresponde a uno de los componentes del Business Case?',
        options: [
          {
            text: 'Summary',
            isCorrect: false
          },
          {
            text: 'Escenarios Financieros',
            isCorrect: false
          },
          {
            text: 'Cash Flow',
            isCorrect: false
          },
          {
            text: 'One Pager',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'leasing_final',
    page: 'leasing_final',
    external: 'leasing_final',
    steps: 11,
    title: 'PRUEBA - Curso Leasing',
    description:
      '¡Aprendiz es hora de retar tu conocimiento! \n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es un Leasing?',
        options: [
          {
            text: 'Es el pago que se realiza por el bien o servicio adquirido por la empresa.',
            isCorrect: false
          },
          {
            text: 'Es un contrato en el cual participan dos partes: un arrendador y un arrendatario.',
            isCorrect: true
          },
          {
            text: 'Es un acuerdo en el que ABI cede la propiedad de un activo.',
            isCorrect: false
          },
          {
            text: 'Es un contrato en el cual participan dos partes: arrendador y comprador.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          '¿En qué modalidad de contrato se debe entregar el bien una vez finalizado el tiempo establecido?',
        options: [
          {
            text: 'Leasing',
            isCorrect: false
          },
          {
            text: 'Póliza de crédito',
            isCorrect: false
          },
          {
            text: 'Renting',
            isCorrect: true
          },
          {
            text: 'Factoring',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: '¿Cuál no es una ventaja del Leasing?',
        options: [
          {
            text: 'Al finalizar el Leasing se podrá tener una opción de compra de acuerdo a lo establecido con el arrendatario.',
            isCorrect: false
          },
          {
            text: 'Permite  adquirir activos clave para la operación en tiempos determinados y de acuerdo a características específicas.',
            isCorrect: false
          },
          {
            text: 'Liberar capital y obtener liquidez de manera casi inmediata.',
            isCorrect: true
          },
          {
            text: 'Los contratos son supervisados por entidades especializadas, por lo que disminuyen los riesgos.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          '¿Cuál es el indicador o tasa de oportunidad que se utiliza para descontar los flujos de caja futuros a la hora de valorar un proyecto de inversión?',
        options: [
          {
            text: 'WACC',
            isCorrect: true
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'Payback ',
            isCorrect: false
          },
          {
            text: 'Breakeven ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label: '¿Qué es el NPV?',
        options: [
          {
            text: 'Son los valores que representan la salida de efectivo por año de la inversión.',
            isCorrect: false
          },
          {
            text: 'Es el valor de los flujos futuros de la inversiones traídos a valor presente neto mediante una tasa de descuento.',
            isCorrect: true
          },
          {
            text: 'Es el valor que representa la salida de efectivo por año de la inversión realizada.',
            isCorrect: false
          },
          {
            text: 'Es un tipo de tasa de  interés anual fijada por la arrendadora o institución financiera.s',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          '¿En qué etapa del proceso de solicitud de un Leasing se identifican las necesidades de cada BU y se presentan como solicitudes formales al equipo de zona?',
        options: [
          {
            text: 'Negociación',
            isCorrect: false
          },
          {
            text: 'Aprobación ',
            isCorrect: false
          },
          {
            text: 'Pre-aprobación',
            isCorrect: true
          },
          {
            text: 'Justificación y viabilidad del Leasing',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'En la etapa de aprobación de tu BC, ¿quién dará la aprobación final de tu estrategia?',
        options: [
          {
            text: 'Los VP de Finanzas',
            isCorrect: false
          },
          {
            text: 'Equipo de Zona.',
            isCorrect: false
          },
          {
            text: 'PPM y equipo operativo.',
            isCorrect: false
          },
          {
            text: 'Los VP´s: Logística, Procurement y Finanzas; en caso de aplicar, el equipo global.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          '¿De qué equipo dependerá la aprobación de los casos de negocio para los países de la zona de CAC?',
        options: [
          {
            text: 'Equipo de la BU',
            isCorrect: false
          },
          {
            text: 'Equipo de zona',
            isCorrect: false
          },
          {
            text: 'AMBEV',
            isCorrect: true
          },
          {
            text: 'Equipo global',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el BC?',
        options: [
          {
            text: 'Es el documento en el que se expone toda la información relevante para solicitar el Leasing de un bien o inmueble.',
            isCorrect: true
          },
          {
            text: 'Es el documento en Excel en el que se expone toda la información financiera de una estrategia.',
            isCorrect: false
          },
          {
            text: 'Es el documento en el que se establecen las responsabilidades entre arrendador y arrendatario',
            isCorrect: false
          },
          {
            text: 'Es el documento en el que se expone la información operativa del Leasing.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de las siguientes opciones corresponde a uno de los componentes del Business Case?',
        options: [
          {
            text: 'Summary',
            isCorrect: false
          },
          {
            text: 'Escenarios Financieros',
            isCorrect: false
          },
          {
            text: 'Cash Flow',
            isCorrect: false
          },
          {
            text: 'One Pager',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    category: 'postmortem_initial',
    page: 'postmortem_initial',
    external: 'postmortem_initial',
    steps: 11,
    title: 'PRUEBA - Curso  Postmortem: Paso a Paso',
    description:
      '¡Aprendiz es hora de retar tu conocimiento! \n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es el Postmortem? ',
        options: [
          {
            text: 'Son todas las iniciativas de ahorro que se generan durante el primer trimestre del año.',
            isCorrect: false
          },
          {
            text: 'El análisis basado en datos históricos que realizamos una vez finalizado un proyecto.',
            isCorrect: true
          },
          {
            text: 'La proyección de los gastos durante el tiempo de ejecución del proyecto.',
            isCorrect: false
          },
          {
            text: 'Listado de aprobadores, aprobador pendiente, monto aprobado, documentación cargada.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El Postmortem se puede realizar cuando el proyecto se encuentra en un ____ de ejecución y ya se encuentre reportando beneficios.\n    ',
        options: [
          {
            text: '95%',
            isCorrect: true
          },
          {
            text: '80%',
            isCorrect: false
          },
          {
            text: '70%',
            isCorrect: false
          },
          {
            text: '50%',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: ' ¿Para qué paquetes aplica el Postmortem? ',
        options: [
          {
            text: 'Others y Capacidad',
            isCorrect: false
          },
          {
            text: 'Viability y Costo',
            isCorrect: false
          },
          {
            text: 'Costo y Capacidad',
            isCorrect: true
          },
          {
            text: 'Utilities y Consumer',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El Postmortem nos permite hacer una ___________________ entre los beneficios proyectados en la documentación de aprobación de un proyecto, contra los beneficios reales.',
        options: [
          {
            text: 'Capitalización',
            isCorrect: false
          },
          {
            text: 'Comparación',
            isCorrect: true
          },
          {
            text: 'Evaluación',
            isCorrect: false
          },
          {
            text: 'Definición  ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Quienes son los responsables de llevar a cabo las Lecciones Aprendidas del Proceso? ',
        options: [
          {
            text: 'PPM, Líder de proyecto y Finanzas',
            isCorrect: false
          },
          {
            text: 'Líder de Proyecto, PMO, PPM Capex.',
            isCorrect: false
          },
          {
            text: 'Lider de proyecto y PPM.',
            isCorrect: false
          },
          {
            text: 'BEE Regional y Líder de Proyecto.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El ________ como responsable y ___________ de las regionales son los que proveen información para el proceso del PostMortem.',
        options: [
          {
            text: 'PPM y Finanzas',
            isCorrect: false
          },
          {
            text: 'PMO y Líder de proyecto ',
            isCorrect: false
          },
          {
            text: 'PMO y Finanzas',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto y PPM',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Dentro del proceso, ¿quiénes son los responsables de rastrear el análisis de Postmortem? ',
        options: [
          {
            text: 'PMO, Global, PPM Finanzas y Dirección.',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto, Especialistas, Planta, PPM CAPEX y PMO.',
            isCorrect: true
          },
          {
            text: 'Especialistas, Finanzas de las regionales, Líder de proyecto y PPM.',
            isCorrect: false
          },
          {
            text: 'PPM Finanzas, Global, Especialistas, Planta y PMO.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          ' Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El ____________  nos ayuda a calcular a Valor Presente los recursos (CAPEX) que una inversión generará en un futuro.',
        options: [
          {
            text: 'Payback',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          },
          {
            text: 'Costo de Capital',
            isCorrect: false
          },
          {
            text: 'NPV',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el Payback?',
        options: [
          {
            text: 'Es el tiempo en que la compañía recuperará la inversión, a una tasa interna del Costo de Capital de la compañía (WACC).',
            isCorrect: true
          },
          {
            text: 'Es la media geométrica de los flujos futuros que generará la inversión.',
            isCorrect: false
          },
          {
            text: 'Son los costos de producción de los productos terminados vendibles de la compañía.',
            isCorrect: false
          },
          {
            text: 'Es un indicador clave que permite medir el desempeño de un conjunto de actividades. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de los siguientes Key metric assumptions es el resultado de restar los Costos Variables (VILC) del Ingreso Neto (Net Revenue) de la compañía?',
        options: [
          {
            text: 'VIC',
            isCorrect: false
          },
          {
            text: 'MACO',
            isCorrect: true
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'postmortem_final',
    page: 'postmortem_final',
    external: 'postmortem_final',
    steps: 11,
    title: 'PRUEBA - Curso  Postmortem: Paso a Paso',
    description:
      '¡Aprendiz es hora de retar tu conocimiento! \n    A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label: ' ¿Qué es el Postmortem? ',
        options: [
          {
            text: 'Son todas las iniciativas de ahorro que se generan durante el primer trimestre del año.',
            isCorrect: false
          },
          {
            text: 'El análisis basado en datos históricos que realizamos una vez finalizado un proyecto.',
            isCorrect: true
          },
          {
            text: 'La proyección de los gastos durante el tiempo de ejecución del proyecto.',
            isCorrect: false
          },
          {
            text: 'Listado de aprobadores, aprobador pendiente, monto aprobado, documentación cargada.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El Postmortem se puede realizar cuando el proyecto se encuentra en un ____ de ejecución y ya se encuentre reportando beneficios.\n    ',
        options: [
          {
            text: '95%',
            isCorrect: true
          },
          {
            text: '80%',
            isCorrect: false
          },
          {
            text: '70%',
            isCorrect: false
          },
          {
            text: '50%',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label: ' ¿Para qué paquetes aplica el Postmortem? ',
        options: [
          {
            text: 'Others y Capacidad',
            isCorrect: false
          },
          {
            text: 'Viability y Costo',
            isCorrect: false
          },
          {
            text: 'Costo y Capacidad',
            isCorrect: true
          },
          {
            text: 'Utilities y Consumer',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El Postmortem nos permite hacer una ___________________ entre los beneficios proyectados en la documentación de aprobación de un proyecto, contra los beneficios reales.',
        options: [
          {
            text: 'Capitalización',
            isCorrect: false
          },
          {
            text: 'Comparación',
            isCorrect: true
          },
          {
            text: 'Evaluación',
            isCorrect: false
          },
          {
            text: 'Definición  ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          '¿Quienes son los responsables de llevar a cabo las Lecciones Aprendidas del Proceso? ',
        options: [
          {
            text: 'PPM, Líder de proyecto y Finanzas',
            isCorrect: false
          },
          {
            text: 'Líder de Proyecto, PMO, PPM Capex.',
            isCorrect: false
          },
          {
            text: 'Lider de proyecto y PPM.',
            isCorrect: false
          },
          {
            text: 'BEE Regional y Líder de Proyecto.',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El ________ como responsable y ___________ de las regionales son los que proveen información para el proceso del PostMortem.',
        options: [
          {
            text: 'PPM y Finanzas',
            isCorrect: false
          },
          {
            text: 'PMO y Líder de proyecto ',
            isCorrect: false
          },
          {
            text: 'PMO y Finanzas',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto y PPM',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'Dentro del proceso, ¿quiénes son los responsables de rastrear el análisis de Postmortem? ',
        options: [
          {
            text: 'PMO, Global, PPM Finanzas y Dirección.',
            isCorrect: false
          },
          {
            text: 'Líder de proyecto, Especialistas, Planta, PPM CAPEX y PMO.',
            isCorrect: true
          },
          {
            text: 'Especialistas, Finanzas de las regionales, Líder de proyecto y PPM.',
            isCorrect: false
          },
          {
            text: 'PPM Finanzas, Global, Especialistas, Planta y PMO.',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          ' Lee el enunciado y complétalo seleccionando la respuesta correcta: \n    El ____________  nos ayuda a calcular a Valor Presente los recursos (CAPEX) que una inversión generará en un futuro.',
        options: [
          {
            text: 'Payback',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          },
          {
            text: 'Costo de Capital',
            isCorrect: false
          },
          {
            text: 'NPV',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label: '¿Qué es el Payback?',
        options: [
          {
            text: 'Es el tiempo en que la compañía recuperará la inversión, a una tasa interna del Costo de Capital de la compañía (WACC).',
            isCorrect: true
          },
          {
            text: 'Es la media geométrica de los flujos futuros que generará la inversión.',
            isCorrect: false
          },
          {
            text: 'Son los costos de producción de los productos terminados vendibles de la compañía.',
            isCorrect: false
          },
          {
            text: 'Es un indicador clave que permite medir el desempeño de un conjunto de actividades. ',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_10',
        type: QuestionType.Radio,
        label:
          '¿Cuál de los siguientes Key metric assumptions es el resultado de restar los Costos Variables (VILC) del Ingreso Neto (Net Revenue) de la compañía?',
        options: [
          {
            text: 'VIC',
            isCorrect: false
          },
          {
            text: 'MACO',
            isCorrect: true
          },
          {
            text: 'NPV',
            isCorrect: false
          },
          {
            text: 'IRR',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vclcost_initial',
    page: 'vclcost_initial',
    external: 'vclcost_initial',
    steps: 11,
    title: 'PRUEBA - Curso  VLC PPM',
    description:
      '<p>¡Aprendiz es hora de retar tu conocimiento! <br> A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.</p>',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿En qué paquete  de costos se incluyen los gastos por contratación de mano de obra tercerizada del almacén como montacarguistas?',
        options: [
          {
            text: 'People',
            isCorrect: false
          },
          {
            text: 'Warehouse',
            isCorrect: false
          },
          {
            text: 'Transport',
            isCorrect: false
          },
          {
            text: 'Logistic Support',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Los ___________ de VLC nos permiten determinar impactos y ahorros en performance. Además, son una medida de referencia para entender la optimización de la operación logística.',
        options: [
          {
            text: 'Indicadores',
            isCorrect: true
          },
          {
            text: 'Hectolitros',
            isCorrect: false
          },
          {
            text: 'Costos',
            isCorrect: false
          },
          {
            text: 'Paquetes',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Las iniciativas de ahorro que se crean en ABI para optimizar el presupuesto con mejores precios o procesos se conocen como:',
        options: [
          {
            text: 'Reestructuración',
            isCorrect: false
          },
          {
            text: 'VOptimización',
            isCorrect: false
          },
          {
            text: 'Ahorro',
            isCorrect: false
          },
          {
            text: 'Champions',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Uno de los datos principales para calcular el costo de acuerdo con las responsabilidades como importador es tener claro el __________ con el que se ha negociado el producto.',
        options: [
          {
            text: 'Costo fijo',
            isCorrect: false
          },
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Contrato',
            isCorrect: false
          },
          {
            text: 'Incoterm',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Una de las variables que inciden en el cálculo del costo y se puede optimizar a través de las negociaciones con proveedores es:',
        options: [
          {
            text: 'Price',
            isCorrect: true
          },
          {
            text: 'Performance',
            isCorrect: false
          },
          {
            text: 'Negotiation',
            isCorrect: false
          },
          {
            text: 'Procurement',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Los ___________ son aquellos costos que se dan por situaciones o contingencias que suceden una vez, pero afectan el VLC.',
        options: [
          {
            text: 'Costos variable',
            isCorrect: false
          },
          {
            text: 'One off',
            isCorrect: true
          },
          {
            text: 'Others',
            isCorrect: false
          },
          {
            text: 'Contingencias',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'El efecto volumen y el efecto mix son variaciones que crean impactos o ahorros en los presupuestos. A esto se le conoce como ____________.',
        options: [
          {
            text: 'Budget Variation',
            isCorrect: false
          },
          {
            text: 'Flex price',
            isCorrect: false
          },
          {
            text: 'Real',
            isCorrect: false
          },
          {
            text: 'Flex budget',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Para comprender el efecto MIX se realiza el cálculo de diferentes dimensiones. ¿Cuál de las siguientes opciones no corresponde a estas dimensiones?',
        options: [
          {
            text: 'Canal',
            isCorrect: false
          },
          {
            text: 'SKU',
            isCorrect: false
          },
          {
            text: 'Región',
            isCorrect: false
          },
          {
            text: 'Zona',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los inputs necesarios para calcular el efecto  MIX?',
        options: [
          {
            text: 'Cuotas y volumen',
            isCorrect: true
          },
          {
            text: 'Volumen y hectolitros',
            isCorrect: false
          },
          {
            text: 'Envases y cantidad',
            isCorrect: false
          },
          {
            text: 'Envases y costos',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'En AB InBev usamos este efecto para conocer el impacto de VLC en términos de volumen a nivel de DC, planta, región e incluso país.',
        options: [
          {
            text: 'Efecto volumen',
            isCorrect: true
          },
          {
            text: 'Efecto mix',
            isCorrect: false
          },
          {
            text: 'Efecto price',
            isCorrect: false
          },
          {
            text: 'Efecto performance',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    category: 'vclcost_final',
    page: 'vclcost_final',
    external: 'vclcost_final',
    steps: 11,
    title: 'PRUEBA - Curso  VLC PPM',
    description:
      '<p>¡Aprendiz es hora de retar tu conocimiento! <br> A continuación, se muestran 10 preguntas de selección múltiple. Recomendamos leer detenidamente cada enunciado y seleccionar la opción que consideres correcta.</p>',
    image:
      'https://contenidospmm.s3.amazonaws.com/recursos/icon-indicadores-monetizacion.png',
    initialMessage:
      'Antes de comenzar este curso, queremos probar tu conocimientos, demuéstranos todo lo que sabes en la siguiente evaluación.',
    questions: [
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          '¿En qué paquete  de costos se incluyen los gastos por contratación de mano de obra tercerizada del almacén como montacarguistas?',
        options: [
          {
            text: 'People',
            isCorrect: false
          },
          {
            text: 'Warehouse',
            isCorrect: false
          },
          {
            text: 'Transport',
            isCorrect: false
          },
          {
            text: 'Logistic Support',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_2',
        type: QuestionType.Radio,
        label:
          'Los ___________ de VLC nos permiten determinar impactos y ahorros en performance. Además, son una medida de referencia para entender la optimización de la operación logística.',
        options: [
          {
            text: 'Indicadores',
            isCorrect: true
          },
          {
            text: 'Hectolitros',
            isCorrect: false
          },
          {
            text: 'Costos',
            isCorrect: false
          },
          {
            text: 'Paquetes',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_3',
        type: QuestionType.Radio,
        label:
          'Las iniciativas de ahorro que se crean en ABI para optimizar el presupuesto con mejores precios o procesos se conocen como:',
        options: [
          {
            text: 'Reestructuración',
            isCorrect: false
          },
          {
            text: 'VOptimización',
            isCorrect: false
          },
          {
            text: 'Ahorro',
            isCorrect: false
          },
          {
            text: 'Champions',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_4',
        type: QuestionType.Radio,
        label:
          'Uno de los datos principales para calcular el costo de acuerdo con las responsabilidades como importador es tener claro el __________ con el que se ha negociado el producto.',
        options: [
          {
            text: 'Costo fijo',
            isCorrect: false
          },
          {
            text: 'Precio',
            isCorrect: false
          },
          {
            text: 'Contrato',
            isCorrect: false
          },
          {
            text: 'Incoterm',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_5',
        type: QuestionType.Radio,
        label:
          'Una de las variables que inciden en el cálculo del costo y se puede optimizar a través de las negociaciones con proveedores es:',
        options: [
          {
            text: 'Price',
            isCorrect: true
          },
          {
            text: 'Performance',
            isCorrect: false
          },
          {
            text: 'Negotiation',
            isCorrect: false
          },
          {
            text: 'Procurement',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_6',
        type: QuestionType.Radio,
        label:
          'Los ___________ son aquellos costos que se dan por situaciones o contingencias que suceden una vez, pero afectan el VLC.',
        options: [
          {
            text: 'Costos variable',
            isCorrect: false
          },
          {
            text: 'One off',
            isCorrect: true
          },
          {
            text: 'Others',
            isCorrect: false
          },
          {
            text: 'Contingencias',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_7',
        type: QuestionType.Radio,
        label:
          'El efecto volumen y el efecto mix son variaciones que crean impactos o ahorros en los presupuestos. A esto se le conoce como ____________.',
        options: [
          {
            text: 'Budget Variation',
            isCorrect: false
          },
          {
            text: 'Flex price',
            isCorrect: false
          },
          {
            text: 'Real',
            isCorrect: false
          },
          {
            text: 'Flex budget',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_8',
        type: QuestionType.Radio,
        label:
          'Para comprender el efecto MIX se realiza el cálculo de diferentes dimensiones. ¿Cuál de las siguientes opciones no corresponde a estas dimensiones?',
        options: [
          {
            text: 'Canal',
            isCorrect: false
          },
          {
            text: 'SKU',
            isCorrect: false
          },
          {
            text: 'Región',
            isCorrect: false
          },
          {
            text: 'Zona',
            isCorrect: true
          }
        ]
      },
      {
        name: 'question_9',
        type: QuestionType.Radio,
        label:
          '¿Cuáles son los inputs necesarios para calcular el efecto  MIX?',
        options: [
          {
            text: 'Cuotas y volumen',
            isCorrect: true
          },
          {
            text: 'Volumen y hectolitros',
            isCorrect: false
          },
          {
            text: 'Envases y cantidad',
            isCorrect: false
          },
          {
            text: 'Envases y costos',
            isCorrect: false
          }
        ]
      },
      {
        name: 'question_1',
        type: QuestionType.Radio,
        label:
          'En AB InBev usamos este efecto para conocer el impacto de VLC en términos de volumen a nivel de DC, planta, región e incluso país.',
        options: [
          {
            text: 'Efecto volumen',
            isCorrect: true
          },
          {
            text: 'Efecto mix',
            isCorrect: false
          },
          {
            text: 'Efecto price',
            isCorrect: false
          },
          {
            text: 'Efecto performance',
            isCorrect: false
          }
        ]
      }
    ]
  }
]
