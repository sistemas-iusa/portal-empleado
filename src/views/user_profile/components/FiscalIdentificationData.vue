<template>
  <div class="col-xl-12" v-if="data">
    <br />
    <h5
      class="card-title cellContainer"
      style="font-weight: 700; font-size: 24px"
    >
      DIRECCIÓN DATOS FISCALES &nbsp;<button
        v-if="!edit"
        @click="edit = !edit"
        class="btn btn-light"
        style="box-shadow: 0 0 0 0.25rem rgb(211 212 213 / 50%)"
      >
        <i class="fas fa-edit"></i> Editar
      </button>
    </h5>
    <p></p>
    <div class="col-xl-12" v-if="!edit">
      <table class="table">
        <tbody>
          <tr>
            <td>Estatus</td>
            <td class="bold">
              <span
                class="badge badge-info"
                style="color: #fff; background-color: #17a2b8; font-size: 14px"
                >{{ status.toUpperCase() }}</span
              >
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Rfc</td>
            <td class="bold">{{ fiscalData.rfc }}</td>
            <td>Colonia</td>
            <td class="bold">
              {{ fiscalData.district }}
            </td>
          </tr>
          <tr>
            <td>Curp</td>
            <td class="bold">{{ fiscalData.curp }}</td>
            <td>Población</td>
            <td class="bold">
              {{ fiscalData.city }}
            </td>
          </tr>
          <tr>
            <td>No. teléfono</td>
            <td class="bold">{{ fiscalData.telephone }}</td>
            <td>Región</td>
            <td class="bold">
              {{ fiscalData.region }}
            </td>
          </tr>
          <tr>
            <td>Código postal</td>
            <td class="bold">{{ fiscalData.post_code }}</td>
            <td>Alcaldía / Municipio</td>
            <td class="bold">
              {{ fiscalData.city_code }}
            </td>
          </tr>
          <tr>
            <td>Calle</td>
            <td class="bold">{{ fiscalData.street_name }}</td>
            <td>Clave de país</td>
            <td class="bold">
              {{ fiscalData.country_key }}
            </td>
          </tr>
          <tr>
            <td>Número exterior</td>
            <td class="bold">{{ fiscalData.street_number }}</td>
            <td>Número interior</td>
            <td class="bold">{{ fiscalData.edifice_number }}</td>
          </tr>
          <!-- <tr>
            <td>No. Edificio</td>
            <td class="bold">{{ fiscalData.edifice_number }}</td>
            <td></td>
            <td class="bold"></td>
          </tr> -->
        </tbody>
      </table>
    </div>
    <div class="col-xl-12" v-if="edit">
      <div class="row">
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Rfc</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.rfc"
              class="form-control"
              @change="fiscalData.rfc = filtroCaracter(fiscalData.rfc)"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Colonia</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.district"
              class="form-control"
              @change="
                fiscalData.district = filtroCaracter(fiscalData.district)
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Curp</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.curp"
              class="form-control"
              @change="fiscalData.curp = filtroCaracter(fiscalData.curp)"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Población</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.city"
              class="form-control"
              @change="fiscalData.city = filtroCaracter(fiscalData.city)"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">No. teléfono</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.telephone"
              class="form-control"
              @change="
                fiscalData.telephone = filtroCaracter(fiscalData.telephone)
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold">Región</div>
          <div class="col-sm-12">
            <select
              v-model="region_select"
              class="form-control"
              @change="municipalityRefresh(region_select)"
            >
              <option disabled value="">Seleccionar</option>
              <option
                v-for="region in region_array"
                :key="region.id"
                :value="region"
              >
                {{ region.region }} - {{ region.region_name }}
              </option>
            </select>
          </div>
        </div>
        <!-- <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Región</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.region"
              class="form-control"
              @change="fiscalData.region = filtroCaracter(fiscalData.region)"
            />
          </div>
        </div> -->
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Código postal</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.post_code"
              class="form-control"
              @change="
                fiscalData.post_code = filtroCaracter(fiscalData.post_code)
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold">Alcaldía / Municipio</div>
          <div class="col-sm-12">
            <select
              v-model="municipality_select"
              class="form-control"
              @change="municipalityData(municipality_select)"
            >
              <option disabled :value="null">
                Selecciona un municipio o alcadía
              </option>
              <option
                v-for="municipality in municipality_array"
                :key="municipality.id"
                :value="municipality"
              >
                {{ municipality.municipality }} -
                {{ municipality.municipality_name }}
              </option>
            </select>
          </div>
        </div>
        <!-- <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Código de la ciudad:</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.city_code"
              class="form-control"
              @change="
                fiscalData.city_code = filtroCaracter(fiscalData.city_code)
              "
            />
          </div>
        </div> -->
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Calle:</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.street_name"
              class="form-control"
              @change="
                fiscalData.street_name = filtroCaracter(
                  fiscalData.street_name
                )
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Clave de país</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.country_key"
              class="form-control"
              @change="
                fiscalData.country_key = filtroCaracter(fiscalData.country_key)
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Número exterior</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.street_number"
              class="form-control"
              @change="
                fiscalData.street_number = filtroCaracter(
                  fiscalData.street_number
                )
              "
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">Número interior</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.edifice_number"
              class="form-control"
              @change="
                fiscalData.edifice_number = filtroCaracter(
                  fiscalData.edifice_number
                )
              "
            />
          </div>
        </div>
        <!-- <div class="col-xl-6">
          <div class="col-sm-12 bold spacing">No. Edificio</div>
          <div class="col-sm-12">
            <input
              v-if="edit"
              type="text"
              v-model="fiscalData.edifice_number"
              class="form-control"
              @change="
                fiscalData.edifice_number = filtroCaracter(
                  fiscalData.edifice_number
                )
              "
            />
          </div>
        </div> -->
      </div>
    </div>

    <p></p>
    <div class="col-lg-12 form-group centerItems" v-if="!edit">
      <!-- <button
        v-if="!edit && status == 'Sin confirmar'"
        @click="verificData()"
        class="btn btn-success"
      >
        <i class="fas fa-check"></i> Confirmar
      </button> -->
      <button
        v-if="!edit && status == 'Sin confirmar'"
        class="btn btn-success btn-lg"
        @click="verificData()"
      >
        CONFIRMAR
      </button>
      <!-- <button v-if="!edit" @click="edit = !edit" class="btn btn-warning">
        <i class="fas fa-edit"></i> Editar
      </button> -->
    </div>

    <div class="col-lg-12" v-if="edit">
      <button @click="verificData()" class="btn btn-success">
        <i class="fas fa-check"></i>
        Confirmar
      </button>
      &nbsp;
      <button @click="edit = !edit" class="btn btn-danger">
        <i class="fas fa-window-close"></i>
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    warn: {
      type: Function,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data() {
    return {
      data: null,
      edit: false,
      fiscalData: {},
      status: null,
      region_array: [],
      municipality_array: [],
      region_select: {},
      municipality_select: {},
    };
  },
  async mounted() {
    this.recargarListado();
  },
  methods: {
    ...mapActions({
      changeUser: "auth/changeUser",
    }),
    async recargarListado() {
      await axios.get("infoFiscal").then(
        (response) => (
          (this.data = response.data.user),
          (this.status = response.data.status),
          (this.fiscalData = {
            rfc: this.filtroCaracter(this.data.ICNUM),
            curp: this.filtroCaracter(this.data.PERID),
            name: this.filtroCaracter(this.data.VORNA),
            first_lastname: this.filtroCaracter(this.data.NACHN),
            second_lastname: this.filtroCaracter(this.data.NACH2),
            post_code: this.filtroCaracter(this.data.PSTLZ),
            telephone: this.filtroCaracter(this.data.TELNR),
            street_name: this.filtroCaracter(this.data.STRAS),
            street_number: this.filtroCaracter(this.data.POSTA),
            edifice_number: this.filtroCaracter(this.data.HSNMR),
            district: this.filtroCaracter(this.data.ORT02),
            city: this.filtroCaracter(this.data.ORT01),
            region: this.filtroCaracter(this.data.STATE),
            country_key: this.filtroCaracter(this.data.LAND1),
            city_code: this.filtroCaracter(this.data.RCTVC),
          })
        )
      );
      //obtener estados
      await axios.get("getRegions").then((response) => {
        this.region_array = response.data;
        //obtener la region de inicio
        for (var i = 0; i < this.region_array.length; i++) {
          var visor = this.region_array[i];
          if (visor.region == this.fiscalData.region) {
            this.region_select = visor;
          }
        }
        //obtener Municipios precargados
        axios
          .post("getMunicipalities", {
            id: this.region_select.id,
          })
          .then((response) => {
            this.municipality_array = response.data;
            //obtener el municipio seleccionado
            for (var j = 0; j < this.municipality_array.length; j++) {
              var visor2 = this.municipality_array[j];
              if (visor2.municipality == this.fiscalData.city_code) {
                this.municipality_select = visor2;
              }
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (this.loading = false));
      });
    },
    filtroCaracter(data) {
      if (data) {
        return data.replace(/[^a-zA-Z 0-9]+/g, "").toUpperCase();
      } else {
        return data;
      }
    },
    municipalityRefresh(data) {
      this.fiscalData.city_code = "";
      this.fiscalData.region = data.region;
      this.municipality_select = null;
      //obtener Municipios precargados
      axios
        .post("getMunicipalities", {
          id: data.id,
        })
        .then((response) => {
          this.municipality_array = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
    municipalityData(data) {
      this.fiscalData.city_code = data.municipality;
    },
    async verificData() {
      if (
        this.fiscalData.rfc == "" ||
        this.fiscalData.curp == "" ||
        this.fiscalData.name == "" ||
        this.fiscalData.first_lastname == "" ||
        this.fiscalData.second_lastname == "" ||
        this.fiscalData.post_code == "" ||
        this.fiscalData.telephone == "" ||
        this.fiscalData.street_name == "" ||
        this.fiscalData.district == "" ||
        this.fiscalData.city == "" ||
        this.fiscalData.region == "" ||
        this.fiscalData.country_key == "" ||
        this.fiscalData.city_code == ""
      ) {
        this.$swal({
          title: "Complete todos los campos.",
          icon: "error",
        });
      } else if (this.fiscalData.post_code.length != 5) {
        //alert("Codigo Postal debe tener 5 caracteres");
        this.$swal({
          title: "Código Postal debe tener al menos 5 caracteres.",
          icon: "error",
        });
      } else {
        await axios
          .post("changeDataFiscal", {
            data: this.fiscalData,
            status: this.status,
          })
          .then((response) => {
            //alert("Datos Guardados");
            this.$swal({
              title: "Datos Guardados",
              icon: "success",
            });
            this.changeUser(response.data);
            this.edit = false;
            this.recargarListado();
            this.warn(null);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (this.loading = false));
      }
    },
  },
  watch: {
    user() {
      this.recargarListado();
    },
  },
};
</script>

<style scoped>
.bold {
  font-weight: 600;
}
.spacing {
  padding-bottom: 5px;
}
</style>
