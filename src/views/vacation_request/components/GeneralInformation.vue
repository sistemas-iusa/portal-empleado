<template>
  <div class="col-xl-12" v-if="data">
    <p class="card-icon-text text-black">INFORMACIÓN GENERAL</p>
    <table class="table">
      <tbody>
        <tr>
          <td>F. Ingreso</td>
          <td class="boldUsuario">{{ data.DAT01 }}</td>
          <td>Antiguedad</td>
          <td class="boldUsuario">5 años</td>
        </tr>
        <tr>
          <td>Días derecho a Vacaciones</td>
          <td class="boldUsuario">{{ Math.trunc(data.ANZHL) }} Días</td>
          <td>Vacaciones equivalentes</td>
          <td class="boldUsuario">{{ Math.trunc(data.VACRESE) }} Días</td>
        </tr>
        <tr>
          <td>Vacaciones reservadas</td>
          <td class="boldUsuario">{{ Math.trunc(data.VACEQUI) }} Días</td>
          <td>Vacaciones ya tomadas</td>
          <td class="boldUsuario">{{ Math.trunc(data.KVERB) }} Días</td>
        </tr>
        <tr>
          <td>Vacaciones a disfrutar</td>
          <td class="boldUsuario text-green-succes">
            {{ Math.trunc(data.VACDISF) }} Días
          </td>
          <td>Horario</td>
          <td class="boldUsuario">{{ data.SCHKZ }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <p class="card-icon-text text-black">
      Vence el derecho a disfrutar el
      <span class="text-red-cancel"> {{ data.DEEND }}</span>
      y no podrán ser acumuladas depués de esta fecha. <br />No se autoriza el
      pago de vacaciones.
    </p>
    <br />
    <p class="card-icon-text text-black">SOLICITUD DE VACACIONES</p>
    <br />
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
import axios from "axios";
export default {
  data() {
    return {
      data: null,
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
  },
};
</script>

<style></style>
