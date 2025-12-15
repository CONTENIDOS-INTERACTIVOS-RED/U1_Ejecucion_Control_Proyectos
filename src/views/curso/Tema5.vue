<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Estrategias de mitigación y gestión de contingencias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La creciente complejidad de los entornos organizacionales y la incertidumbre en los contextos económicos, políticos, tecnológicos y ambientales exigen a las organizaciones contar con mecanismos sólidos de gestión del riesgo. En este escenario, las estrategias de mitigación y la gestión de contingencias se convierten en pilares fundamentales para salvaguardar los objetivos estratégicos y operacionales, especialmente en proyectos de alta criticidad o impacto social.
        p(data-aos="fade-left") La mitigación busca actuar de manera preventiva sobre los factores de riesgo, mientras que la contingencia proporciona una respuesta estructurada cuando el evento adverso se concreta. Ambas estrategias deben diseñarse bajo un enfoque sistémico, integradas en la planificación estratégica y operativa, y alineadas con normas internacionales como ISO 31000 o el PMBOK. Los conceptos clave de gestión del riesgo son: 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-7
              h5 Mitigación del riesgo
              p Estrategia de respuesta que implica acciones proactivas y preventivas para reducir la probabilidad de ocurrencia de un riesgo o su impacto negativo. Interviene sobre las causas raíz mediante cambios estructurales, procedimentales o tecnológicos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-7
              h5 Plan de contingencia
              p Documento formal que define medidas alternativas ante un evento adverso previamente identificado. Incluye roles, recursos, cronogramas y rutas de comunicación para una reacción rápida y eficiente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7
              h5 Gestión de contingencias
              p Conjunto de actividades orientadas a la preparación, respuesta, recuperación y aprendizaje frente a situaciones críticas. Incluye la identificación de riesgos de alta incertidumbre, ejecución de simulacros y mejora continua del plan de respuesta..
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-7
              h5 Estrategia de respuesta al riesgo
              p Enfoque táctico que adopta la organización para tratar un riesgo específico. Las estrategias comunes son: evitar, transferir, mitigar o aceptar el riesgo, según un análisis costo-beneficio.
    
    h2(data-aos="fade-left") Integración en la gestión organizacional
    p.mb-5 Las estrategias de mitigación y contingencia se sustentan en metodologías de administración de riesgos como:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 1
              p.mb-0 PMBOK® (Guía de Gestión de Proyectos del PMI)

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 2
              p.mb-0 ISO 31000:2018 (Gestión del riesgo)
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 3
              p.mb-0 ISO 22301:2019 (Continuidad del negocio)
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Estas metodologías estructuran el tratamiento del riesgo en fases: Identificación → Análisis → Evaluación → Tratamiento → Monitoreo → Revisión.
    
    .bg-full-width.bg-color-4.mb-5
      .p-4.py-lg-0.px-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 La mitigación busca alterar el comportamiento del sistema para reducir vulnerabilidades.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 La contingencia asume que algunos riesgos se materializarán, por lo que requiere un plan de respuesta eficaz.
                p En conjunto, ambos enfoques responden al principio de que la prevención por sí sola no es suficiente. Es necesario acompañarla de una capacidad de respuesta bien estructurada, que promueva la toma de decisiones informada, el uso racional de recursos y la mejora continua mediante la retroalimentación posterior a los eventos.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema5/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    


    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Estrategias de mitigación 
    
    p.mb-5 Las estrategias de mitigación son acciones preventivas diseñadas para reducir la probabilidad de ocurrencia o el impacto de riesgos identificados mediante ajustes en procesos, tecnologías, estructuras u operaciones, con el propósito de minimizar daños antes de que sucedan. A continuación, se presentan las principales estrategias junto con sus ejemplos prácticos:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Reconfiguración del diseño o procesos")
            p Consiste en modificar el diseño de un producto, servicio, infraestructura o proceso para eliminar o reducir factores de riesgo. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: En una edificación ubicada en zona inundable, se eleva la construcción por encima del nivel histórico de inundación y se redirige el drenaje pluvial. Esto reduce significativamente el riesgo de daño estructural, aunque implica un alto costo inicial.
          .div(titulo="Mejora de controles internos")
            p Implica implementar o fortalecer procedimientos, políticas y supervisión para prevenir errores, fraudes o fallas operativas. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: En una empresa financiera, se implementa un sistema de doble validación para transacciones electrónicas de alto valor y software de auditoría continua, reduciendo riesgos de fraude o errores.
          .div(titulo="Capacitación y desarrollo de competencias")
            p Busca incrementar la preparación técnica y de respuesta del personal para disminuir errores humanos y fortalecer la prevención. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: En una clínica, capacitar al personal en protocolos para brotes epidemiológicos reduce la propagación y mejora la atención. En plantas industriales, la formación en manejo seguro de maquinaria previene accidentes.
          .div(titulo="Diversificación")
            p Consiste en reducir la dependencia de una única fuente, proveedor, tecnología o cliente, distribuyendo el riesgo para evitar que una falla afecte todo el sistema. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Una empresa importadora diversifica sus proveedores para disminuir la vulnerabilidad ante riesgos geopolíticos o logísticos. En finanzas, se aplica al portafolio de inversiones para reducir el riesgo total.
          .div(titulo="Uso de tecnología preventiva")
            p Se basa en incorporar herramientas tecnológicas para anticipar, detectar o prevenir riesgos, como sensores, sistemas predictivos e inteligencia artificial.  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: En minería, drones y sensores geotécnicos monitorean la estabilidad de taludes para prevenir deslizamientos. En banca, algoritmos de machine learning detectan fraudes en tiempo real.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="file:///E:/Documentos04012024/Downloads/Dialnet-MetolodologiaParaLaMejoraDeLosProcesosDelSistemaDe-4786614%20(1).pdf " target="_blank" rel="noopener noreferrer") Cuesta Viltres, M. M., & Isaac Godínez, C. L. (2008). Metodología para la mejora de los procesos del sistema de gestión de la calidad de la gerencia de proyectos de ETECSA. Ingeniería Industrial, 29(3). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Plan_de_contingencias " target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Plan de contingencias. En Wikipedia, la enciclopedia libre. 





            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/hB0DqjMqwqU?si=oZeBdVm37O4eBuer " target="_blank" rel="noopener noreferrer") Gestión de Riesgos (2021, 22 de julio) Gestión de Riesgos [Video]. YouTube 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es una práctica necesaria en la ejecución de proyectos según el enfoque PRINCE2?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Definir únicamente los entregables iniciales del proyecto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Gestionar por etapas el ciclo de vida del proyecto ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Asignar tareas de forma informal y flexible',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Ejecutar el proyecto sin necesidad de roles establecidos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué aspecto fundamental se contempla en la asignación de recursos en metodologías ágiles?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Priorizar tareas administrativas sobre el trabajo del equipo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Asignar recursos según estructuras jerárquicas tradicionales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Promover la autoorganización del equipo para la asignación de tareas ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Distribuir los recursos financieros de forma fija al inicio del proyecto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es un principio esencial del liderazgo en la gestión del cambio organizacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dirigir el cambio sin consultar al equipo de trabajo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Comunicar los cambios al finalizar su implementación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Minimizar la participación de los stakeholders internos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Motivar al equipo para que se involucre activamente en el proceso ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento destaca el PMBOK para la gestión efectiva de recursos tecnológicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Identificar, adquirir y gestionar los recursos necesarios para el proyecto ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Establecer un cronograma basado únicamente en recursos humanos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Utilizar únicamente herramientas tecnológicas básicas en los proyectos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Depender exclusivamente del área de TI para decisiones tecnológicas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es una acción fundamental en la gestión de stakeholders durante la ejecución del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Informar solo al cliente sobre el avance del proyecto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Analizar las expectativas e influencias de los interesados ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Evitar retroalimentación durante las etapas críticas del proyecto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitar la participación de los interesados en decisiones importantes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
