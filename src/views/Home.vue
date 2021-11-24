<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4"></h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <router-link :to="{ name: 'Receipt' }">
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-money-check-alt fa-2x"></i
                ></a>
                <footer class="card-icon-text">
                  <small class="text-black card-icon-text-3">
                    Recibos<br />Nomina
                  </small>
                </footer>
              </blockquote>
            </router-link>
          </div>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <a
              href="http://viaticos.iusa.com.mx:8081/neonsh/modulos/login/login.xhtml"
              class="text-white"
              target="_blank"
            >
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black">
                  <i class="fas fa-suitcase fa-2x"></i
                ></a>
                <footer class="text-black card-icon-text">
                  <small> Reg. gastos de<br />viaje </small>
                </footer>
              </blockquote>
            </a>
          </div>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <a href="https://normatividad.iusa.com.mx" target="_blank">
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-copy fa-2x"></i
                ></a>
                <footer class="card-icon-text">
                  <small class="text-black">
                    Normatividad<br />
                    &nbsp;
                  </small>
                </footer>
              </blockquote>
            </a>
          </div>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <blockquote class="blockquote mb-0">
              <a href="#" class="text-black"
                ><i class="fas fa-suitcase-rolling fa-2x"></i
              ></a>
              <footer class="card-icon-text">
                <small>
                  <a href="#" class="card-icon-text-3 text-black"
                    >Solicitud<br />Vacaciones</a
                  >
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="col-xl-2">
          <router-link :to="{ name: 'MeetingRoom' }">
            <div class="card text-center p-3 card-link">
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-users fa-2x"></i
                ></a>
                <footer class="card-icon-text">
                  <small>
                    <a href="#" class="card-icon-text-3 text-black"
                      >Reservación Sala<br />Juntas</a
                    >
                  </small>
                </footer>
              </blockquote>
            </div>
          </router-link>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <blockquote class="blockquote mb-0">
              <a href="#" class="text-black"
                ><i class="fas fa-phone-alt fa-2x"></i
              ></a>
              <footer class="card-icon-text">
                <small>
                  <a href="#" class="card-icon-text-3 text-black"
                    >Directorio<br />
                    Ext.</a
                  >
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
            <!--<div class="card-header">
                                        <i class="fas fa-layer-group"></i>
                                        BANNERS INFORMATIVOS 
                                    </div>-->
            <div class="card-body">
              <div
                id="carouselExampleControls"
                class="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    :class="{ active: role[0].contingency }"
                    v-if="role[0].contingency"
                  >
                    <img
                      class="d-block w-100 imaCarouselHeight"
                      :src="'img/banner_01.png'"
                      alt="First slide"
                    />
                  </div>
                  <div
                    class="carousel-item"
                    :class="{ active: !role[0].contingency }"
                  >
                    <router-link :to="{ name: 'MeetingRoom' }">
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_02.png'"
                        alt="Second slide"
                      />
                    </router-link>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title centerItems">Vacaciones</h5>
              <div class="row">
                <div class="col-xl-3">
                  <span><i class="fas fa-calendar-check fa-3x"></i></span>
                </div>
                <div class="col-xl-9 text-right text-huge">
                  <div class="textColorSucces">9 Días para su uso</div>
                  <div class="huge-4">9/12/2021 <span>Fecha Limite</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <div class="row centerItems">
                <br />
                <p>
                  <i class="fas fa-cloud-sun fa-3x"></i
                  ><span class="card-icon-text-2">&nbsp;27 c</span>
                </p>
                <div class="text-right text-huge">
                  <div class="card-icon-text">LOMAS ALTAS /CDMX</div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-calendar-alt"></i>
              CALENDARIO
            </div>
            <div class="card-body">
              <img
                class="card-img-top imaCarouselHeight"
                :src="'img/calendario.JPG'"
                alt="Card image CALENDARIO"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
      <div class="row">
        <div class="col-xl-3 stretch-card">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-play-circle"></i>
              VIDEOS IUSA
            </div>
            <div class="card-body">
              <div
                id="carouselExampleControls2"
                class="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/grupo_video.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">GRUPO IUSA</h5>
                        <p class="card-text">
                          Reconocemos a nuestra gente por el exito de nuestra
                          empresa. Por eso, nuestra principal apuesta es el
                          éxito de nuestra gente.
                        </p>
                        <p class="card-text">
                          Don Alejo Peralta y Diaz Ceballos
                        </p>
                        <a
                          href="https://www.youtube.com/watch?v=xwDF_kVQyic"
                          target="_blank"
                          class="cardLinkSpace"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/sistemas_intvideo.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          IUSA Sistemas integrales para la construcción
                        </h5>
                        <p class="card-text">
                          Nos respaldan más de 80 años de experiencia de Grupo
                          IUSA, ofreciendo calidad, servicio e innovación
                          tecnológica 100% mexicana.
                        </p>
                        <a
                          href="https://www.youtube.com/watch?v=X0zQUw6t6qk"
                          target="_blank"
                          class="cardLinkSpace"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/iusasol_video.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">IUSASOL</h5>
                        <p class="card-text">
                          IUSASOL® se perfila a convertirse en la empresa líder
                          en el suministro y comercialización de electricidad
                          limpia y renovable en México.
                        </p>
                        <a
                          href="https://www.youtube.com/watch?v=CIiY3jS_We0"
                          target="_blank"
                          class="cardLinkSpace"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-map-marked"></i>
              UBICACIONES IUSA
            </div>
            <div class="card-body">
              <div
                id="carouselExampleControl3"
                class="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantall.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Lomas Altas</h5>
                        <p class="card-text">
                          Av. Paseo de la reforma 2608, Lomas Altas Miguel
                          Hidalgo, 11950 Ciuda de México, CDMX.
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Av.+Paseo+de+la+Reforma+2608,+Lomas+Altas,+Miguel+Hidalgo,+11950+Ciudad+de+M%C3%A9xico,+CDMX/@19.3942619,-99.2413432,17z/data=!3m1!4b1!4m5!3m4!1s0x85d20108c844926f:0xd04e4c239a41243f!8m2!3d19.3942619!4d-99.2391545"
                          target="_blank"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla2.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">IUSA Pasteje</h5>
                        <p class="card-text">
                          Carr. Panamericana Méx - Qro Km. 109, 50700,
                          Jocotitlán.
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/search/iusa+pastej%C3%A9+direcci%C3%B3n/@19.6545362,-99.7958877,16z/data=!3m1!4b1"
                          target="_blank"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla3.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Grupo IUSA Aragón</h5>
                        <p class="card-text">
                          Ote. 171 398, Pueblo de San Juan de Aragón, Gustavo A.
                          Madero, 07470 Ciudad de México, CDMX.
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Grupo+IUSA+Arag%C3%B3n/@19.4746466,-99.1050334,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f97c1f1769f5:0x157a6452c79822cd!8m2!3d19.4746466!4d-99.1028447"
                          target="_blank"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla4.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">IUSA IZTAPALAPA SA DE CV</h5>
                        <p class="card-text">
                          Cam. Real a San Lorenzo 284, San Miguel 8a ampliación,
                          Iztapalapa, 09837 Ciudad de México, CDMX.
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/IUSA+IZTAPALAPA+SA+DE+CV/@19.3508709,-99.081534,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fd5247696c7b:0x7e1b75551fafc098!8m2!3d19.3508709!4d-99.0793453"
                          target="_blank"
                          ><i class="fas fa-share-square fa-1x"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControl3"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControl3"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-brain"></i>
              TIP DEL DÍA
            </div>
            <div class="card-body">
              <div
                id="carouselExampleControls4"
                class="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/tip_dia1.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Juega con tus contraseñas</h5>
                        <p class="card-text">
                          Crea contraseñas a partir de cosas comunes para ti,
                          con esto será fácil recordarla:
                        </p>
                        <p class="card-text">
                          1. Tu destino de vacaciones favorito
                        </p>
                        <a href="#" target="_blank">Leer más</a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/tip_dia2.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Ransomware</h5>
                        <p class="card-text">
                          Código malicioso que cifra la información o bloquea el
                          acceso al sistema. La víctima, para obtener la
                          contraseña que libera la información, debe pagar al
                          atacante una suma de dinero.
                        </p>
                        <a href="#" target="_blank">Leer más</a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="'img/tip_dia3.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Malware</h5>
                        <p class="card-text">
                          Malware es la abreviatura de “Malicious software”,
                          término que engloba a todo tipo de programa
                          informático malicioso.
                        </p>
                        <a href="#" target="_blank">Leer más</a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-headset"></i>
              SERVICE DESK
            </div>
            <div class="card-body centerItems">
              <div class="panelTextCenter">
                <a href="http://servicedesk.iusa.com.mx"
                  ><img
                    class="center"
                    :src="'img/logo_sd.png'"
                    alt="Card image serdesk"
                /></a>
                <br />
                <a href="http://servicedesk.iusa.com.mx"
                  ><img
                    class="center"
                    :src="'img/icon_ticket.png'"
                    alt="Card image ticket"
                /></a>
                <br />
                <a href="http://servicedesk.iusa.com.mx"
                  ><p>Levantamiento de Ticket</p></a
                >
                <br />
                <img
                  class="center"
                  :src="'img/icon_whatsapp.svg'"
                  alt="Card image whats"
                />
                <br />
                <a href="#">+52 1 55 5118 1485</a>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9">
          <div class="card mb-4">
            <div
              class="
                card-header
                text-white
                bg-card-portal
                centerItems
                card-icon-text
              "
            >
              <i class="fas fa-newspaper"></i>
              NOTICIAS IUSA
            </div>
            <div class="card-body">
              <div class="card">
                <div class="card-body">
                  <p class="huge-3">
                    <i class="fas fa-certificate"></i> RENOVACIÓN DE FLOTILLAS
                    VEH. <span class="tagTime">hace 5 min.</span>
                  </p>
                </div>
              </div>
              <div class="card cellContainer">
                <div class="card-body">
                  <p class="huge-3">
                    <i class="fas fa-tools"></i> VENTANA DE MANTENIMIENTO.
                    <span class="tagTime"> 7:00 am</span>
                  </p>
                </div>
              </div>
              <div class="card cellContainer">
                <div class="card-body">
                  <p class="huge-3">
                    <i class="far fa-circle"></i> REFLEXIONES IUSA.
                    <span class="tagTime">Ayer</span>
                  </p>
                </div>
              </div>
              <div class="card cellContainer">
                <div class="card-body">
                  <p class="huge-3">
                    <i class="fas fa-video"></i> NUEVO VIDEO IUSA.
                    <span class="tagTime">28/08/21</span>
                  </p>
                </div>
              </div>
              <div class="cellContainer">
                <button class="btn btn-secondary w-100">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters({
      role: "auth/role",
    }),
  },
  methods: {},
};
</script>

<style scoped>
.card-link {
  box-shadow: 5px 4px 10px #aaaaaa;
  border: 1px solid #bfbfbf;
}
</style>
