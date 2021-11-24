<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mt-4">
            <div class="text-center">
              <br />
              <img src="img/logo_pe.svg" />&nbsp;&nbsp;<span
                class="centerLine"
              ></span
              >&nbsp;&nbsp;<img src="img/logo_iusa_gray.svg" />
              <br />
            </div>
            <img class="mb-4" src="img/error_404.png" />
            <p class="card-icon-text-2">PÁGINA NO ENCONTRADA</p>
            <p class="huge-3">
              Ir a Home.
              <router-link :to="{ name: 'Home' }" class="navbar-brand ps-3">
                Click aquí.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
