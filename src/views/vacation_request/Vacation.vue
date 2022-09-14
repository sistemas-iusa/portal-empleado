<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">VACACIONES</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"></li>
      </ol>
      <div class="row">
        <div class="col-xl-6" style="text-align: center">
          <router-link :to="{ name: 'VacationRequest' }">
            <img :src="'img/banner_sv_01.png'" class="card-link" />
          </router-link>
        </div>
        <div class="col-xl-6" style="text-align: center">
          <router-link :to="{ name: 'VacationMyRequest' }">
            <img :src="'img/banner_sv_02.png'" class="card-link" />
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
