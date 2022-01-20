<template>
  <div id="layoutSidenav_nav" v-if="authenticated">
    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div
            class="sb-sidenav-menu-heading"
            style="color: #000; text-align: center; font-weight: 700"
          >
            <!-- <img
              :src="'img/photo_user_32.png'"
              alt=""
              style="border-radius: 50%"
              width="32px;"
            />
            &nbsp; -->{{ user.name }}
          </div>
          <router-link :to="{ name: 'Home' }" class="nav-link">
            <div class="sb-nav-link-icon">
              <i class="fas fa-home"></i>
            </div>
            Home
          </router-link>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseRH"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="far fa-address-card"></i>
            </div>
            RH
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseRH"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link :to="{ name: 'Receipt' }" class="nav-link"
                >Recibos de Nómina</router-link
              >
              <a class="nav-link" href="#" style="font-size: 12px"
                >Solicitud de Vacaciones<span
                  class="badge badge-info"
                  style="
                    color: #fff;
                    background-color: #17a2b8;
                    font-size: 10px;
                  "
                  >Próximamente</span
                ></a
              >
              <a
                class="nav-link"
                href="http://viaticos.iusa.com.mx:8081/neonsh/modulos/login/login.xhtml"
                target="_blank"
                >Reg. de Gastos de Viaje</a
              >
              <a
                class="nav-link"
                :href="'pdf/CODIGO_CONDUCTA_Y_ETICA_EMPRESARIAL_B2E.pdf'"
                target="_blank"
                >Código de Conducta</a
              >
              <a
                class="nav-link"
                href="https://normatividad.iusa.com.mx"
                target="_blank"
                >Normatividad</a
              >
              <a
                class="nav-link"
                :href="'pdf/REGLAMENTO_INTERNO_DE_TRABAJO_PASTEJE_B2E.pdf'"
                target="_blank"
                >Reglamento Interno</a
              >
            </nav>
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseServ"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-th-large"></i>
            </div>
            Servicios
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseServ"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                class="nav-link"
                href="https://mail.iusa.com.mx/"
                target="_blank"
                >Webmail
              </a>
              <!-- <router-link
                :to="{ name: 'HomeOffice' }"
                class="nav-link"
                v-if="role[0].contingency"
                >Home Office IUSA</router-link
              > -->
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
                v-if="role[0].contingency"
              >
                Home Office IUSA
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
                v-if="role[0].contingency"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link
                    :to="{ name: 'HomeOffice' }"
                    class="nav-link"
                    v-if="role[0].contingency"
                    >Evaluaciones</router-link
                  >
                  <a
                    class="nav-link"
                    :href="
                      'https://contingencia.iusa.com.mx/validar_portal.php?e=' +
                      email +
                      '&c=' +
                      employee_code
                    "
                    target="_blank"
                  >
                    Contingencia</a
                  >
                </nav>
              </div>
              <!-- <a
                v-if="role[0].contingency"
                class="nav-link"
                href="https://contingencia.iusa.com.mx/"
                target="_blank"
                >Contingencia IUSA</a
              > -->
              <router-link :to="{ name: 'MeetingRoom' }" class="nav-link"
                >Salas Físicas</router-link
              >
              <!-- <a class="nav-link" href="#">Audioconferencias</a> -->
              <router-link :to="{ name: 'PhoneBook' }" class="nav-link">
                Directorio de Exts.
              </router-link>
              <a
                class="nav-link"
                href="http://servicedesk.iusa.com.mx"
                target="_blank"
                >Service Desk</a
              >
              <a
                class="nav-link"
                href="https://seguridad.iusa.com.mx"
                target="_blank"
                >Seguridad IUSA</a
              >
              <a
                class="nav-link"
                href="https://www.tiendaiusa.com/?gclid=CjwKCAiAhreNBhAYEiwAFGGKPHVDFJx8-v99dL-UA1JeoBdI33npHISUkrFyW8N-IyEEeUWCXYsIFxoCJv0QAvD_BwE"
                target="_blank"
                >Tienda IUSA</a
              >
            </nav>
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseDesc"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-cloud-download-alt"></i>
            </div>
            Descargables
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseDesc"
            aria-labelledby="headingThree"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <router-link :to="{ name: 'Catalogs' }" class="nav-link"
                >Catálogos</router-link
              >
              <router-link :to="{ name: 'Logotipos' }" class="nav-link"
                >Logotipos</router-link
              >
            </nav>
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseDs"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-book"></i>
            </div>
            Manuales Portal
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseDs"
            aria-labelledby="headingThree"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                v-if="user.adm_mrooms == 'true'"
                class="nav-link"
                :href="'pdf/INSTRUCTIVO PARA EL ADMINISTRADOR DE UNA SALA DE JUNTAS.pdf'"
                target="_blank"
                >Administrador de Salas</a
              >
              <a
                class="nav-link"
                :href="'pdf/INSTRUCTIVO PARA RESERVAR UNA SALA DE JUNTAS.pdf'"
                target="_blank"
                >Reservar Sala</a
              >
              <a
                class="nav-link"
                :href="'pdf/INSTRUCTIVO DE NAVEGACION.pdf'"
                target="_blank"
                >Manual General</a
              >
            </nav>
          </div>
          <a class="nav-link">
            <div class="sb-nav-link-icon"></div>
            <label style="font-weight: 700; font-size: 14px">SÍGUENOS:</label>
          </a>
          <div class="row container">
            <div class="col-xl-4">
              <a
                class="nav-link"
                href="https://www.facebook.com/IusaMexico/"
                target="_blank"
              >
                <img
                  :src="'img/icon_fb.png'"
                  alt=""
                  style="border-radius: 50%"
                  width="32px;"
                />
              </a>
              <a
                class="nav-link"
                href="https://www.youtube.com/channel/UCt2JxYdlCygc11tfH6s0sWA"
                target="_blank"
              >
                <img
                  :src="'img/icon_ytb.png'"
                  alt=""
                  style="border-radius: 50%"
                  width="32px;"
                />
              </a>
            </div>
            <div class="col-xl-4">
              <a
                class="nav-link"
                href="https://www.instagram.com/iusamexico/"
                target="_blank"
              >
                <img
                  :src="'img/icon_inst.png'"
                  alt=""
                  style="border-radius: 50%"
                  width="32px;"
                />
              </a>
              <a
                class="nav-link"
                href="https://wa.me/5215551181585"
                target="_blank"
              >
                <img
                  :src="'img/Componente 61 – 1.png'"
                  alt=""
                  style="border-radius: 50%"
                  width="32px;"
                />
              </a>
            </div>
            <div class="col-xl-4">
              <a
                class="nav-link"
                href="https://twitter.com/iusamexico"
                target="_blank"
              >
                <img
                  :src="'img/icon_tw.png'"
                  alt=""
                  style="border-radius: 50%"
                  width="32px;"
                />
              </a>
            </div>
          </div>
          <p></p>
          <router-link :to="{ name: 'SuggestionsMailbox' }" class="nav-link">
            <div class="sb-nav-link-icon">
              <img :src="'img/icon_mail.svg'" style="height: 1.4em" />
            </div>
            <span style="color: #ba354b; font-weight: 400; font-size: 16px"
              >Buzon de Sugerencias</span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
      authenticated: "auth/authenticated",
      user: "auth/user",
      role: "auth/role",
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
.router-link-exact-active .sb-nav-link-icon {
  color: #0d6efd !important;
  font-weight: 700;
}
.router-link-exact-active {
  color: #0d6efd !important;
  font-weight: 700;
}
</style>
