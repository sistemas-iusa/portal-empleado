<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">HOME OFFICE</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-6" style="text-align: center">
          <router-link :to="{ name: 'PersonalEvaluation' }">
            <img :src="'img/banner_ho_01.png'" class="card-link" />
          </router-link>
        </div>
        <div class="col-xl-6" style="text-align: center">
          <router-link :to="{ name: 'WeeklyEvaluation' }">
            <img :src="'img/banner_ho_02.png'" class="card-link" />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.card-link {
  box-shadow: 5px 4px 10px #aaaaaa;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
}
</style>
