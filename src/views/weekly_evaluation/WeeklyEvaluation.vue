<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <span style="font-weight: 700">EVALUACIÓN SEMANAL</span>
            </li>
            <li class="breadcrumb-item active">HOME OFFICE</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <br />
          <div class="form-group">
            <WeekSelect :warn="catchCapturedWeek" v-if="role[0].home" />
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="col-xl-6" v-if="!role[0].director">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <span style="font-weight: 500"> RENDIMIENTO PERSONAL</span>
            </div>
            <div class="card-body">
              <PersonalPerformance
                :weekSelect="capturedWeek"
              ></PersonalPerformance>
            </div>
          </div>
        </div>
        <div class="col-xl-6" v-if="!role[0].director">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <span style="font-weight: 500">
                RENDIMIENTO GENERAL POR DIRECCIÓN</span
              >
            </div>
            <div class="card-body">
              <PerformanceByDirection
                :weekSelect="capturedWeek"
              ></PerformanceByDirection>
            </div>
          </div>
        </div>
        <div class="col-xl-12" v-if="role[0].director && role[0].home">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <span style="font-weight: 500">
                RENDIMIENTO INDIVIDUAL POR USUARIO
              </span>
            </div>
            <div class="card-body">
              <IndividualPerformance
                :weekSelect="capturedWeek"
              ></IndividualPerformance>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="role[0].director">
        <div class="col-xl-6"></div>
        <div class="col-xl-6">
          <div class="form-group">
            <WeekSelectArea :warn="catchCapturedAreaWeek" />
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 20px" v-if="role[0].director">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <span style="font-weight: 500"> RENDIMIENTO POR ÁREAS </span>
            </div>
            <div class="card-body">
              <PerformanceByArea
                :weekSelect="capturedAreaWeek"
              ></PerformanceByArea>
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
import WeekSelect from "@/components/WeekSelect.vue";
import WeekSelectArea from "@/components/WeekSelectArea.vue";
export default {
  components: {
    WeekSelect,
    PersonalPerformance,
    PerformanceByArea,
    PerformanceByDirection,
    IndividualPerformance,
    WeekSelectArea,
  },
  computed: {
    ...mapGetters({
      role: "auth/role",
    }),
  },
  data() {
    return {
      capturedWeek: null,
      capturedAreaWeek: null,
    };
  },
  methods: {
    catchCapturedWeek(data) {
      this.capturedWeek = data;
    },
    catchCapturedAreaWeek(data) {
      this.capturedAreaWeek = data;
    },
  },
};
</script>
