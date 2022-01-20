<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">CÁTALOGOS</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-book"></i>
              <span> CÁTALOGOS</span>
              <button
                class="btn btn-primary"
                style="float: right"
                @click="language = !language"
              >
                {{ language ? "ESP" : "ENG" }}
              </button>
            </div>
            <div class="card-body">
              <div class="row" v-if="!language">
                <div class="col-xl-4" style="text-align: center">
                  <a
                    href="https://iusa.com.mx/catalogo_construccion/"
                    target="_blank"
                    ><img
                      class="portadas-media"
                      src="https://portal-distribuidores.iusa.com.mx/Documentos/Catalogos/Portadas/catalogo_construccion_2021.png"
                  /></a>
                </div>
                <div class="col-xl-4" style="text-align: center">
                  <a
                    href="https://iusa.com.mx/catalogo_energia/"
                    target="_blank"
                    ><img
                      class="portadas-media"
                      src="https://portal-distribuidores.iusa.com.mx/Documentos/Catalogos/Portadas/catalogo_energia.png"
                  /></a>
                </div>
                <div class="col-xl-4" style="text-align: center">
                  <a
                    href="https://portal-distribuidores.iusa.com.mx/Documentos/Catalogos/Cat_Proyectos.pdf"
                    target="_blank"
                    ><img
                      class="portadas-media"
                      src="https://portal-distribuidores.iusa.com.mx/Documentos/Catalogos/Portadas/catalogo_proyectos.png"
                  /></a>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-xl-4" style="text-align: center">
                  <a
                    href="https://eng.iusa.com.mx/construction_catalog/"
                    target="_blank"
                    ><img class="portadas-media" :src="'img/caratula_eng.png'"
                  /></a>
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
export default {
  data() {
    return {
      language: false,
    };
  },
};
</script>
