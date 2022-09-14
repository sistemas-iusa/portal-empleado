<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <h3 class="mt-4">
          PROPUESTA <span style="font-weight: 200"> / VACACIONES</span>
        </h3>
      </div>
      <p></p>
      <!-- <div class="row">
        <div class="col-xl-12">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <span style="font-weight: 700">SOLICITUD</span>
            </li>
            <li class="breadcrumb-item active">VACACIONES</li>
          </ol>
        </div>
      </div> -->
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black"></li>
      </ol> -->
      <div class="row">
        <div class="col-xl-12">
          <!-- <div class="card-body"> -->
          <!-- <div class="row"> -->
          <!-- <div class="col-xl-12"> -->
          <general-information></general-information>
          <vacation-form></vacation-form>
          <!-- </div> -->
          <!-- <authorization-signatures></authorization-signatures>-->
          <!-- </div> -->
          <!-- </div> -->
        </div>
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
//import AuthorizationSignatures from './components/AuthorizationSignatures.vue';
import GeneralInformation from "./components/GeneralInformation.vue";
import VacationForm from "./components/VacationForm.vue";
export default {
  name: "VacationRequest",
  components: {
    GeneralInformation,
    VacationForm,
    //AuthorizationSignatures,
  },
};
</script>
