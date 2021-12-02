<template>
  <div class="row" v-if="data">
    <bar-chart
      v-if="type == 'bar' && !have_child"
      :chartdata="data"
    ></bar-chart>
    <pie-chart
      v-if="type == 'pie' && !have_child"
      :chartdata="data"
    ></pie-chart>
    <div class="col-xl-12" v-if="have_child" id="content-areas">
      <div v-for="(item, label) in data" :key="item.id">
        <center>
          <strong>{{ label }}</strong>
        </center>
        <bar-chart-children :chartdata="data[label]"></bar-chart-children>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import BarChart from "./chartjs/BarChart.js";
import PieChart from "./chartjs/PieChart.js";
import BarChartChildren from "./chartjs/BarChartChildren.js";
export default {
  components: {
    BarChart,
    PieChart,
    BarChartChildren,
  },
  computed: {
    ...mapGetters({
      evaluation_select: "evaluation/evaluationSelect",
      seccion_select: "evaluation/seccionSelect",
    }),
  },
  props: {
    id_question: {
      type: Number,
      default: null,
    },
    have_child: {
      type: Boolean,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  async mounted() {
    let self = this;
    self.getAnswers();
  },
  methods: {
    getAnswers() {
      this.data = null;
      if (this.have_child == false) {
        axios
          .post("/HOPersonalAnswareFather", {
            id_poll: this.evaluation_select,
            id_question: this.id_question,
          })
          .then((response) => {
            this.data = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (this.have_child == true) {
        axios
          .post("/HOPersonalAnswareChild", {
            id_poll: this.evaluation_select,
            id_question: this.id_question,
          })
          .then((response) => {
            this.data = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>

<style>
#content-areas {
  height: 450px;
  overflow-x: scroll;
  display: flex;
  width: 100%;
}
</style>
