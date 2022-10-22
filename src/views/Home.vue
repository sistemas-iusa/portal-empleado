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
            <router-link
              :to="{ name: 'Receipt' }"
              style="text-decoration: none"
            >
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-money-check-alt fa-2x card-icon"></i
                ></a>
                <footer class="text-black card-icon-text">
                  <small> Recibos<br />Nomina </small>
                </footer>
              </blockquote>
            </router-link>
          </div>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <a
              href="http://sisvia.iusa.com.mx/"
              class="text-white"
              target="_blank"
              style="text-decoration: none"
            >
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black">
                  <i class="fas fa-suitcase fa-2x card-icon"></i
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
            <a
              href="https://normatividad.iusa.com.mx"
              target="_blank"
              style="text-decoration: none"
            >
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-copy fa-2x card-icon"></i
                ></a>
                <footer class="text-black card-icon-text">
                  <small>
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
            <!--<router-link
              :to="{ name: 'Vacation' }"
              style="text-decoration: none"
            > -->
            <a href="#" style="text-decoration: none">
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-suitcase-rolling fa-2x card-icon"></i
                ></a>
                <footer class="text-black card-icon-text">
                  <small> Propuesta<br />Vacaciones </small>
                </footer>
              </blockquote>
            </a>
            <!--</router-link>-->
          </div>
        </div>
        <div class="col-xl-2">
          <div class="card text-center p-3 card-link">
            <router-link
              :to="{ name: 'MeetingRoom' }"
              style="text-decoration: none"
            >
              <blockquote class="blockquote mb-0">
                <a href="#" class="text-black"
                  ><i class="fas fa-users fa-2x card-icon"></i
                ></a>
                <footer class="text-black card-icon-text">
                  <small> Reservación Sala<br />Juntas </small>
                </footer>
              </blockquote>
            </router-link>
          </div>
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
                  <div class="carousel-item active">
                    <a
                      href="https://www.fundacionalejoperalta.org/publicaciones/multimedia/video-don-alejo"
                      target="_blank"
                    >
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_04.png'"
                        alt="Second slide"
                      />
                    </a>
                  </div>
                  <div class="carousel-item">
                    <a href="https://mapspde.com" target="_blank">
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_05.png'"
                        alt="Second slide"
                      />
                    </a>
                  </div>
                  <div class="carousel-item" v-if="role[0].contingency">
                    <router-link :to="{ name: 'PersonalEvaluation' }">
                      <img
                        class="d-block w-100 imaCarouselHeight"
                        :src="'img/banner_01.png'"
                        alt="First slide"
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item">
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
        <div class="col-xl-3">
          <div class="card" v-if="role[0].contingency">
            <div class="card-body">
              <a
                class="text-black"
                :href="
                  'https://contingencia.iusa.com.mx/validar_portal.php?e=' +
                  user.email +
                  '&c=' +
                  user.employee_code
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
                        <div onclick="window.open('https://www.youtube.com/watch?v=xwDF_kVQyic')">
                        <a
                          href="https://www.youtube.com/watch?v=xwDF_kVQyic"
                          target="_blank"
                          class="cardLinkSpace"
                          ><i
                            class="fas fa-eye fa-1x card-icon"
                            style="font-size: 18px"
                          ></i
                        ></a>
                        </div>
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
                        <div onclick="window.open('https://www.youtube.com/watch?v=X0zQUw6t6qk')">
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
                        <div onclick="window.open('https://www.youtube.com/watch?v=CIiY3jS_We0')">
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
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantall.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4197407182814!2d-99.239155!3d19.394262099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20108c844926f%3A0xd04e4c239a41243f!2sAv.%20Paseo%20de%20la%20Reforma%202608%2C%20Lomas%20Altas%2C%20Miguel%20Hidalgo%2C%2011950%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1663962230523!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">Lomas Altas</h5>
                        <p class="card-text">
                          Av. Paseo de la reforma 2608, Lomas Altas Miguel
                          Hidalgo, 11950 Ciuda de México, CDMX.
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Av.+Paseo+de+la+Reforma+2608,+Lomas+Altas,+Miguel+Hidalgo,+11950+Ciudad+de+M%C3%A9xico,+CDMX/@19.3942619,-99.2413432,17z/data=!3m1!4b1!4m5!3m4!1s0x85d20108c844926f:0xd04e4c239a41243f!8m2!3d19.3942619!4d-99.2391545')">
                          <a
                            class="cardLinkSpace"
                            href="https://www.google.com/maps/place/Av.+Paseo+de+la+Reforma+2608,+Lomas+Altas,+Miguel+Hidalgo,+11950+Ciudad+de+M%C3%A9xico,+CDMX/@19.3942619,-99.2413432,17z/data=!3m1!4b1!4m5!3m4!1s0x85d20108c844926f:0xd04e4c239a41243f!8m2!3d19.3942619!4d-99.2391545"
                            target="_blank"
                            ><i
                              class="fas fa-eye fa-1x card-icon"
                              style="font-size: 18px"
                            ></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla2.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.2513108078692!2d-99.79705888508974!3d19.659280886755894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d267c57b951f3b%3A0x7a3d295c8b53ab7b!2sIUSA%20Pasteje!5e0!3m2!1sen!2smx!4v1663962645795!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">IUSA Pasteje</h5>
                        <p class="card-text">
                          Carr. Panamericana Méx - Qro Km. 109, 50700,
                          Jocotitlán.
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/search/iusa+pastej%C3%A9+direcci%C3%B3n/@19.6545362,-99.7958877,16z/data=!3m1!4b1')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla3.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.557257062851!2d-99.10284469999999!3d19.4746466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f97c1f1769f5%3A0x157a6452c79822cd!2sIUSA%20ARAGON!5e0!3m2!1sen!2smx!4v1663962760686!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">Grupo IUSA Aragón</h5>
                        <p class="card-text">
                          Ote. 171 398, Pueblo de San Juan de Aragón, Gustavo A.
                          Madero, 07470 Ciudad de México, CDMX.
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Grupo+IUSA+Arag%C3%B3n/@19.4746466,-99.1050334,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f97c1f1769f5:0x157a6452c79822cd!8m2!3d19.4746466!4d-99.1028447')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_pantalla4.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.422022910381!2d-99.0793453!3d19.3508709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd5247696c7b%3A0x7e1b75551fafc098!2sIUSA%20IZTAPALAPA%20SA%20DE%20CV!5e0!3m2!1sen!2smx!4v1663962850661!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">IUSA IZTAPALAPA SA DE CV</h5>
                        <p class="card-text">
                          Cam. Real a San Lorenzo 284, San Miguel 8a ampliación,
                          Iztapalapa, 09837 Ciudad de México, CDMX.
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/IUSA+IZTAPALAPA+SA+DE+CV/@19.3508709,-99.081534,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fd5247696c7b:0x7e1b75551fafc098!8m2!3d19.3508709!4d-99.0793453')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_acapulco.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2376971879926!2d-99.87962329999999!3d16.8641322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca57f532f0a41d%3A0x2f6bd19e2fa2da18!2sAlonso%20Martin%2057%2C%20Fracc%20Magallanes%2C%20Magallanes%2C%2039670%20Acapulco%20de%20Ju%C3%A1rez%2C%20Gro.!5e0!3m2!1sen!2smx!4v1663963005738!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">ACAPULCO</h5>
                        <p class="card-text">
                          Alonso Martín No. 57 Fracc. Magallanes, Acapulco Gro,
                          C.P. 39680
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Alonso+Martin+57,+Fracc+Magallanes,+Magallanes,+39670+Acapulco+de+Ju%C3%A1rez,+Gro./@16.8641322,-99.881812,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca57f532f0a41d:0x2f6bd19e2fa2da18!8m2!3d16.8641322!4d-99.8796233')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_puebla.png'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.836325919727!2d-98.26344145869139!3d19.111245776412385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc5e2dd5f6dd9%3A0x9a4522e9ea1fbf7b!2sIusa%20puebla!5e0!3m2!1sen!2smx!4v1663963200199!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">Puebla</h5>
                        <p class="card-text">
                          Av. San Lorenzo Núm. 803, Parque Empresarial
                          Cuautlancingo, Cuautlancingo Puebla C.P. 72730
                        </p>
                        <div onclick="window.open('https://www.google.com.mx/maps/place/Iusa+puebla/@19.1107389,-98.2685913,16z/data=!4m5!3m4!1s0x85cfc5e2dd5f6dd9:0x9a4522e9ea1fbf7b!8m2!3d19.1107314!4d-98.2598187')">
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com.mx/maps/place/Iusa+puebla/@19.1107389,-98.2685913,16z/data=!4m5!3m4!1s0x85cfc5e2dd5f6dd9:0x9a4522e9ea1fbf7b!8m2!3d19.1107314!4d-98.2598187"
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
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_oaxaca.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3813.8774670665584!2d-96.7163323!3d17.0786453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7222bfdf867a7%3A0x4bda30597d9535ae!2sIusa%20Comercializadora!5e0!3m2!1sen!2smx!4v1663963337457!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">OAXACA</h5>
                        <p class="card-text">
                          Heroica Escuela Naval Militar No 401-Int 1, Reforma,
                          68050 Oaxaca de Juárez, Oax.
                        </p>
                        <div onclick="window.open('https://www.google.com.mx/maps/place/Iusa+Comercializadora/@17.0786453,-96.7163323,17z/data=!3m1!5s0x85c7222ed3ade24d:0x750914f29978790e!4m9!1m2!2m1!1siusa+oaxaca!3m5!1s0x85c7222bfdf867a7:0x4bda30597d9535ae!8m2!3d17.0786434!4d-96.7143362!15sCgtpdXNhIG9heGFjYSIDiAEBWg0iC2l1c2Egb2F4YWNhkgEVcGx1bWJpbmdfc3VwcGx5X3N0b3Jl4AEA')">
                        <a
                          class="cardLinkSpace"
                          href="https://www.google.com.mx/maps/place/Iusa+Comercializadora/@17.0786453,-96.7163323,17z/data=!3m1!5s0x85c7222ed3ade24d:0x750914f29978790e!4m9!1m2!2m1!1siusa+oaxaca!3m5!1s0x85c7222bfdf867a7:0x4bda30597d9535ae!8m2!3d17.0786434!4d-96.7143362!15sCgtpdXNhIG9heGFjYSIDiAEBWg0iC2l1c2Egb2F4YWNhkgEVcGx1bWJpbmdfc3VwcGx5X3N0b3Jl4AEA"
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
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_veracruz.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.5681750222066!2d-96.16029678079391!3d19.0827145796723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c369fb897d0899%3A0x4371758fc8df85c3!2sJardines%20de%20Dos%20Bocas%2C%2094273%20El%20Tejar%2C%20Ver.!5e0!3m2!1sen!2smx!4v1663963499372!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">VERACRUZ</h5>
                        <p class="card-text">
                          Carretera Veracruz-El Tejar KM 6.5 Col. Teresa Morales
                          de Delgado, El Tejar Mpio. de Medellín, Ver. C.P.
                          94273
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Jardines+de+Dos+Bocas,+94273+El+Tejar,+Ver./@19.0708208,-96.168043,15z/data=!4m9!1m2!2m1!1sCarretera+Veracruz-El+Tejar+KM+6.5+Col.+Teresa+Morales+de+Delgado,+El+Tejar+Mpio.+de+Medell%C3%ADn,+Ver.+C.P.+94273!3m5!1s0x85c369fb897d0899:0x4371758fc8df85c3!8m2!3d19.0811933!4d-96.1596583!15sCm9DYXJyZXRlcmEgVmVyYWNydXotRWwgVGVqYXIgS00gNi41IENvbC4gVGVyZXNhIE1vcmFsZXMgZGUgRGVsZ2FkbywgRWwgVGVqYXIgTXBpby4gZGUgTWVkZWxsw61uLCBWZXIuIEMuUC4gOTQyNzOSAQtwb3N0YWxfY29kZQ')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_leon.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.562151675541!2d-101.6567031!3d21.1698162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bb92b949b1e1b%3A0x43594a6e7e137db6!2sBlvrd%20Jose%20Mar%C3%ADa%20Morelos%20608%2C%20San%20Jose%20del%20Consuelo%2C%2037200%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1sen!2smx!4v1663963579714!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">LEÓN</h5>
                        <p class="card-text">
                          Blvd. José María Morelos #608 Col. San José del
                          Consuelo, León, Guanajuato, C.P. 37200
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Blvrd+Jose+Mar%C3%ADa+Morelos+608,+San+Jose+del+Consuelo,+37200+Le%C3%B3n,+Gto./@21.1698162,-101.6588918,17z/data=!3m1!4b1!4m5!3m4!1s0x842bb92b949b1e1b:0x43594a6e7e137db6!8m2!3d21.1698162!4d-101.6567031')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_snluis.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3695.762282868533!2d-100.9291653!3d22.1350375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa3c854382a3d%3A0xfe88a72a59ff84b8!2sIUSA%2C%20S.A.%20de%20C.V.!5e0!3m2!1sen!2smx!4v1663964160771!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">SAN LUIS POTOSÍ</h5>
                        <p class="card-text">
                          Manuel Ortíz de Santa María No. 115-B Col. Estrella de
                          Oriente, Zona de Abastos, San Luis Potosí, S.L.P. C.P.
                          78396
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Manuel+Ortiz+de+Sta.+Mar%C3%ADa+115,+San+Luis,+S.L.P./@22.1350375,-100.9291653,17z/data=!4m9!1m2!2m1!1sManuel+Ort%C3%ADz+de+Santa+Mar%C3%ADa+No.+115-B+Col.+Estrella+de+Oriente,+Zona+de+Abastos,+San+Luis+Potos%C3%AD,+S.L.P.+C.P.+78396!3m5!1s0x842aa3c854be86dd:0xbd1a3d248f25770e!8m2!3d22.1350378!4d-100.9269769!15sCnZNYW51ZWwgT3J0w616IGRlIFNhbnRhIE1hcsOtYSBOby4gMTE1LUIgQ29sLiBFc3RyZWxsYSBkZSBPcmllbnRlLCBab25hIGRlIEFiYXN0b3MsIFNhbiBMdWlzIFBvdG9zw60sIFMuTC5QLiBDLlAuIDc4Mzk2kgERY29tcG91bmRfYnVpbGRpbmc')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_hermosillo.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.383083256426!2d-110.9591537!3d29.094369699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8431b1e6d027%3A0x4bf81336aa0385bb!2sNayarit%2084%2C%20San%20Benito%2C%2083190%20Hermosillo%2C%20Son.!5e0!3m2!1sen!2smx!4v1663964260622!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">HERMOSILLO</h5>
                        <p class="card-text">
                          Ave. Nayarit #84 Interior G3 Entre Gral. Jose Maria
                          Yañez Y Gral. Mariano Escobedo Col. San
                          Benito,Hermosillo, Sonora CP. 83190
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Nayarit+84,+San+Benito,+83190+Hermosillo,+Son./@29.0943697,-110.9613424,17z/data=!3m1!4b1!4m5!3m4!1s0x86ce8431b1e6d027:0x4bf81336aa0385bb!8m2!3d29.0943697!4d-110.9591537')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_morelia.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15026.08115915457!2d-101.1632337!3d19.6904611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a2d6deb0d990f4e!2sIUSA%20electromovilidad%20MORELIA%2F%20SOLO%20OFICINAS%20DE%20VENTAS!5e0!3m2!1sen!2smx!4v1663964431369!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">MORELIA</h5>
                        <p class="card-text">
                          Gral. Amado Camacho No. 556 Int. 2 Col. Chapultepec
                          Oriente, Morelia, Michoacán C.P. 58260
                        </p>
                         <div onclick="window.open('https://www.google.com/maps/place/IUSA+electromovilidad+MORELIA%2F+SOLO+OFICINAS+DE+VENTAS/@19.6904611,-101.1632337,15z/data=!4m5!3m4!1s0x0:0x8a2d6deb0d990f4e!8m2!3d19.6904608!4d-101.1632315')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tuxtla.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.299172163599!2d-93.1141262!3d16.761784799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8924a4a4909%3A0xb5cf3503a22e9aab!2s9a%20Avenida%20Nte.%20Ote.%20103%2C%20Zona%20Sin%20Asignaci%C3%B3n%20de%20Nombre%20de%20Col%2042%2C%2029034%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1sen!2smx!4v1663964512709!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">TUXTLA GUTIÉRREZ</h5>
                        <p class="card-text">
                          9ª. Norte oriente 103-10 Col. Centro Tuxtla Gutiérrez,
                          Chiapas, C.P. 29000
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/9a+Avenida+Nte.+Ote.+103,+Zona+Sin+Asignaci%C3%B3n+de+Nombre+de+Col+42,+Tuxtla+Guti%C3%A9rrez,+Chis./@16.7617298,-93.1163262,17z/data=!3m1!4b1!4m5!3m4!1s0x85ecd8924a4a4909:0xb5cf3503a22e9aab!8m2!3d16.7617298!4d-93.1141375')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tijuana.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.2233078413656!2d-116.8991083348251!3d32.49346018105846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d93983e00cf57d%3A0x2dc7ba3c82c9652d!2sParque%20industrial%20El%20girasol%201!5e0!3m2!1sen!2smx!4v1663964666199!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">TIJUANA</h5>
                        <p class="card-text">
                          Andador del Rey No 20051 Parque Ind. Girasol
                          Plataforma 8, nave D, Colonia Rancho el Águila Tijuana
                          B.C. C.P. 22215
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/search/Andador+del+Rey+No+20051+Parque+Ind.+Girasol+Plataforma+8,+nave+D,+Colonia+Rancho+el+%C3%81guila+Tijuana+B.C.+C.P.+22215/@32.4920007,-116.8974667,17z/data=!3m1!4b1')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_mochis.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14375.2369778674!2d-109.0110983!3d25.7438211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f533816e4b1b1%3A0x18401efb6c631085!2sIusa%20Centro%20De%20Distribuci%C3%B3n%20Regional%20Zona%20Noroeste!5e0!3m2!1sen!2smx!4v1663964875223!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">LOS MOCHIS</h5>
                        <p class="card-text">
                          Calle Los Granjeros No. 662 Ote. local 6 y 7 sector
                          Punto Verde. Los Mochis, Sinaloa, C.P. 81290.
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Iusa/@25.7438211,-109.0110983,15z/data=!4m5!3m4!1s0x0:0x9da84964db5f9758!8m2!3d25.7438211!4d-109.0110983')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_chihuahua.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.987729851162!2d-106.1372131!3d28.719912700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea41f48beb81a3%3A0x64135ff0675a9ada!2sLuis%20G.%20Urbina%20113%2C%20Complejo%20Industrial%20Chihuahua%2C%2031136%20Chihuahua%2C%20Chih.!5e0!3m2!1sen!2smx!4v1663964959968!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">CHIHUAHUA</h5>
                        <p class="card-text">
                          Calle Luis G. Urbina No. 113 Col. Complejo Industrial
                          Chihuahua, Chihuahua, Chih. C.P. 31109
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Luis+G.+Urbina+113,+Complejo+Industrial+Chihuahua,+31136+Chihuahua,+Chih./@28.7199127,-106.1394018,17z/data=!3m1!4b1!4m5!3m4!1s0x86ea41f48beb81a3:0x64135ff0675a9ada!8m2!3d28.7199127!4d-106.1372131')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_guadalajara.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.681099127945!2d-103.3526346!3d20.641851499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b27354a32f6d%3A0x34d1b38b32ae6c5a!2sCalz.%20L%C3%A1zaro%20C%C3%A1rdenas%2037%2C%20Col%C3%B3n%20Industrial%2C%2044940%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1663965043053!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">GUADALAJARA</h5>
                        <p class="card-text">
                          Avenida Lázaro Cárdenas No. 37 Col. Zona Industrial
                          Guadalajara, Jal. C.P. 44940
                        </p>
                         <div onclick="window.open('https://www.google.com/maps/place/Calz.+L%C3%A1zaro+C%C3%A1rdenas+37,+Col%C3%B3n+Industrial,+44940+Guadalajara,+Jal./data=!4m2!3m1!1s0x8428b20b5a0606a3:0xed27c3724ffc7e7c?sa=X&ved=2ahUKEwj9z46A3-H0AhXplmoFHR52BpsQ8gF6BAgGEAE')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_merida.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.1878580942666!2d-89.64026978506674!3d21.065157885978632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56752ecf2739e9%3A0xa2899238a8b7e21f!2sGRUPO%20BEPENSA%20CORPORATIVO!5e0!3m2!1sen!2smx!4v1663965131873!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">MÉRIDA</h5>
                        <p class="card-text">
                          Calle 60 No. 477, Nave 3 Parque Industrial No
                          Contaminantes Mérida, Yucatán, C.P. 97302
                        </p>
                        <div onclick="window.open('https://www.google.com/maps?q=Calle+60+No.+477,+Nave+3+Parque+Industrial+No+Contaminantes+M%C3%A9rida,+Yucat%C3%A1n,+C.P.+97302&rlz=1C1NHXL_esMX708MX708&um=1&ie=UTF-8&sa=X&ved=2ahUKEwin8Jev6OH0AhUukWoFHaQ_CcYQ_AUoAXoECAEQAw')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_monterrey.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.637185530417!2d-100.24951748497996!3d25.71643398365733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eacf846b3deb%3A0x3fd08c8d0b518909!2sH-E-B%20LOS%20MORALES!5e0!3m2!1sen!2smx!4v1663965206411!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">MONTERREY</h5>
                        <p class="card-text">
                          Av. D No. 1035-1041 Col. Hacienda los Morales, San
                          Nicolás de los Garza, N.L. C.P. 66495
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/search/Av.+D+No.+1035-1041+Col.+Hacienda+los+Morales,+San+Nicol%C3%A1s+de+los+Garza,+N.L.+C.P.+66495/@25.7115526,-100.2421644,17z/data=!3m1!4b1')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_tampico.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.16252095054!2d-97.87821890000001!3d22.309692499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7fbe750959c49%3A0x68d658ce6cfdaab0!2sEmiliano%20Zapata%20514%2C%20Nuevo%20Progreso%2C%2089318%20Tampico%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1663965270339!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">TAMPICO</h5>
                        <p class="card-text">
                          Emiliano Zapata No. 514, Col. Nuevo Progreso Tampico,
                          Tamps. C.P. 89318
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/place/Emiliano+Zapata+514,+Nuevo+Progreso,+89318+Tampico,+Tamps./@22.3096925,-97.8804076,17z/data=!3m1!4b1!4m5!3m4!1s0x85d7fbe750959c49:0x68d658ce6cfdaab0!8m2!3d22.3096925!4d-97.8782189')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_cancun.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.6707693935218!2d-86.86272880655173!3d21.138802130360776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b7565334411%3A0x3685e191fad3672f!2sResidencial%20Nichupte!5e0!3m2!1sen!2smx!4v1663965434123!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">CANCÚN</h5>
                        <p class="card-text">
                          Av. Nichupte Smz. 512 Mz 10 Lote 1-01-A, Depto. 401,
                          privada Residencial Nichupté Cancún , Quintana Roo,
                          C.P. 77534
                        </p>
                        <div onclick="window.open('https://www.google.com/maps?q=Av.+Nichupte+Smz.+512+Mz+10+Lote+1-01-A,+Depto.+401,+privada+Residencial+Nichupt%C3%A9+Canc%C3%BAn+,+Quintana+Roo,+C.P.+77534&rlz=1C1NHXL_esMX708MX708&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi1lIns6eH0AhX2l2oFHTeBAVwQ_AUoAXoECAEQAw')">
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
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                      <!--<img
                        class="card-img-top cardImageSize"
                        :src="'img/mapa_villahermosa.JPG'"
                        alt="Card image cap"
                      />-->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0085889088514!2d-92.91446149349211!3d18.024805021208362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd877b0c083db%3A0xc3bd72c04dcf57d!2sIUSA%20Villahermosa!5e0!3m2!1sen!2smx!4v1663965536180!5m2!1sen!2smx"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">VILLAHERMOSA</h5>
                        <p class="card-text">
                          Cerrada da Antimonio S/N Bodega 7 Cd. Industrial
                          Villahermosa, Tabasco, C.P. 86010
                        </p>
                        <div onclick="window.open('https://www.google.com/maps/search/Cerrada+de+Antimonio+S%2FN+Bodega+7+Cd.+Industrial+Villahermosa,+Tabasco,+C.P.+86010/@18.0241135,-92.9120868,17z/data=!3m1!4b1')">
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
                        <!--<a
                          href="https://seguridad.iusa.com.mx"
                          target="_blank"
                          class="card-icon"
                          >Leer más</a
                        >-->
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
    //this.encode();
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
    /* encode() {
      console.log(this.user);
      this.email = btoa(this.user.email);
      this.employee_code = btoa(this.user.employee_code);
    }, */
  },
};
</script>

<style scoped>
.card-link {
  box-shadow: 5px 4px 10px #aaaaaa;
  border: 1px solid #bfbfbf;
}
</style>
