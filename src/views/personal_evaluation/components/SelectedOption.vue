<template>
  <div class="row">
    <div
      class="col-xl-6"
      v-for="question in data"
      :key="question.id_question"
      :class="{ 'col-xl-12': question.have_child }"
    >
      <p></p>
      <!-- {{ question.id_question }}-{{ question.question }} -->
      <span style="font-weight: 500">{{ question.question }}</span>
      <p></p>
      <PrintGraph
        :id_question="question.id_question"
        :have_child="question.have_child"
        :type="question.type"
      ></PrintGraph>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import PrintGraph from "./PrintGraph.vue";
export default {
  components: {
    PrintGraph,
  },
  computed: {
    ...mapGetters({
      evaluation_select: "evaluation/evaluationSelect",
      seccion_select: "evaluation/seccionSelect",
    }),
  },
  data() {
    return {
      data: null,
      answer: null,
      error: null,
    };
  },
  watch: {
    seccion_select: function (val) {
      this.data = null;
      axios
        .post("/HOPersonalQuestions", {
          id_poll: this.evaluation_select,
          id_section: val,
        })
        .then((response) => {
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    evaluation_select: function (val) {
      this.data = null;
      axios
        .post("/HOPersonalQuestions", {
          id_poll: val,
          id_section: this.seccion_select,
        })
        .then((response) => {
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
