<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4"></h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row"></div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-layer-group"></i>
              BANNERS INFORMATIVOS
            </div>
            <div class="card-body">
              <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade carousel-dark"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      style="height: 250px;"
                      :src="'img/banner_01.png'"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      style="height: 250px;"
                      :src="'img/banner_02.png'"
                      alt="Second slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Anterior</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Siguiente</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Vacaciones</h5>
              <div class="row">
                <div class="col-xl-3">
                  <span><i class="fas fa-calendar-check fa-3x"></i></span>
                </div>
                <div class="col-xl-9 text-right text-huge">
                  <div class="huge-3" style="color: seagreen;">
                    9 Días para su uso
                  </div>
                  <div class="huge-4">
                    9/12/2021 <span class="huge-2">Fecha Limite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3">
                  <span><i class="fas fa-cloud-sun fa-3x"></i></span>
                </div>
                <div class="col-xl-9 text-right text-huge">
                  <div>27 C</div>
                  <div class="huge-4">LOMAS ALTAS /CDMX</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <span style="font-size: 14px;"
                ><i class="fas fa-sync"></i> CONVERTIDOR DE ZONA HORARIA</span
              >
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-play-circle"></i>
              CALENDARIO
            </div>
            <div class="card-body">
              <img
                class="card-img-top"
                style="height: 250px;"
                width="80px"
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
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-play-circle"></i>
              VIDEOS IUSA
            </div>
            <div class="card-body">
              <img
                class="card-img-top"
                :src="'img/video_pantall.JPG'"
                alt="Card image cap"
              />
              <h5 class="card-title">Conoce la Experiencia IUSA</h5>
              <p class="card-text">
                ¡Lo que estabas buscando Miles de productos IUSA al alcence de
                un click. Desde clavijas hasta tinacos a la puerta de tu casa o
                negocio. comprar lo que necesitas y vive la experiencia IUSA!
              </p>
              <a href="#"><i class="fas fa-share-square fa-2x"></i></a>
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
              <div style="align-content:center;">
                <img
                  class="center"
                  :src="'img/logo_sd.png'"
                  alt="Card image serdesk"
                />
                <br />
                <img
                  class="center"
                  :src="'img/icon_ticket.png'"
                  alt="Card image ticket"
                />
                <br />
                <p>Levantamiento de Ticket</p>
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
        <div class="col-xl-3">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-map-marked"></i>
              PLANTAS IUSA
            </div>
            <div class="card-body">
              <img
                class="card-img-top"
                :src="'img/mapa_pantall.JPG'"
                alt="Card image mapa"
              />
              <h5 class="card-title">Lomas Altas</h5>
              <p class="card-text">
                Av. Paseo de la reforma 2608, Lomas Altas Miguel Hidalgo, 11950
                Ciuda de México, CDMX
              </p>
              <a href="#">+ 52 55 5261 8800</a>
              <br />
              <br />
              <a href="#"><i class="fas fa-share-square fa-2x"></i></a>
              <br />
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="card">
            <div class="card-body">
              <span style="font-size: 14px;"
                ><i class="fas fa-cog"></i> RENOVACIÓN DE FLOTILLAS VEH hace 5
                min.</span
              >
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <span style="font-size: 14px;"
                ><i class="fas fa-tools"></i> VENTANA DE MANTENIMIENTO. 7:00
                am</span
              >
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <span style="font-size: 14px;"
                ><i class="far fa-circle"></i> REFLEXIONES IUSA. Ayer</span
              >
            </div>
          </div>
          <div class="card cellContainer">
            <div class="card-body">
              <span style="font-size: 14px;"
                ><i class="fas fa-video"></i> NUEVO VIDEO IUSA 28/08/21</span
              >
            </div>
          </div>
          <div
            class="card cellContainer"
            style="color: seashell; background-color: grey;"
          >
            <div class="card-body centerItems">
              <span style="font-size: 14px;"> VER TODAS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
