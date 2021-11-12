<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item ">EVALUACIÓN SEMANAL</li>
            <li class="breadcrumb-item active">HOME OFFICE</li>
          </ol>
        </div>
        <!-- <div class="col-xl-6">
          <br />
          <div class="form-group">
            <WeekSelect :weeks_array="data" :avisar="onResultados"/>
          </div>
        </div> -->
      </div>
      <div class="row">
        <div class="col-xl-6" v-if="!role[0].director">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              RENDIMIENTO PERSONAL
            </div>
            <div class="card-body">
              <PersonalPerformance></PersonalPerformance>
              <!-- <div id="chart_div-1" class="graphPanel"></div> -->
            </div>
          </div>
        </div>
        <div class="col-xl-6" v-if="!role[0].director">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              RENDIMIENTO GENERAL POR DIRECCIÓN
            </div>
            <div class="card-body">
              <PerformanceByDirection></PerformanceByDirection>
              <!-- <div id="chart_div-2" class="graphPanel"></div> -->
            </div>
          </div>
        </div>
        <div class="col-xl-12" v-if="role[0].director">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              RENDIMIENTO INDIVIDUAL POR USUARIO
            </div>
            <div class="card-body">
              <IndividualPerformance></IndividualPerformance>
              <!-- <div id="chart_div-2" class="graphPanel"></div> -->
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              RENDIMIENTO POR ÁREAS
            </div>
            <div class="card-body">
              <PerformanceByArea></PerformanceByArea>
              <!-- <div id="chart_div-2" class="graphPanel"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import PersonalPerformance from "./components/PersonalPerformance.vue";
import PerformanceByDirection from "./components/PerformanceByDirection.vue";
import PerformanceByArea from "./components/PerformanceByArea.vue";
import IndividualPerformance from "./components/IndividualPerformance.vue";
//import WeekSelect from "@/components/WeekSelect.vue";
export default {
  components: {
    //WeekSelect,
    PersonalPerformance,
    PerformanceByArea,
    PerformanceByDirection,
    IndividualPerformance,
  },
  computed: {
    ...mapGetters({
      role: "auth/role",
    }),
  },
};
</script>
