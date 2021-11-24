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
    this.chartdata2.datasets = [
      {
        label: ["Desempeño"],
        backgroundColor: ["#2EDB5D"],
        data: [this.chartdata["desempeno"]],
      },
      {
        label: "Disponibilidad",
        backgroundColor: ["#00CCFD"],
        data: [this.chartdata["disponibilidad"]],
      },
      {
        label: "Colaboración",
        backgroundColor: ["#FFC400"],
        data: [this.chartdata["colaboracion"]],
      },
    ];
    this.options.title.text = this.chartdata["nombre"];
    this.renderChart(this.chartdata2, this.options);
  },
};
