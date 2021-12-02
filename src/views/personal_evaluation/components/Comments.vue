<template>
  <div class="row" v-if="data">
    <div class="marginCardsText justify-text-div" v-if="data.length != 0">
      <h5 class="card-icon-text-2">Comentarios</h5>
      <br />
      <p
        class="card-text"
        v-for="conclucion in data"
        :key="conclucion.id_question"
      >
        {{ conclucion.conclusiones }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
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
        .post("/HOPersonalConclusion", {
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
        .post("/HOPersonalConclusion", {
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
