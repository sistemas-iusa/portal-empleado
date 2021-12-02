<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <span style="font-weight: 700">EVALUACIÓN PERSONAL</span>
            </li>
            <li class="breadcrumb-item active">HOME OFFICE</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <br />
          <div class="form-group">
            <SelectEvaluation />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <span style="font-weight: 500"> EVALUACIÓN </span>
            </div>
            <div class="card-body">
              <Section />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import SelectEvaluation from "@/views/personal_evaluation/components/SelectEvaluation.vue";
import Section from "@/views/personal_evaluation/components/Section.vue";
export default {
  components: {
    SelectEvaluation,
    Section,
  },
  computed: {
    ...mapGetters({
      role: "auth/role",
    }),
  },
};
</script>

<style></style>
