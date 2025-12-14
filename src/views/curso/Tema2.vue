<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Asignación y gestión de recursos: humanos, financieros y tecnológicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Según Torres Hernández (2014), durante la etapa de ejecución de un proyecto, la asignación y gestión de recursos no debe entenderse como una mera función operativa o administrativa, sino como una manifestación estratégica de las decisiones tomadas en la planificación. Es en esta fase donde los recursos permiten convertir los objetivos proyectados en resultados tangibles, lo cual hace de esta actividad una condición indispensable para garantizar la viabilidad, sostenibilidad y efectividad del proyecto.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El desafío principal no radica únicamente en distribuir recursos, sino en hacerlo con coherencia, oportunidad, adaptabilidad y alineación estratégica. Esto implica reconocer que los recursos son limitados, están condicionados por factores internos y externos, y requieren ser movilizados con inteligencia táctica. La forma en que se gestionan refleja, además, la calidad del liderazgo, la capacidad del proyecto para responder a la incertidumbre y su habilidad para integrar componentes diversos en una acción coherente.
    
    p.mb-5 La ejecución de un proyecto rara vez se desarrolla en condiciones ideales. Siempre está expuesta a cambios de contexto, imprevistos y tensiones múltiples. Por ello, la asignación de recursos debe ser entendida como un proceso dinámico que requiere más que el simple seguimiento de un plan. Requiere una visión sistémica y decisiones constantes, articulando lo técnico con lo humano, lo económico con lo estratégico, y lo tecnológico con lo ético.

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Cuando esta gestión se lleva a cabo con una visión integral, el proyecto no solo avanza conforme a lo previsto, sino que aprende, se adapta y genera valor más allá de los resultados inmediatos. En consecuencia, esta fase es mucho más que una función operativa: es el núcleo estratégico que permite transformar una idea en una realidad con impacto, propósito y sentido.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Enfoque PMBOK

    p.mb-5 Según Malagón Barinas (2019), en el enfoque del PMBOK (<em>Project Management Body of Knowledge</em>), la gestión de recursos comienza con la planificación de la gestión de recursos, cuyo propósito es definir el enfoque y el nivel de esfuerzo necesario para administrar adecuadamente todos los recursos requeridos a lo largo del ciclo de vida del proyecto. Las etapas clave en la gestión de recursos según PMBOK:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5 Planificación de la gestión de recursos
              p Se elabora el plan que define cómo se estimarán, adquirirán, gestionarán y controlarán los recursos físicos y humanos. Esta etapa establece las bases para una ejecución estructurada.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5 Estimación de los recursos de las actividades
              p Implica identificar y cuantificar los tipos y cantidades necesarias de recursos para ejecutar cada actividad del cronograma, lo que permite una programación realista y sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Adquisición de recursos
              p Durante la ejecución, se obtienen los recursos físicos (tecnológicos, materiales, infraestructura) y se asigna el personal necesario, mediante contrataciones, negociaciones o reasignaciones internas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Desarrollo y gestión del equipo
              p Comprende la formación, motivación, liderazgo, resolución de conflictos y monitoreo del desempeño, promoviendo un ambiente colaborativo y alineación con los objetivos del proyecto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Gestión de recursos financieros
              p Desde la Gestión de los Costos del Proyecto, se establece un presupuesto detallado y se controla el gasto, garantizando que los fondos respalden adecuadamente adquisiciones y necesidades operativas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Gestión de recursos tecnológicos
              p Se identifican, aprovisionan y gestionan como parte de los recursos físicos, especialmente relevantes en proyectos digitalizados o complejos donde actúan como habilitadores clave.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Control de recursos
              p Se monitorea el uso de los recursos físicos asignados, verificando que se utilicen conforme a lo planificado y aplicando acciones correctivas ante cualquier desviación.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Enfoque PRINCE2
    
    p.mb-5 Según Malagón Barinas (2019), en el marco metodológico de PRINCE2 (<em>Projects IN Controlled Environments</em>), la asignación y gestión de recursos humanos, financieros y tecnológicos se concibe desde una lógica de gobernanza estructurada, control continuo y toma de decisiones fundamentada en el valor del negocio. Aunque PRINCE2 no detalla procesos técnicos específicos como el PMBOK, ofrece un enfoque claro basado en principios de control, responsabilidad y gestión por etapas, lo que favorece una administración eficiente de los recursos durante la ejecución. Los principios clave de la gestión de recursos en PRINCE2 son:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Justificación continua mediante el Caso de Negocio")
            p La asignación de recursos se basa en el valor esperado y no solo en la disponibilidad. El Caso de Negocio guía las decisiones, asegurando una evaluación constante de la relación inversión–beneficio, minimizando desperdicios y fortaleciendo el criterio estratégico.
    
          .div(titulo="Planificación por niveles")
            p La planificación ocurre dentro del proceso "Planificar", donde se definen productos, recursos, tiempos y costos. Se estructura en tres niveles: Plan del Proyecto, Planes de Etapa y Planes de Equipo. Esto permite asignaciones graduales y ajustes según el contexto o los cambios del negocio.
    
          .div(titulo="Gestión del recurso humano mediante roles definidos")
            p PRINCE2 define una estructura clara de roles: Comité de Proyecto, Jefe del Proyecto y Propietarios de Producto. Esta organización permite una gestión eficiente del talento humano, con autoridad y responsabilidades definidas. La asignación de personal considera criterios técnicos y organizativos.
    
          .div(titulo="Gestión financiera por etapas y por excepción")
            p El presupuesto se libera por etapas, condicionado al cumplimiento de entregables. El principio de "gestión por excepción" permite controlar la inversión, integrando revisiones del Caso de Negocio e informes de progreso para mantener la validez de la inversión y aplicar ajustes cuando sea necesario.
          .div(titulo="Gestión de recursos tecnológicos con justificación de valor")
            p Aunque no se detalla su gestión técnica, PRINCE2 exige la especificación de los recursos tecnológicos en el Diccionario de Productos y las Especificaciones de Calidad. Su uso debe justificarse por el valor que aportan al negocio, con evaluaciones constantes de su pertinencia.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Metodologías Ágiles
    
    .bg-color-9.borCom-1.mb-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p.mb-0 En las metodologías ágiles, la asignación y gestión de recursos humanos, financieros y tecnológicos no responde a esquemas tradicionales de planificación rígida ni jerarquías verticales, sino que se fundamenta en los principios de colaboración, adaptabilidad, entrega continua de valor y empoderamiento de los equipos. Los recursos se conciben como activos dinámicos, que se movilizan de forma flexible y coordinada según la evolución del proyecto y las necesidades del cliente.
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión de recursos humanos: equipos autoorganizados
              p Los equipos ágiles son multidisciplinarios y autoorganizados, responsables de planificar y ejecutar tareas colectivamente. La asignación de recursos no se enfoca en tareas individuales, sino en formar equipos estables con capacidades complementarias. La gestión del talento se basa en colaboración, confianza y comunicación fluida. El liderazgo se transforma en facilitación, a través de roles como el Scrum Master o el Agile Coach.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión financiera: asignación progresiva y centrada en valor
              p En lugar de presupuestos rígidos, se usan ciclos breves (sprints o entregas) que permiten definir funcionalidades, recursos y plazos de manera iterativa. Esto posibilita asignaciones financieras progresivas, favoreciendo el uso eficiente del dinero, la evaluación continua del valor y la toma de decisiones informada sobre la continuidad del proyecto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión de recursos tecnológicos: soporte continuo a la agilidad
              p Los recursos tecnológicos habilitan el desarrollo incremental, la automatización y la colaboración. Se prioriza mantener entornos técnicos robustos, flexibles y accesibles. Herramientas clave incluyen tableros digitales (Kanban, Jira), plataformas de despliegue continuo, entornos colaborativos y sistemas de control de versiones. La asignación tecnológica es dinámica y se ajusta al cambio constante del producto.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Enfoque orientado al cliente
              p La gestión de recursos está centrada en generar valor tangible para el cliente. Se incorpora retroalimentación continua y se reasignan recursos según la evolución de las prioridades. Esta orientación permite decisiones tácticas y ágiles, incluso en contextos inciertos o cambiantes.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.1016/j.sbspro.2015.06.130" target="_blank" rel="noopener noreferrer") Lehtonen, P., & Huovinen, T. (2015). Classification of human- and automated resource allocation approaches in multi-project management. Procedia – Social and Behavioral Sciences, 194, 165–173. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mdpi.com/2071-1050/13/13/7318" target="_blank" rel="noopener noreferrer") Xu, W., Li, W., & Hu, W. (2021). Developing a resource allocation approach for resource-constrained construction operation under multi-objective optimization. Sustainability, 13(13), 7318.  




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/cZdsRehVv7g?si=mHrRwPyXd3CxWK0-" target="_blank" rel="noopener noreferrer") Tecnología en Arroz y Habichuelas -Victor M Ramos. (2019, 19 de mayo). Microsoft Project- 6.5 Recursos sobreasignados Planificar el equipo y tareas con los recursos [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/To3r764rqdo?si=KZEabSuDB_g6X_Zr " target="_blank" rel="noopener noreferrer") afoone (2013, 4 de septiembre) Diferencias y similitudes entre PRINCE2 y PMBoK [Video]. YouTube 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
