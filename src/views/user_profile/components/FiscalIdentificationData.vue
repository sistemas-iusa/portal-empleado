<template>
  <div class="col-xl-12" v-if="data">
    <h5 class="card-title cellContainer">DATOS DE IDENTIFICACIÓN FISCAL</h5>
    <button v-if="!edit" @click="edit = !edit"><i class="fas fa-edit"></i></button>
    <div class="row">
      <p></p>
      <div class="row cellspacing">
        <div class="col-sm-6 bold">RFC:</div>
        <div class="col-sm-6">
          <input
            v-if="edit"
            type="text"
            v-model="data.ICNUM"
            class="form-control"
          />
          <span v-else>{{ data.ICNUM }}</span>
        </div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6 bold">CURP:</div>
        <div class="col-sm-6">
          <input
            v-if="edit"
            type="text"
            v-model="data.PERID"
            class="form-control"
          />
          <span v-else>{{ data.PERID }}</span>
        </div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6 bold">Nombre(s):</div>
        <div class="col-sm-6">{{ data.VORNA }}</div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6 bold">Primer apellido:</div>
        <div class="col-sm-6">{{ data.NACHN }}</div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6 bold">Segundo apellido:</div>
        <div class="col-sm-6">{{ data.NACH2 }}</div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6">
          <span class="bold">Código Postal:</span> {{ data.PSTLZ }}
        </div>
        <div class="col-sm-6"></div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6">
          <span class="bold">Nombre de Vialidad:</span> {{ data.STRAS }}
        </div>
        <div class="col-sm-6"><span class="bold">Número Exterior:</span> -</div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6"><span class="bold">Número Interior:</span> -</div>
        <div class="col-sm-6">
          <span class="bold">Nombre de la Colonia:</span> {{ data.ORT02 }}
        </div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6">
          <span class="bold">Nombre de Localidad:</span> -
        </div>
        <div class="col-sm-6">
          <span class="bold">Nombre del Municipio o Delegación:</span>
          {{ data.ORT02 }}
        </div>
      </div>
      <div class="row cellspacing">
        <div class="col-sm-6">
          <span class="bold">Nombre del Estado:</span> {{ data.STATE }}
        </div>
        <div class="col-sm-6">
          <span class="bold">Correo Electrónico:</span> {{ data.CORREO }}
        </div>
      </div>
    </div>
    <p></p>
    <div class="row" v-if="edit">
      <button>Guardar</button>
      <p></p>
      <button @click="edit = !edit">Cancelar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
      edit: false,
    };
  },
  async mounted() {
    this.recargarListado();
  },
  methods: {
    async recargarListado() {
      await axios
        .get("getProfile")
        .then((response) => (this.data = response.data));
    },
  },
};
</script>

<style scoped>
.bold {
  font-weight: 700;
}
.cellspacing {
  padding: 0.5em;
}
</style>
