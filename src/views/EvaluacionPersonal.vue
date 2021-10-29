<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item ">EVALUACIÓN PERSONAL</li>
            <li class="breadcrumb-item active">HOME OFFICE</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <br />
          <div class="form-group">
            <select class="form-control">
              <option>Evaluacion 1</option>
              <option>Evaluacion 2</option>
              <option>Evaluacion 3</option>
              <option selected>Evaluacion 4 /SEP 21</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              EVALUACIÓN
            </div>
            <div class="card-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-link active"
                    id="nav-DespCo-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-DespCo"
                    type="button"
                    role="tab"
                    aria-controls="nav-DespCo"
                    aria-selected="true"
                    >Desempeño y Colaboración</a
                  >
                  <a
                    class="nav-link"
                    id="nav-carga-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-carga"
                    type="button"
                    role="tab"
                    aria-controls="nav-carga"
                    aria-selected="false"
                  >
                    Carga de Trabajo</a
                  >
                  <a
                    class="nav-link"
                    id="nav-Eco-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Eco"
                    type="button"
                    role="tab"
                    aria-controls="nav-Eco"
                    aria-selected="false"
                  >
                    Económico</a
                  >
                  <a
                    class="nav-link"
                    id="nav-habitosL-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-habitosL"
                    type="button"
                    role="tab"
                    aria-controls="nav-habitosL"
                    aria-selected="false"
                    >Hábitos Laborales</a
                  >
                  <a
                    class="nav-link"
                    id="nav-preve-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-preve"
                    type="button"
                    role="tab"
                    aria-controls="nav-preve"
                    aria-selected="false"
                    >Prevención Sanitaria</a
                  >
                  <a
                    class="nav-link"
                    id="nav-Ambito-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Ambito"
                    type="button"
                    role="tab"
                    aria-controls="nav-Ambito"
                    aria-selected="false"
                    >Ámbito Personal</a
                  >
                  <a
                    class="nav-link"
                    id="nav-conti-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-conti"
                    type="button"
                    role="tab"
                    aria-controls="nav-conti"
                    aria-selected="false"
                    >Continuar con el Programa</a
                  >
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-DespCo"
                  role="tabpanel"
                  aria-labelledby="nav-DespCo-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Desempeño y Colaboración</strong></label>
                  </div>
                  <div id="chart_div-1" class="graphPanel"></div>
                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">Conclusiones</h5>
                      <br />
                      <p class="card-text">
                        - La percepción tanto de jefes como de colaboradores
                        respecto de su desempeño es mejor e igual que trabajar
                        en la oficina y cuentan con las herramientas necesarias,
                        pero pueden mejorar.
                      </p>
                      <p class="card-text">
                        - Mejor administración de sus tiempos y cumplimiento de
                        objetivos definidos.
                      </p>
                      <p class="card-text">
                        - Se mantiene la ampliación de horarios de trabajo
                        ocupando tiempos anteriormente de traslados, sin que ser
                        percibidos como una sobre carga, tal como lo indica el
                        indicador siguiente:
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav-carga"
                  role="tabpanel"
                  aria-labelledby="nav-carga-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Carga de Trabajo</strong></label>
                  </div>
                  <div class="col-xl-12">
                    <div
                      id="chart_div-amb14"
                      class="graphPanel borderSolidGraph"
                    ></div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Eco"
                  role="tabpanel"
                  aria-labelledby="nav-Eco-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Económico</strong></label>
                  </div>
                  <br />
                  <label
                    >Con base en las respuestas de todos los participantes de
                    este programa, se han logrado ahorros economicos personales
                    significativos Elige la opción mas representativa del uso
                    que le has dado a este ahorro o del uso que planeas darle al
                    mismo marcando con una "X" en el cuadro
                    correspondiente.</label
                  >
                  <div id="chart_div-eco13" class="graphPanel"></div>
                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">Conclusiones</h5>
                      <br />
                      <p class="card-text">
                        1. Se identifica una necesidad satisfecha o concluida:
                        Mejora de instalaciones de comunicaciones, sanitarias y
                        eléctricas, donde en evaluación anterior el 70% había
                        señalado ser su principal destino del gasto de su ahorro
                        y ahora es solo un 20%
                      </p>
                      <p class="card-text">
                        2. Se mantiene la tendencia de invertir en compra de
                        mobiliario, mantener su esquema de aprendizaje, así como
                        el tener que gastar ante una enfermedad inminente.
                      </p>
                      <p class="card-text">
                        3. Interesante notar que rubro mejoras y ampliaciones de
                        espacios dentro del hogar, marca un incremento
                        importante, así como destinarlo a un plan vacacional y
                        mas sensibilidad hacia donaciones a instituciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-habitosL"
                  role="tabpanel"
                  aria-labelledby="nav-habitosL-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Hábitos Laborales</strong></label>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-xl-6">
                      <div
                        id="chart_div-2"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-6">
                      <div id="chart_div-3" class="graphPanel"></div>
                    </div>
                  </div>
                  <hr class="hr-style" />
                  <div class="row">
                    <div class="col-xl-6">
                      <div
                        id="chart_div-5"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-6">
                      <div id="chart_div-6" class="graphPanel"></div>
                    </div>
                  </div>

                  <hr class="hr-style" />
                  <div class="row">
                    <div class="col-xl-12">
                      <div
                        id="chart_div-hab10"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">Conclusiones</h5>
                      <br />
                      <p class="card-text">
                        - Hubo un leve retroceso en el personal que ha regresado
                        a trabajar en sitio a un 65 %
                      </p>
                      <p class="card-text">
                        - Aquellos que han regresado, algunos redujeron su
                        frecuencia de asistencia a 1 día a la semana y otra gran
                        parte están yendo con mayor frecuencia que antes,
                        pasando a 4 días y diario.
                      </p>
                      <p class="card-text">
                        - Cuando asisten a trabajar en sitio, prevalece una
                        preferencia de reunirse mediante videoconferencias por
                        encima de reuniones presenciales.
                      </p>
                      <p class="card-text">
                        - La tendencia y porcentaje de parejas que han regresado
                        a laborar se mantienen.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-preve"
                  role="tabpanel"
                  aria-labelledby="nav-preve-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Prevención Sanitaria</strong></label>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-xl-4">
                      <label style="color: white;"
                        >Señala los articulos de prevención sanitaria con los
                        que asistes a laborar cuando lo haces
                        presencialmente</label
                      >
                      <div
                        id="chart_div-hab7"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-4">
                      <label
                        >Señala los articulos de prevención sanitaria con los
                        que asistes a laborar cuando lo haces
                        presencialmente</label
                      >
                      <div
                        id="chart_div-hab8"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-4">
                      <label
                        >Cual es tu opinión respecto a las medidas de prevención
                        sanitaria implementadas en las instalaciones de la
                        empresa</label
                      >
                      <div id="chart_div-hab9" class="graphPanel"></div>
                    </div>
                  </div>
                  <hr class="hr-style" />
                  <div class="row">
                    <div class="col-xl-6">
                      <div
                        id="chart_div-hab11"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-6">
                      <div id="chart_div-hab12" class="graphPanel"></div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">Conclusiones</h5>
                      <br />
                      <p class="card-text">
                        - Mas de un 75% de los encuestados opina que las medidas
                        de prevención implementadas por la empresa son Muy
                        Buenas y Funcionales.
                      </p>
                      <p class="cars-text">
                        - Sin embargo hay un señalamiento directo a que no se
                        realiza la desinfección periódica de las áreas de
                        trabajo y menos del 3% las encuentra deficientes.
                      </p>
                      <p class="cars-text">
                        - Se identifican nuevas áreas importantes a cuidar con
                        una mejor sanitización: Areas de Copiado, Sanitarios,
                        Salas de Juntas, Cajeros electrónicos, Cocineta, Arco y
                        tapete y lector de temperatura en pisos 3 y 5.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-Ambito"
                  role="tabpanel"
                  aria-labelledby="nav-Ambito-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Ámbito Personal</strong></label>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-xl-6">
                      <div
                        id="chart_div-amb15"
                        class="graphPanel borderSolidGraph"
                      ></div>
                    </div>
                    <div class="col-xl-6">
                      <div id="chart_div-amb16" class="graphPanel "></div>
                    </div>
                  </div>
                  <hr class="hr-style" />
                  <div class="row">
                    <div class="col-xl-4">
                      <div id="chart_div-amb17" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb18" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb19" class="graphPanel "></div>
                    </div>
                  </div>
                  <hr class="hr-style" />
                  <div class="row">
                    <div class="col-xl-4">
                      <div id="chart_div-amb20" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb21" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb22" class="graphPanel "></div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">Conclusiones</h5>
                      <br />
                      <p class="card-text">
                        - Se mantienen las proporciones y hay un leve incremento
                        en el número de horas semanales a mas de 20, por lo que
                        podría ser considerado un índice de calidad de vida se
                        sigue manteniendo.
                      </p>
                      <p class="card-text">
                        - Al día de hoy el 90% está vacunado o cuenta con al
                        menos 1 dósis aplicada. El 65% cuentan con el esquema
                        completo de vacunación, y el 10% pendiente el principal
                        motivo es porque aún no llega al Grupo de Edad de
                        aplicación o le está haciendo falta solo la segunda
                        dósis. Interesante notar que hay casos (contados) que
                        por motivos de salud han decidido no vacunarse o bien no
                        creen en la vacuna.
                      </p>
                      <p class="card-text">
                        - Pese a contar con un amplio expectro de cobertura en
                        población IUSA vacunada, persiste una clara reserva a
                        retomar vida social, manifestándose en que el 40% de los
                        colaboradores reporta NO haber asistido aún a ninguna
                        reunión, y otro 40% ha asistido solo a una, siendo
                        consistente la respuesta donde el 65% de ellos dice no
                        sentirse seguro de regresar a trabajar en sitio.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-conti"
                  role="tabpanel"
                  aria-labelledby="nav-conti-tab"
                >
                  <br />
                  <div class="text-center">
                    <label><strong>Continuar con el Programa</strong></label>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-xl-4">
                      <div id="chart_div-amb23" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb24" class="graphPanel "></div>
                    </div>
                    <div class="col-xl-4">
                      <div id="chart_div-amb25" class="graphPanel "></div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr class="hr-style" />
                  <br />
                  <br />
                  <div class="">
                    <div class="marginCardsText justify-text-div">
                      <h5 class="card-icon-text-2">
                        Conclusiones y siguientes pasos:
                      </h5>
                      <br />
                      <p class="card-text">
                        1. Permanece la consistencia en la percepción tanto de
                        Jefes como de Colaboradores de ser mucho mas Eficientes
                        colaborando con su entorno (clientes, proveedores, su
                        jefes, etc), reconociendo esto como una gran oportunidad
                        y desean continuar en el programa, reiterando su
                        Compromiso para con nuestro Grupo.
                      </p>
                      <p class="card-text">
                        2. Es valorado el tiempo ahorrado en NO Traslados entre
                        su casa y la oficina, reduciendo tiempos muertos y
                        factores de contagio, traduciéndose en horarios
                        ampliados de Trabajo y no son percibidos como sobre
                        carga laboral.
                      </p>
                      <p class="card-text">
                        3. Como resultado de comparar el destino que declaran
                        han tenido los ahorros por no traslados, los
                        colaboradores señalan que una necesidad inmediata fue
                        cubierta: inversión en anchos de banda,
                        acondicionamiento de lugar de trabajo adecuaciones base.
                        Ahora señala tener la intención de realizar ampliaciones
                        y mejoras en su casa, lo que sustenta la visión de largo
                        plazo de seguir colaborando en ésta modalidad.
                      </p>
                      <p class="card-text">
                        4. Si consideramos a nuestros colaboradores como una
                        muestra y representación de la sociedad, y basándonos en
                        ésta tendencia, el punto anterior representará una
                        oportunidad de mayor venta de los productos que nuestro
                        Grupo oferta, servicio y entrega oportuna a la demanda,
                        que una ampliación y mejora a hogares puede requerir.
                      </p>
                      <p class="card-text">
                        5. Aunque hay un pequeño retroceso en la proporción de
                        colaboradores que han regresado total o parcial a
                        laborar en sitio, ésa se mantiene: 62%, sin embargo se
                        aprecia que la frecuencia de quienes asisten se modifica
                        incrementándose el número de colaboradores que asisten
                        un día a la semana y los que asisten 4 días a la semana.
                        Por lo que es indispensable se continúe vigilando de
                        manera constante las prácticas de prevención y filtro de
                        al acceso de personal con síntomas de infección,
                        garantizando la Sana Distancia.
                      </p>
                      <p class="card-text">
                        6. Hay un claro reconocimiento a las medidas de
                        prevención implementadas en la empresa, las califican de
                        Muy buenas y Funcionales, así como un entendimiento
                        claro de que la responsabilidad de ésta prevención es un
                        tema compartido entre Empresa y Colaborador.
                      </p>
                      <p class="card-text">
                        7. De acuerdo a las áreas de oportunidad en prevención
                        señaladas por los colaboradores, se estarán
                        implementando de inmediato:
                      </p>
                      <p class="card-text padding-vineta">
                        o Arco, tapete y uso de gel para el piso 3 y 5 en Lomas
                        Altas
                      </p>
                      <p class="card-text padding-vineta">
                        o Implementación de prácticas de sanitización en las
                        salas de juntas despues de cada uso.
                      </p>
                      <p class="card-text padding-vineta">
                        o Normar el número máximo de asistentes por reunión
                        garantizando 1.5 mts de distancia entre participante
                      </p>
                      <p class="card-text padding-vineta">
                        o Implementación de gel y toallas desinfectantes en área
                        de fotocopiadoras y cajero automático.
                      </p>
                      <p class="card-text padding-vineta">
                        o Salas Virtuales para Conferencias telefónicas por cada
                        Dirección y Gerencia (TI responsable de implementar)
                      </p>
                      <p class="card-text padding-vineta">
                        o Salas de Videoconferencia Pública bajo administración
                        por Zona en Pastejé, Aragón y Lomas Altas para éste fin.
                        (TI responsable de implementar)
                      </p>
                      <p class="card-text">
                        8. La calidad de vida de los colaboradores se mantiene y
                        mejora. El 50% indica pasar entre 10 y 20 horas
                        semanales, mientras que el 30% declara mas de 20 horas
                        por semana, así como el gran valor que ven de poder
                        mejorar físicamente.
                      </p>
                      <p class="card-text">
                        9. Los colaboradores continúan reportando una baja
                        incidencia en asistencia a reuniones sociales, pese a
                        que ya el 90% de ellos cuentan con al menos una vacuna,
                        y es consistente a la inseguridad que tienen de regresar
                        a laborar en sitio, reafirmándose con la preferencia de
                        aun asistiendo a sitio lo hacen mediante
                        Videoconferencias vs reuniones presenciales. Sin embargo
                        varios planean destinar ahorros para realizar un viaje
                        familiar (60%)
                      </p>
                      <p class="card-text">
                        10. Los colaboradores se identifican igualmente
                        responsables que la Empresa, respecto de cumplir con la
                        Prevención Sanitaria, y reporta asistir con los
                        elementos básicos de prevención e higiene ( Cubrebocas y
                        gel). Igualmente califica como Muy buenas y Funcionales
                        las medidas implementadas en las instalaciones y
                        confirma que su cumplimiento es mediana y cabalmente
                        observado.
                      </p>
                      <p class="card-text">
                        11. Es conveniente normar los modelos de colaboración y
                        que puedan ser institucionalizados de la mano con el
                        modelo de seguimiento a la gestión y medición de
                        desempeño.
                      </p>
                      <p class="card-text">
                        12. De acuerdo a las propuestas hechas por los
                        colaboradores a como hacer mas productivo, eficiente y
                        agradable el programa de HO, se resumen en las
                        siguientes iniciativas a implementar a la brevedad:
                      </p>
                      <p class="card-text padding-vineta">
                        o Desarrollo de planes de motivación al personal, planes
                        de ejercitación y desarrollo profesional.
                      </p>
                      <p class="card-text padding-vineta">
                        o Crear actividades remotas, sociales, culturales y
                        deportivas (concurso de mas kilos reducidos por
                        Departamento – concurso interno – plan de nutrición)
                      </p>
                      <p class="card-text padding-vineta">
                        o Sustitución de equipos de cómputo obsoletos ( JP iusa)
                      </p>
                      <p class="card-text padding-vineta">
                        o Programa de alerta temprana de contagio covid por área
                        funcional.
                      </p>
                      <p class="card-text padding-vineta">
                        o Desarrollo de portal de experiencias positivas /
                        negativas de trabajo en HO, solo empleados y será
                        moderado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
