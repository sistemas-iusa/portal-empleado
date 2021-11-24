<template>
  <div class="row">
    <div class="col-xl-12" id="content-areas">
      <div v-for="(item, index) in data" :key="item.id">
        <bar-chart :chartdata="data[index]"></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "./chartjs/BarChartDirector.js";
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
        .post("/hoWeekDirectorTeam", {
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
