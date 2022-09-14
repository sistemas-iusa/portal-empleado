<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">
        DETALLE <span style="font-weight: 200"> / VACACIONES</span>
      </h3>
      <div class="row">
        <p></p>
        <vacation-detail :idVacation="$route.params.id"></vacation-detail>
        <p></p>
        <general-information></general-information>
        <p></p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.text-green-succes {
  color: #36bc27;
}
.text-red-cancel {
  color: red;
}
</style>

<script>
import GeneralInformation from "./components/GeneralInformation.vue";
import VacationDetail from "./components/Detail.vue";
export default {
  name: "VacationRequest",
  components: {
    GeneralInformation,
    VacationDetail,
  },
};
</script>

<style></style>
