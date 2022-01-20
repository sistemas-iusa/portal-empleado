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
          <div class="card text-center p-3 card-link cinta">
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
          <a
            target="_blank"
            href="https://www.tiendaiusa.com/?gclid=CjwKCAiAhreNBhAYEiwAFGGKPHVDFJx8-v99dL-UA1JeoBdI33npHISUkrFyW8N-IyEEeUWCXYsIFxoCJv0QAvD_BwE"
            class="text-black"
          >
            <div class="card text-center p-3 card-link">
              <blockquote class="blockquote mb-0">
                <p></p>
                <img
                  class="card-img-top"
                  :src="'img/logo_tienda_iusa.svg'"
                  alt="Card image cap"
                />
                <footer class="card-icon-text">
                  <small>
                    <br />
                  </small>
                </footer>
              </blockquote>
            </div>
          </a>
        </div>
      </div>
      <div>
        <br />
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
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
                    <router-link :to="{ name: 'PersonalEvaluation' }">
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_01.png'"
                        alt="First slide"
                      />
                    </router-link>
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
                  <div class="carousel-item">
                    <a href="https://wa.me/5215551181585" target="_blank">
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_ho_03.png'"
                        alt="Second slide"
                      />
                    </a>
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
        <div class="col-xl-3" v-if="role[0].contingency">
          <div class="card">
            <div class="card-body">
              <a
                class="text-black"
                :href="
                  'https://contingencia.iusa.com.mx/validar_portal.php?e=' +
                  email +
                  '&c=' +
                  employee_code
                "
                target="_blank"
              >
                <img
                  class="card-img-top"
                  :src="'img/banner_contingencia_3.png'"
                  alt="Card image cap"
                />
              </a>
            </div>
          </div>
          <weather-view></weather-view>
          <!-- <div class="card cellContainer">
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
          </div> -->
          <!-- <div class="card cellContainer">
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
          </div> -->
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
                :src="'img/calendar_prox.png'"
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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

        <!-- <div class="col-xl-3">
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
        </div> -->

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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_acapulco.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">ACAPULCO</h5>
                        <p class="card-text">
                          Alonso Martín No. 57 Fracc. Magallanes, Acapulco Gro,
                          C.P. 39680
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Alonso+Martin+57,+Fracc+Magallanes,+Magallanes,+39670+Acapulco+de+Ju%C3%A1rez,+Gro./@16.8641322,-99.881812,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca57f532f0a41d:0x2f6bd19e2fa2da18!8m2!3d16.8641322!4d-99.8796233"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_oaxaca.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">OAXACA</h5>
                        <p class="card-text">
                          Calle Azucenas No. 205 A Col. Reforma, Oaxaca de
                          Juárez, Oaxaca C.P. 68050
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/C.+Azucenas+205,+Reforma,+68050+Oaxaca+de+Ju%C3%A1rez,+Oax./data=!4m2!3m1!1s0x85c7222d7125fb9b:0xc1ae503a450207dc?sa=X&ved=2ahUKEwjun-T21-H0AhVmkmoFHb5zBqgQ8gF6BAgFEAE"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_veracruz.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">VERACRUZ</h5>
                        <p class="card-text">
                          Carretera Veracruz-El Tejar KM 6.5 Col. Teresa Morales
                          de Delgado, El Tejar Mpio. de Medellín, Ver. C.P.
                          94273
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Jardines+de+Dos+Bocas,+94273+El+Tejar,+Ver./@19.0708208,-96.168043,15z/data=!4m9!1m2!2m1!1sCarretera+Veracruz-El+Tejar+KM+6.5+Col.+Teresa+Morales+de+Delgado,+El+Tejar+Mpio.+de+Medell%C3%ADn,+Ver.+C.P.+94273!3m5!1s0x85c369fb897d0899:0x4371758fc8df85c3!8m2!3d19.0811933!4d-96.1596583!15sCm9DYXJyZXRlcmEgVmVyYWNydXotRWwgVGVqYXIgS00gNi41IENvbC4gVGVyZXNhIE1vcmFsZXMgZGUgRGVsZ2FkbywgRWwgVGVqYXIgTXBpby4gZGUgTWVkZWxsw61uLCBWZXIuIEMuUC4gOTQyNzOSAQtwb3N0YWxfY29kZQ"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_leon.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">LEÓN</h5>
                        <p class="card-text">
                          Blvd. José María Morelos #608 Col. San José del
                          Consuelo, León, Guanajuato, C.P. 37200
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Blvrd+Jose+Mar%C3%ADa+Morelos+608,+San+Jose+del+Consuelo,+37200+Le%C3%B3n,+Gto./@21.1698162,-101.6588918,17z/data=!3m1!4b1!4m5!3m4!1s0x842bb92b949b1e1b:0x43594a6e7e137db6!8m2!3d21.1698162!4d-101.6567031"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_snluis.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">SAN LUIS POTOSÍ</h5>
                        <p class="card-text">
                          Manuel Ortíz de Santa María No. 115-B Col. Estrella de
                          Oriente, Zona de Abastos, San Luis Potosí, S.L.P. C.P.
                          78396
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Manuel+Ortiz+de+Sta.+Mar%C3%ADa+115,+San+Luis,+S.L.P./@22.1350375,-100.9291653,17z/data=!4m9!1m2!2m1!1sManuel+Ort%C3%ADz+de+Santa+Mar%C3%ADa+No.+115-B+Col.+Estrella+de+Oriente,+Zona+de+Abastos,+San+Luis+Potos%C3%AD,+S.L.P.+C.P.+78396!3m5!1s0x842aa3c854be86dd:0xbd1a3d248f25770e!8m2!3d22.1350378!4d-100.9269769!15sCnZNYW51ZWwgT3J0w616IGRlIFNhbnRhIE1hcsOtYSBOby4gMTE1LUIgQ29sLiBFc3RyZWxsYSBkZSBPcmllbnRlLCBab25hIGRlIEFiYXN0b3MsIFNhbiBMdWlzIFBvdG9zw60sIFMuTC5QLiBDLlAuIDc4Mzk2kgERY29tcG91bmRfYnVpbGRpbmc"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_hermosillo.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">HERMOSILLO</h5>
                        <p class="card-text">
                          Ave. Nayarit #84 Interior G3 Entre Gral. Jose Maria
                          Yañez Y Gral. Mariano Escobedo Col. San
                          Benito,Hermosillo, Sonora CP. 83190
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Nayarit+84,+San+Benito,+83190+Hermosillo,+Son./@29.0943697,-110.9613424,17z/data=!3m1!4b1!4m5!3m4!1s0x86ce8431b1e6d027:0x4bf81336aa0385bb!8m2!3d29.0943697!4d-110.9591537"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_morelia.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">MORELIA</h5>
                        <p class="card-text">
                          Gral. Amado Camacho No. 556 Int. 2 Col. Chapultepec
                          Oriente, Morelia, Michoacán C.P. 58260
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/IUSA+electromovilidad+MORELIA%2F+SOLO+OFICINAS+DE+VENTAS/@19.6904611,-101.1632337,15z/data=!4m5!3m4!1s0x0:0x8a2d6deb0d990f4e!8m2!3d19.6904608!4d-101.1632315"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tuxtla.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">TUXTLA GUTIÉRREZ</h5>
                        <p class="card-text">
                          9ª. Norte oriente 103-10 Col. Centro Tuxtla Gutiérrez,
                          Chiapas, C.P. 29000
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/9a+Avenida+Nte.+Ote.+103,+Zona+Sin+Asignaci%C3%B3n+de+Nombre+de+Col+42,+Tuxtla+Guti%C3%A9rrez,+Chis./@16.7617298,-93.1163262,17z/data=!3m1!4b1!4m5!3m4!1s0x85ecd8924a4a4909:0xb5cf3503a22e9aab!8m2!3d16.7617298!4d-93.1141375"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tijuana.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">TIJUANA</h5>
                        <p class="card-text">
                          Andador del Rey No 20051 Parque Ind. Girasol
                          Plataforma 8, nave D, Colonia Rancho el Águila Tijuana
                          B.C. C.P. 22215
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/search/Andador+del+Rey+No+20051+Parque+Ind.+Girasol+Plataforma+8,+nave+D,+Colonia+Rancho+el+%C3%81guila+Tijuana+B.C.+C.P.+22215/@32.4920007,-116.8974667,17z/data=!3m1!4b1"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_mochis.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">LOS MOCHIS</h5>
                        <p class="card-text">
                          Calle Los Granjeros No. 662 Ote. local 6 y 7 sector
                          Punto Verde. Los Mochis, Sinaloa, C.P. 81290.
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Iusa/@25.7438211,-109.0110983,15z/data=!4m5!3m4!1s0x0:0x9da84964db5f9758!8m2!3d25.7438211!4d-109.0110983"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_chihuahua.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">CHIHUAHUA</h5>
                        <p class="card-text">
                          Calle Luis G. Urbina No. 113 Col. Complejo Industrial
                          Chihuahua, Chihuahua, Chih. C.P. 31109
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Luis+G.+Urbina+113,+Complejo+Industrial+Chihuahua,+31136+Chihuahua,+Chih./@28.7199127,-106.1394018,17z/data=!3m1!4b1!4m5!3m4!1s0x86ea41f48beb81a3:0x64135ff0675a9ada!8m2!3d28.7199127!4d-106.1372131"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_guadalajara.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">GUADALAJARA</h5>
                        <p class="card-text">
                          Avenida Lázaro Cárdenas No. 37 Col. Zona Industrial
                          Guadalajara, Jal. C.P. 44940
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Calz.+L%C3%A1zaro+C%C3%A1rdenas+37,+Col%C3%B3n+Industrial,+44940+Guadalajara,+Jal./data=!4m2!3m1!1s0x8428b20b5a0606a3:0xed27c3724ffc7e7c?sa=X&ved=2ahUKEwj9z46A3-H0AhXplmoFHR52BpsQ8gF6BAgGEAE"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_merida.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">MÉRIDA</h5>
                        <p class="card-text">
                          Calle 60 No. 477, Nave 3 Parque Industrial No
                          Contaminantes Mérida, Yucatán, C.P. 97302
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps?q=Calle+60+No.+477,+Nave+3+Parque+Industrial+No+Contaminantes+M%C3%A9rida,+Yucat%C3%A1n,+C.P.+97302&rlz=1C1NHXL_esMX708MX708&um=1&ie=UTF-8&sa=X&ved=2ahUKEwin8Jev6OH0AhUukWoFHaQ_CcYQ_AUoAXoECAEQAw"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_monterrey.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">MONTERREY</h5>
                        <p class="card-text">
                          Av. D No. 1035-1041 Col. Hacienda los Morales, San
                          Nicolás de los Garza, N.L. C.P. 66495
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/search/Av.+D+No.+1035-1041+Col.+Hacienda+los+Morales,+San+Nicol%C3%A1s+de+los+Garza,+N.L.+C.P.+66495/@25.7115526,-100.2421644,17z/data=!3m1!4b1"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tampico.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">TAMPICO</h5>
                        <p class="card-text">
                          Emiliano Zapata No. 514, Col. Nuevo Progreso Tampico,
                          Tamps. C.P. 89318
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/place/Emiliano+Zapata+514,+Nuevo+Progreso,+89318+Tampico,+Tamps./@22.3096925,-97.8804076,17z/data=!3m1!4b1!4m5!3m4!1s0x85d7fbe750959c49:0x68d658ce6cfdaab0!8m2!3d22.3096925!4d-97.8782189"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_cancun.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">CANCÚN</h5>
                        <p class="card-text">
                          Av. Nichupte Smz. 512 Mz 10 Lote 1-01-A, Depto. 401,
                          privada Residencial Nichupté Cancún , Quintana Roo,
                          C.P. 77534
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps?q=Av.+Nichupte+Smz.+512+Mz+10+Lote+1-01-A,+Depto.+401,+privada+Residencial+Nichupt%C3%A9+Canc%C3%BAn+,+Quintana+Roo,+C.P.+77534&rlz=1C1NHXL_esMX708MX708&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi1lIns6eH0AhX2l2oFHTeBAVwQ_AUoAXoECAEQAw"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_villahermosa.JPG'"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">VILLAHERMOSA</h5>
                        <p class="card-text">
                          Cerrada da Antimonio S/N Bodega 7 Cd. Industrial
                          Villahermosa, Tabasco, C.P. 86010
                        </p>
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com/maps/search/Cerrada+de+Antimonio+S%2FN+Bodega+7+Cd.+Industrial+Villahermosa,+Tabasco,+C.P.+86010/@18.0241135,-92.9120868,17z/data=!3m1!4b1"
                          target="_blank"
                          ><i
                            class="fas fa-eye fa-1x"
                            style="font-size: 18px"
                          ></i
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
                          Ejemplo: Tu destino de vacaciones favorito.
                        </p>
                        <a href="https://seguridad.iusa.com.mx" target="_blank"
                          >Leer más</a
                        >
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
                        <!-- <a href="#" target="_blank">Leer más</a> -->
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
                        <!-- <a href="#" target="_blank">Leer más</a> -->
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
          <router-link :to="{ name: 'PhoneBook' }" class="text-black">
            <img
              class=""
              :src="'img/banner_ext.png'"
              alt="Banner Extensiones"
            />
          </router-link>
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
import WeatherView from "./weather_view/WeatherView.vue";
export default {
  name: "Home",
  components: {
    WeatherView,
  },
  mounted() {
    this.encode();
  },
  data() {
    return {
      email: null,
      employee_code: null,
    };
  },
  computed: {
    ...mapGetters({
      role: "auth/role",
      user: "auth/user",
    }),
  },
  methods: {
    encode() {
      this.email = btoa(this.user.email);
      this.employee_code = btoa(this.user.employee_code);
    },
  },
};
</script>

<style scoped>
.card-link {
  box-shadow: 5px 4px 10px #aaaaaa;
  border: 1px solid #bfbfbf;
}
</style>
