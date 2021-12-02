import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    colors: ["#ff0000", "#ffc400", "#2edb5d", "#8b8b8b", "#00ccfd"],
    i: 0,
    chartdata2: {
      labels: [""],
      datasets: [],
    },
    options: {
      title: {
        display: true,
        text: "",
        fontSize: 16,
        position: "bottom",
        color: "black",
      },
      responsive: true,
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
    for (const property in this.chartdata) {
      const color = this.colors[this.i];
      const object = {
        label: [property],
        backgroundColor: [color],
        data: [this.chartdata[property]],
      };
      this.chartdata2.datasets.push(object);
      this.i++;
    }

    //this.options.title.text = this.chartdata['nombre']
    this.renderChart(this.chartdata2, this.options);
  },
};
