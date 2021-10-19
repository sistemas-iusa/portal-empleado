<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading"></div>
          <a class="nav-link" href="index.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
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
              <a
                class="nav-link"
                href="http://172.16.171.10/WebServices/NomIusa_Pro_ExtraeRecibo/ExtraeRecibo.asmx"
                >Recibos de Nómina</a
              >
              <a class="nav-link" href="">Solicitud de Vacaciones</a>
              <a class="nav-link" href="">Reg. de Gastos de Viaje</a>
              <a class="nav-link" href="http://normatividad.iusa.com.mx"
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
              <a class="nav-link" href="https://mail.iusa.com.mx/">Webmail </a>
              <a class="nav-link" href="https://contingencia.iusa.com.mx/"
                >Contingencia IUSA</a
              >
              <a class="nav-link" href="#">Salas Físicas</a>
              <a class="nav-link" href="#">Audioconferencias</a>
              <a class="nav-link" href="#">Directorio de Exts</a>
              <a class="nav-link" href="http://servicedesk.iusa.com.mx"
                >Service Desk</a
              >
              <a class="nav-link" href="https://seguridad.iusa.com.mx"
                >Seguridad IUSA</a
              >
              <a class="nav-link" href="#">Nuevas Ideas IUSA</a>
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
              <a class="nav-link" href="https://iusa.com.mx/listas_de_precios/"
                >Listas de Precios</a
              >
              <a class="nav-link" href="#">Logotipos</a>
              <a class="nav-link" href="#">Folletos</a>
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
export default {};
</script>

<style></style>
