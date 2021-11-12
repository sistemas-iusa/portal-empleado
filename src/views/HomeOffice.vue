<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">HOME OFFICE</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-6" style="text-align:center;">
          <router-link :to="{ name: 'EvaluacionPersonal' }">
            <img :src="'img/banner_ho_01.png'" />
          </router-link>
        </div>
        <div class="col-xl-6" style="text-align:center;">
          <router-link :to="{ name: 'WeeklyEvaluation' }">
            <img :src="'img/banner_ho_02.png'" />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
