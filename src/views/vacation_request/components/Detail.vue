<template>
  <div class="col-xl-12" v-if="data">
    <div class="card">
      <div class="card-header" style="font-weight: 500">
        PROPUESTA DE VACACIONES
      </div>
      <!-- <p class="card-icon-text text-black">SOLICITUD DE VACACIONES</p> -->
      <table class="table table-striped table-sm" v-if="data">
        <tbody>
          <tr>
            <td>Folio</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.folio }}
            </td>
            <td>Fecha de elaboración</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.dateRequest }}
            </td>
          </tr>
          <tr>
            <td>Días solicitados</td>
            <td
              style="font-size: 16px; font-weight: 700;"
            >
              <span v-for="date in newFormat" :key="date.id">
                <label>{{ formatter(date) }}, </label>
              </span>
            </td>
            <td></td>
            <td></td>
            <!-- <td>Fecha de regreso</td>
          <td class="boldUsuario" style="font-weight: 700; font-style: italic">
            {{ data.extra_days }}
          </td> -->
          </tr>
          <tr>
            <td></td>
            <td></td>
            <!-- <td>Clave de Ausencia</td> -->
            <!-- <td class="boldUsuario">{{data.absence_key}}</td> -->
            <td>Estatus</td>
            <td>
              <div class="centerItems">
                <span
                  class="badge bg-warning text-dark"
                  style="font-size: 16px"
                  v-if="data.id_status == 1"
                >
                  {{ data.status }}
                </span>
                <span
                  class="badge bg-success"
                  style="font-size: 16px"
                  v-if="data.id_status == 2"
                >
                  {{ data.status }}
                </span>
                <span
                  class="badge bg-danger"
                  style="font-size: 16px"
                  v-if="data.id_status == 3"
                >
                  {{ data.status }}
                </span>
              </div>
            </td>
          </tr>

          <!-- <tr v-if="data.id_status == 3">
            <td>Motivo de cancelación</td>
            <td>{{data.comments}}</td>
            <td></td>
            <td></td>
          </tr> -->
        </tbody>
      </table>
      <div class="row" v-if="data.id_status == 3">
        <div class="col-md-3" style="font-weight: 700;">Motivos de cancelación</div>
        <div class="col-md-9">{{ data.comments }}</div>
      </div>
      <p></p>
      <table class="table table-striped table-sm" v-if="data">
        <tbody>
          <tr>
            <td>Número de jefe inmediato</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.number_immediate_boss }}
            </td>
            <td>Nombre de jefe inmediato</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.name_immediate_boss }}
            </td>
          </tr>
          <tr>
            <td>E-mail de jefe inmediato</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.email_boss }}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Número de encargado de nómina</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.number_personnel_manager }}
            </td>
            <td>E-mail de encargado de nómina</td>
            <td
              class="boldUsuario"
              style="font-weight: 700;"
            >
              {{ data.email_personnel_manager }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  props: {
    idVacation: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      await axios
        .post("getVacationDetail", {
          id_vacation: this.idVacation,
        })
        .then((response) => {
          this.data = response.data;
          let str = this.data.date_array;
          let arr = str.split(",");
          this.newFormat = arr.map((a) => a.split("-").reverse().join("/"));
          console.log(this.newFormat);
        });
    },
    formatter(date) {
      let date_format = date.split("/").join("/");
      return date_format;
    },
  },
};
</script>

<style></style>
