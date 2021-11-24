<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">SALAS FÍSICAS</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"></li>
      </ol>
      <div class="row">
        <!-- <div class="col-xl-6" style="text-align: center">
          <img :src="'img/banner_rs_01.png'" />
        </div> -->
        <div class="col-xl-6" style="text-align: center">
          <img :src="'img/banner_rs_02.png'" class="card-link" />
        </div>
        <div class="col-xl-6" style="text-align: center">
          <router-link :to="{ name: 'Reservations' }">
            <img :src="'img/banner_rs_03.png'" class="card-link" />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-link {
  box-shadow: 5px 4px 10px #aaaaaa;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
}
</style>
