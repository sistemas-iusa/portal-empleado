<template>
  <div id="chart-container"></div>
</template>
<script>
import FusionCharts from "fusioncharts";
export default {
  props: {
    chartType: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "140",
    },
    dataSource: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    dataFormat: "json",
  }),
  mounted() {
    this.render();
  },
  methods: {
    render() {
      const fusionChart = new FusionCharts({
        type: this.chartType,
        width: this.width,
        height: this.height,
      });

      fusionChart.setJSONData(this.dataSource);
      fusionChart.render(this.$root.$el.querySelector("#chart-container"));
    },
  },
};
</script>
