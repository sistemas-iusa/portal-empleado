<template>
  <div class="col-xl-12" v-if="data">
    <div class="card">
      <div class="card-header">
        <!-- <p class="card-icon-text text-black">INFORMACIÓN GENERAL</p> -->
        <span style="font-weight: 500">
          <i class="fas fa-info-circle"></i> INFORMACIÓN GENERAL</span
        >
      </div>
      <table class="table table-striped table-sm">
        <tbody>
          <tr>
            <td>Fecha de ingreso</td>
            <td class="boldUsuario">{{ formatDate(data.DAT01) }}</td>
            <td>Antigüedad</td>
            <td class="boldUsuario">
              {{ differenceInYears(data.DAT01) }} años
            </td>
          </tr>
          <tr>
            <!-- <td>Días derecho a vacaciones</td>
            <td class="boldUsuario">{{ data.ANZHL }} Días</td> -->
            <td>Vacaciones equivalentes</td>
            <td class="boldUsuario">{{ data.VACEQUI }} Días</td>
            <td>Vacaciones reservadas</td>
            <td class="boldUsuario">{{ data.VACRESE }} Días</td>
          </tr>
          <tr>
            <!-- <td>Vacaciones reservadas</td>
            <td class="boldUsuario">{{ data.VACRESE }} Días</td> -->
            <td>Vacaciones a disfrutar</td>
            <td class="boldUsuario text-green-succes" style="font-weight: 700">
              {{ data.VACDISF }} Días
            </td>
            <td>Vacaciones ya tomadas</td>
            <td class="boldUsuario">{{ data.KVERB }} Días</td>
          </tr>
          <tr>
            <!-- <td>Vacaciones a disfrutar</td>
            <td class="boldUsuario text-green-succes" style="font-weight: 700">
              {{ data.VACDISF }} Días
            </td> -->
            <td></td>
            <td></td>
            <td>Horario</td>
            <td class="boldUsuario">{{ data.SCHKZ }}</td>
          </tr>
        </tbody>
      </table>
      <p
        class="card-icon-text"
        style="font-weight: 500; font-size: 16px"
      >
      <ul>
        <li>
        Se vence el derecho a disfrutar tus vacaciones el
        <span class="text-red-cancel" style="font-weight: 700">
          {{ formatDate(data.DEEND) }}</span
        >
        y no podrán ser acumuladas después de esta fecha.</li> <li>No se autoriza el pago
        de vacaciones.</li>
        </ul>
      </p>
    </div>
    <p></p>
    <!-- <div class="row">
        <Chart chart-type="hbullet" :data-source="dataSource" />
    </div> -->
    <!-- <div class="row">
      <p
        class="card-icon-text text-black"
        style="font-weight: 500; font-size: 16px"
      >
        Vence el derecho a disfrutar el
        <span class="text-red-cancel" style="font-weight: 700">
          {{ formatDate(data.DEEND) }}</span
        >
        y no podrán ser acumuladas depués de esta fecha. No se autoriza el pago
        de vacaciones.
      </p>
    </div> -->
  </div>
</template>
<style scoped>
.text-green-succes {
  color: #36bc27;
}
.text-red-cancel {
  color: red;
}
</style>
<script>
const dataSource = {
  chart: {
    caption: "Website downloads for 2017",
    subcaption: "Actual vs Target",
    numbersuffix: "K",
    theme: "fusion",
    plottooltext:
      "Downloaded $datavalue times against a target of $targetDataValue"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F"
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533"
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#62B58F"
      }
    ]
  },
  value: "90",
  target: "95"
};
//import Chart from "./FusionChart.vue";
import axios from "axios";
export default {
  components: {
    //Chart,
  },
  data() {
    return {
      data: null,
      dataSource
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      await axios
        .get("getGeneralInformation")
        .then((response) => (this.data = response.data));
    },
    formatDate(date) {
      const d = new Date(date);
      d.setDate(d.getDate() + 1);
      const day = ("0" + d.getDate()).slice(-2);
      let mont_val = parseInt(d.getMonth());
      const year = d.getFullYear();
      var anio = year.toString();
      this.meses = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ];
      return (
        day + "/" + this.meses[mont_val] + "/" + anio.substr(anio.length - 2)
      );
    },
    differenceInYears(date) {
      const dateNow = new Date();
      const lastDate = new Date(date);
      return dateNow.getFullYear() - lastDate.getFullYear(); // dif de años inicial
    },
  },
};
</script>

<style></style>
