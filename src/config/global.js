export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Ejecución de proyectos: estrategias y enfoques',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Fundamentos de la ejecución de proyectos según PMBOK, PRINCE2 y metodologías ágiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ejecución de Proyectos según el PMBOK',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ejecución de Proyectos según PRINCE2',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ejecución de proyectos según metodologías ágiles',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Asignación y gestión de recursos: humanos, financieros y tecnológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Enfoque PMBOK',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodologías Ágiles',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estrategias para la gestión del cambio organizacional y liderazgo en proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fundamentos teóricos del cambio organizacional',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El papel del liderazgo en la gestión del cambio',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Identificación, análisis y respuesta a riesgos en la ejecución de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Planificación de la gestión de riesgos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estrategias de mitigación y gestión de contingencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Estrategias de mitigación ',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ollé, C., & Cerezuela, B. (2017). <em>Gestión de proyectos paso a paso</em>. Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58657?page=33',
    },
    {
      referencia:
        'Torres Hernández, Z. (2014). <em>Administración de proyectos</em>. Grupo Editorial Patria.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=118',
    },
    {
      referencia:
        'Malagón Barinas, J. (2019). <em>Modelos, metodologías y sistemas de gestión de proyectos</em>. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/250971?page=9',
    },
    {
      referencia:
        'Torres Hernández, Z. (2014). <em>Administración de proyectos</em>. Grupo Editorial Patria.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=118',
    },
    {
      referencia:
        'Palladino, E. (2014). <em>Administración y gestión de proyectos</em>. Espacio Editorial.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67045?page=160',
    },
    {
      referencia:
        'Grueso Hinestroza, M. P., & Moreno-Monsalve, N. A. (2024). <em>Gestión de proyectos y organizaciones: una mirada desde las tendencias modernas de gestión</em>. Editorial Universidad EAN.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/274731?page=19',
    },
    {
      referencia:
        'Ollé, C., & Cerezuela, B. (2018). <em>Gestión de proyectos paso a paso</em>. Editorial UOC.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/116314?page=43',
    },
    {
      referencia:
        'Torres Hernández, Z. (2014). <em>Administración de proyectos</em>. Grupo Editorial Patria.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=118',
    },
  ],
  glosario: [
    {
      termino: 'Cambio organizacional',
      significado:
        'Proceso mediante el cual una organización adapta sus estructuras, procesos o cultura para responder a factores internos o externos. Puede ser impulsado por la innovación, nuevas tecnologías, reestructuraciones o cambios en el mercado.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'Intercambio claro y comprensible de información entre los miembros del proyecto y otras partes interesadas. Implica escuchar activamente, transmitir mensajes con claridad y usar los canales adecuados según el contexto.',
    },
    {
      termino: 'Ejecución del proyecto',
      significado:
        'Fase en la que se realizan las actividades planificadas para entregar los productos, servicios o resultados definidos. Incluye la gestión de equipos, recursos y la supervisión del trabajo para asegurar el cumplimiento de los objetivos del proyecto.',
    },
    {
      termino: 'Gestión de recursos',
      significado:
        'Proceso de planificación, asignación y control de los recursos necesarios (humanos, financieros, tecnológicos y materiales) para alcanzar los objetivos del proyecto de manera eficiente.',
    },
    {
      termino: 'Gestión de stakeholders',
      significado:
        'Identificación, análisis y manejo de las expectativas, necesidades e intereses de las personas o grupos que pueden influir o ser afectados por el proyecto. Es esencial para mantener relaciones positivas y asegurar la aceptación de los resultados.',
    },
    {
      termino: 'Liderazgo en proyectos',
      significado:
        'Capacidad del director del proyecto o líderes de equipo para guiar, motivar e influenciar a los miembros del equipo para alcanzar los objetivos. Involucra la toma de decisiones, el manejo de conflictos y la creación de un ambiente colaborativo.',
    },
    {
      termino: 'Metodología ágil',
      significado:
        'Enfoque de gestión de proyectos que promueve la flexibilidad, la colaboración y la entrega incremental de valor. Se adapta fácilmente a los cambios y es común en entornos tecnológicos o de desarrollo de software.',
    },
    {
      termino: 'PMBOK (Project Management Body of Knowledge)',
      significado:
        'Guía desarrollada por el PMI (Project Management Institute) que reúne buenas prácticas en la dirección de proyectos. Incluye áreas de conocimiento como alcance, tiempo, costo, calidad, recursos, comunicación y riesgos.',
    },
    {
      termino: 'PRINCE2 (Projects IN Controlled Environments)',
      significado:
        'Metodología estructurada de gestión de proyectos de origen británico, basada en principios, temas y procesos definidos. Enfatiza la organización, el control por etapas y la justificación continua del negocio.',
    },
    {
      termino: 'Recursos tecnológicos',
      significado:
        'Conjunto de herramientas, sistemas y plataformas digitales utilizadas para apoyar la ejecución del proyecto. Incluyen software de gestión, plataformas de comunicación y herramientas de colaboración.',
    },
  ],
}
