<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de la ejecución de proyectos según PMBOK, PRINCE2 y metodologías ágiles'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

 
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La Ejecución y Control de Proyectos constituye una de las fases fundamentales del ciclo de vida de la gestión de proyectos. Su propósito principal es llevar a cabo las actividades planificadas, monitorear su avance y asegurar el cumplimiento de los objetivos establecidos en cuanto a tiempo, costo, calidad y alcance.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Ollé y Cerezuela (2017), la ejecución del proyecto implica la implementación efectiva del plan aprobado, mediante la coordinación de personas, recursos y tareas. En esta etapa se asignan responsabilidades, se comunican instrucciones, se adquieren insumos, se gestionan contratos y se desarrollan entregables. El objetivo es transformar los planes en resultados tangibles, a través de una gestión eficiente del equipo de trabajo y de los recursos involucrados.
        p Para garantizar una ejecución eficaz, diferentes metodologías y marcos de referencia han desarrollado principios, buenas prácticas y lineamientos que orientan el trabajo del equipo de proyecto. Entre los enfoques más reconocidos se encuentran el PMBOK (Project Management Body of Knowledge), PRINCE2 (Projects IN Controlled Environments) y las metodologías ágiles (Scrum, Kanban, entre otras). Cada uno responde a distintos tipos de proyectos, contextos organizacionales y niveles de complejidad.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center PMBOK (PMI)
                p.mb-0 Enfoque predictivo. Proporciona un conjunto estructurado de procesos, áreas de conocimiento y herramientas para gestionar proyectos. Requiere planificación detallada.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center PRINCE2
                p.mb-0 Enfoque basado en procesos. Enfatiza la definición clara de roles, responsabilidades y controles en cada etapa. Su estructura promueve la gestión por excepciones.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Metodologías ágiles
                p.mb-0 Enfoque adaptativo. Prioriza la entrega incremental, la colaboración continua con el cliente y la flexibilidad ante el cambio. Útil en entornos dinámicos e innovadores.
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in")
      .col-lg-9
        h2 ¿Qué es una metodología de gestión de proyectos?
        .bg-color-1.borCom.p-4(data-aos="fade-left")
          p(data-aos="fade-left") Una metodología de gestión de proyectos es un conjunto estructurado de principios, procesos, prácticas, técnicas y herramientas que guían las fases de planificación, ejecución, monitoreo, control y cierre de proyectos.
          p.mb-0 El objetivo de estas metodologías es mejorar la eficiencia, calidad y probabilidad de éxito, asegurando que los resultados se logren dentro del tiempo, presupuesto y alcance definidos. Algunas metodologías son más estructuradas y predictivas, como PMBOK y PRINCE2, mientras que otras, como las metodologías ágiles, son más flexibles y adaptativas, adecuándose mejor a contextos de alta incertidumbre y cambios frecuentes.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Ejecución de Proyectos según el PMBOK

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El PMBOK (<em>Project Management Body of Knowledge</em>), desarrollado por el <em>Project Management Institute</em> (PMI), es un estándar reconocido internacionalmente que recopila buenas prácticas para la gestión de proyectos. Es importante destacar que no se trata de una metodología estricta, sino de una guía adaptable a diversos contextos y sectores.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el marco del PMBOK, la fase de ejecución forma parte del Grupo de Procesos de Ejecución, cuyo objetivo es implementar las actividades definidas en el plan del proyecto para alcanzar los entregables planificados. Esta fase requiere una coordinación activa de recursos, equipos, tareas y comunicaciones, con el propósito de asegurar el cumplimiento de los objetivos establecidos.
        p Las actividades clave en la ejecución según PMBOK son:
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Dirigir y gestionar el trabajo del proyecto: Llevar a cabo las tareas planificadas para producir los entregables.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Gestionar la calidad, los recursos y las comunicaciones: Asegurar que se cumplan los estándares, se utilicen eficientemente los recursos y exista una comunicación fluida.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Dirigir al equipo y resolver conflictos: Motivar, coordinar y mantener la cohesión del equipo de trabajo, interviniendo ante problemas.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Gestionar las expectativas y la participación de los interesados (stakeholders): Involucrar activamente a los interesados para mantener su compromiso y satisfacción.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Esta fase se desarrolla en paralelo con el monitoreo y control, lo que permite ajustar el curso del proyecto en tiempo real frente a desviaciones o cambios imprevistos.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Ejecución de Proyectos según PRINCE2
    
    .bg-full-width.bg-color-7
      .px-4.px-md-5 
        p.mb-5 PRINCE2 (<em>Projects IN Controlled Environments</em>) es una metodología estructurada y basada en procesos, ampliamente utilizada en Europa y reconocida internacionalmente. Su enfoque está orientado a mantener el control continuo del proyecto, gestionarlo por etapas claramente definidas y asegurar la entrega de productos con criterios de calidad previamente establecidos. Durante la fase de ejecución, PRINCE2 opera a través de tres procesos fundamentales:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center Control de cada etapa (<em>Controlling a Stage</em>)
              p.mb-0.text-center Asegura que cada fase del proyecto se gestione eficazmente, con seguimiento continuo del progreso.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/11.svg" alt="" style="width: 90px")
              h5.text-center Gestión de la entrega de productos (<em>Managing Product Delivery</em>)
              p.mb-0.text-center Coordina el trabajo técnico necesario para crear los productos del proyecto según los requisitos definidos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center Gestión de los límites de las etapas (<em>Managing Stage Boundaries</em>)
              p.mb-0.text-center Evalúa el rendimiento de una etapa antes de pasar a la siguiente, permitiendo decisiones informadas sobre continuidad o ajuste.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Las actividades durante la ejecución son:
    
        .bg-color-8.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Asignación y gestión de tareas a los equipos responsables.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Supervisión del progreso y verificación del cumplimiento de objetivos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Detección, comunicación y gestión de desviaciones y riesgos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reportes al Project Board, que tiene la autoridad para tomar decisiones clave sobre el proyecto.
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 A diferencia de otros enfoques más centrados en actividades, PRINCE2 pone el énfasis en la entrega de productos con calidad definida. Además, promueve la gestión por excepción, lo que significa que el equipo puede tomar decisiones dentro de ciertos límites sin necesidad de una aprobación constante, reservando la intervención del Project Board para situaciones fuera de lo esperado.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Ejecución de proyectos según metodologías ágiles
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        p.mb-5 Las metodologías ágiles son un conjunto de enfoques iterativos e incrementales para la gestión de proyectos, especialmente útiles en entornos dinámicos y cambiantes, como el desarrollo de software. Entre las más conocidas están Scrum, Kanban y Extreme Programming (XP). En el enfoque ágil, la ejecución no es una fase única, sino que ocurre a lo largo de sprints (ciclos cortos de desarrollo), donde el equipo colabora para entregar funcionalidades concretas del producto final. Durante esta etapa:
      
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.h-100.shadow-app
                    img(src='@/assets/curso/tema1/15.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-3 Se realiza una planificación del sprint.
                  .bg-color-white.h-100.shadow-app
                    img(src='@/assets/curso/tema1/16.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-3 Se desarrollan los entregables prioritarios del backlog.
                  .bg-color-white.h-100.shadow-app
                    img(src='@/assets/curso/tema1/17.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-3 Se llevan a cabo reuniones diarias (Daily Scrum) para seguimiento.
                  .bg-color-white.h-100.shadow-app
                    img(src='@/assets/curso/tema1/18.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-3 Se entrega un incremento funcional del producto.
                  .bg-color-white.h-100.shadow-app
                    img(src='@/assets/curso/tema1/18.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-3 Se evalúa el sprint en una retrospectiva para aplicar mejoras.
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/14.png', alt='')
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Las metodologías ágiles promueven la colaboración continua con el cliente, la flexibilidad ante el cambio y la mejora continua a través de la retroalimentación.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tabla comparativa de la ejecución de proyectos según PMBOK, PRINCE2 y metodologías ágiles
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-center Aspecto
            th.bg-color-4.text-center PMBOK
            th.bg-color-4.text-center PRINCE2
            th.bg-color-4.text-center Metodologías Ágiles
        tbody.bg-color-white
          tr
            td Naturaleza
            td Guía de buenas prácticas (predictiva)
            td Metodología estructurada basada en procesos
            td Enfoque iterativo e incremental
          tr.bg-color-sintesis
            td Inicio de la ejecución
            td Tras aprobación del plan general del proyecto
            td Al comenzar cada etapa aprobada por el Project Board
            td Al iniciar cada sprint o iteración
          tr
            td Enfoque principal
            td Procesos y áreas de conocimiento
            td Entrega de productos conforme a especificaciones
            td Entrega continua de valor al cliente
          tr.bg-color-sintesis
            td Gestión del trabajo
            td Coordinación del equipo y recursos
            td Asignación clara de tareas y control por etapas
            td Equipos autoorganizados que trabajan por prioridades
          tr
            td Gestión del cambio
            td Procesos formales de control de cambios
            td Gestión por excepción y escalamiento de decisiones
            td Cambios aceptados entre sprints; adaptabilidad constante
          tr.bg-color-sintesis
            td Seguimiento y control
            td Reportes y análisis de desempeño
            td Revisión por etapas y manejo de tolerancias
            td Dailys, revisión del sprint y retrospectivas
          tr
            td Rol principal
            td Director del Proyecto
            td Project Manager / Project Board / Team Manager
            td Product Owner / Scrum Master / Equipo
          tr.bg-color-sintesis
            td Documentación
            td Amplia y formal
            td Clara y estructurada por productos
            td Mínima y funcional
          tr
            td Flexibilidad
            td Baja a media
            td Media (con tolerancias)
            td Alta


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=504373197010" target="_blank" rel="noopener noreferrer") Fernández Parra, K., Garrido Saroza, A., Ramírez Martínez, Y., & Perdomo Bello, I. (2015). PMBOK y PRINCE2: similitudes y diferencias. Revista Científica, 23(3), 111–123. Universidad Distrital Francisco José de Caldas. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/355172263_LA_GESTION_AGIL_DE_PROYECTOS_SEGUN_LOS_MODELOS_PRINCE2_Y_EL_PMBOK" target="_blank" rel="noopener noreferrer") [Autor(es) desconocido(s)] (2021). La gestión ágil de proyectos según los modelos PRINCE2 y el PMBOK [PDF]. ResearchGate.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/-YsqT66U51E?si=PeKERqQ6TgZS7O9" target="_blank" rel="noopener noreferrer") Tejera, I. (2014, 19 de enero) Gestión de proyectos según el enfoque PMI-PMBOK [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6SjDZTmQrUE?si=4-8l_S4S1NuIvg8M " target="_blank" rel="noopener noreferrer") OpenWebinars (2020, 5 de octubre). Qué es la metodología PRINCE2 [Video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/4ApH7XMS3Sw?si=_rgsIHJ3uU-1-wus " target="_blank" rel="noopener noreferrer") Tejera, I. (2014, 12 de enero)  Metodologías ágiles de Dirección de Proyectos – Scrum  [Video]. YouTube 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
