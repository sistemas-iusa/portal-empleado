<template>
  <div class="form-group">
    <select
      v-model="evaluation_select_1"
      class="form-control"
      @change="return_evaluation_number()"
    >
      <option
        v-for="evaluation in evaluation_array"
        :key="evaluation.id"
        :value="evaluation.id_encuesta_p"
      >
        {{ evaluation.nombre_encuesta.toUpperCase() }} [
        {{ evaluation.date.toUpperCase() }} ]
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "EvaluationSelect",
  computed: {
    ...mapGetters({
      evaluation_select: "evaluation/evaluationSelect",
    }),
  },
  data() {
    return {
      evaluation_array: [],
      evaluation_select_1: null,
    };
  },
  async mounted() {
    let self = this;
    self.getArray();
  },
  methods: {
    ...mapActions({
      changeEvaluationSelect: "evaluation/changeEvaluationSelect",
    }),
    getArray() {
      this.changeEvaluationSelect(null);
      axios
        .get("getHOPersonalPoll")
        .then((response) => {
          this.evaluation_array = response.data;
          this.evaluation_select_1 = this.evaluation_array[0]["id_encuesta_p"];
          this.changeEvaluationSelect(this.evaluation_select_1);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    return_evaluation_number() {
      this.changeEvaluationSelect(this.evaluation_select_1);
    },
  },
};
</script>
