import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
      labels: [""],
      datasets: [],
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
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        x: {
          display: false,
        },
        x1: {
          offset: true,
          gridLines: {
            display: false,
          },
        },
      },
    },
  }),
  mounted() {
    for (const property in this.chartdata[0]) {
      const color = this.colors[this.i];
      const object = {
        label: [property],
        backgroundColor: [color],
        data: [this.chartdata[0][property]],
      };
      this.chartdata2.datasets.push(object);
      this.i++;
    }

    this.options.title.text = this.chartdata["nombre"];
    this.renderChart(this.chartdata2, this.options);
  },
};
