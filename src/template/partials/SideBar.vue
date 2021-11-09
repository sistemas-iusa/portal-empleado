<template>
  <div id="layoutSidenav_nav" v-if="authenticated">
    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div
            class="sb-sidenav-menu-heading"
            style="color:#000;text-align:center;"
          >
            {{ user.name }}
          </div>
          <a class="nav-link" href="/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-home"></i>
            </div>
            Home
          </a>
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
              <a class="nav-link" href="">Solicitud de Vacaciones</a>
              <a
                class="nav-link"
                href="http://viaticos.iusa.com.mx:8081/neonsh/modulos/login/login.xhtml"
                target="_blank"
                >Reg. de Gastos de Viaje</a
              >
              <a class="nav-link" href="">Código de Conducta</a>
              <a
                class="nav-link"
                href="https://normatividad.iusa.com.mx"
                target="_blank"
                >Normatividad</a
              >
              <a class="nav-link" href="">Reglamento Interno</a>
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
              <router-link :to="{ name: 'HomeOffice' }" class="nav-link"
                >Home Office IUSA</router-link
              >
              <a
                class="nav-link"
                href="https://contingencia.iusa.com.mx/"
                target="_blank"
                >Contingencia IUSA</a
              >
              <a class="nav-link" href="#">Salas Físicas</a>
              <a class="nav-link" href="#">Audioconferencias</a>
              <a class="nav-link" href="#">Directorio de Exts.</a>
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
              <a class="nav-link" href="#">Catálogos</a>
              <a
                class="nav-link"
                href="https://iusa.com.mx/listas_de_precios/"
                target="_blank"
                >Listas de Precios</a
              >
              <a class="nav-link" href="#">Logotipos</a>
            </nav>
          </div>
          <a class="nav-link" href="#">
            <div class="sb-nav-link-icon">
              <img :src="'img/icon_mail.svg'" style="height:1.25em" />
            </div>
            <span style="color:#ba354b;">Buzon de Sugerencias</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {},
};
</script>

<style></style>
