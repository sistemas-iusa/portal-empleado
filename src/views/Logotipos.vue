<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">LOGOTIPOS</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="far fa-image"></i>
              LOGOTIPOS
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-4">
                  <img class="portadas-media" :src="'img/logo_png.png'" />
                  <div class="centerItems">
                    <a
                      :href="'img/logo_jpg.jpg'"
                      target="_blank"
                      download="IUSA"
                      >JPG |
                    </a>
                    <a
                      :href="'img/logo_png.png'"
                      target="_blank"
                      download="IUSA"
                      >PNG |
                    </a>
                    <a
                      :href="'img/logo_pdf.pdf'"
                      target="_blank"
                      download="IUSA"
                      >PDF |
                    </a>
                    <a
                      href="https://portal-distribuidores.iusa.com.mx/Documentos//Logotipos/logo.ai"
                      target="_blank"
                      download="IUSA"
                      >ILLUSTRATOR
                    </a>
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
