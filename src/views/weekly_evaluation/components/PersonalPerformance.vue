<template>
  <div class="row">
    <div class="col-xl-12" id="content-areas">
      <bar-chart v-if="data" :chartdata="data"></bar-chart>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "./chartjs/BarChart.js";
export default {
  components: {
    BarChart,
  },
  props: {
    weekSelect: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  watch: {
    weekSelect: function (val) {
      this.data = null;
      axios
        .post("/hoWeek", {
          id_poll: val,
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
