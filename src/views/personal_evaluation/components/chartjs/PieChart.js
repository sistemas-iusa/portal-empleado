import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    chartdata: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    colors: ["#2EDB5D", "#FFC400", "#33fff6", "#ff3c33", "#aa7911"],
    i: 0,
    chartdata2: {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          fill: false,
          backgroundColor: [],
          tension: 0.1,
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "",
        fontSize: 16,
        position: "bottom",
        color: "black",
      },
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
    },
  }),
  mounted() {
    for (const property in this.chartdata[0]) {
      const color = this.colors[this.i];
      this.chartdata2.labels.push(property);
      this.chartdata2.datasets[0].data.push(this.chartdata[0][property]);
      this.chartdata2.datasets[0].backgroundColor.push(color);
      this.i++;
    }

    this.options.title.text = this.chartdata["nombre"];
    this.renderChart(this.chartdata2, this.options);
  },
};
