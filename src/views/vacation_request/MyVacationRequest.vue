<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">MIS PROPUESTAS <span style="font-weight: 200"> / VACACIONES</span></h3>
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          MIS SOLICITUDES
        </li>
        <li class="breadcrumb-item">VACACIONES</li>
      </ol> -->
      <div class="row">
        <my-vacation-request></my-vacation-request>
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
import MyVacationRequest from "./components/MyRequest.vue";
export default {
  name: "VacationMyRequest",
  components: {
    MyVacationRequest,
  },
};
</script>

<style></style>
