<template>
  <div class="col-xl-12" v-if="data">
    <div class="card">
      <div class="card-header">
        <span style="font-weight: 500"
          ><i class="fas fa-pen-alt"></i> GENERAR PROPUESTA
        </span>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 offset-xl-6">
            <p>
              Fecha de elaboración:
              <span style="font-weight: 500">{{ elaboration_date }}</span>
            </p>
          </div>
          <div class="col-xl-6">
            <p style="font-weight: 500">
              <i class="fas fa-calendar-alt fa-2x"></i> Seleccionar días de
              ausencia
              <span
                style="font-size: 14px; color: #dc3545; font-weight: 500"
                v-if="!date_array"
                >(*requerido)</span
              >
            </p>
            <date-picker
              v-model="date_array"
              multiple
              valueType="format"
              :disabled-date="notBeforeToday"
            ></date-picker>
          </div>
          <div class="col-xl-6">
            <p
              style="font-weight: 500"
              v-if="date_array && date_array.length > 0"
            >
              <i class="fas fa-check-circle text-green-succes"></i>
              {{ date_array.length }} Días seleccionados
            </p>
            <div
              class="alert alert-info"
              role="alert"
              style="font-weight: 600"
              v-if="date_array && date_array.length > 0"
            >
              <span v-for="date in date_array" :key="date.id">
                <i>{{ formatter(date) }}, </i>
              </span>
            </div>
          </div>
          <!-- <div class="col-xl-6">
            <p></p>
            <div>
              <label style="font-weight: 500">Número de Jefe Inmediato</label>
              <input
                type="text"
                class="form-control mt-2"
                v-model="data.SOBID_EJ"
                disabled
              />
              <p
                v-if="data.SOBID_EJ == '' || !data.SOBID_EJ"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                * El campo Número de Jefe Inmediato es requerido.
              </p>
            </div>
          </div>
          <div class="col-xl-6">
            <p></p>
            <div>
              <label style="font-weight: 500">Nombre de Jefe Inmediato</label>
              <input
                type="text"
                class="form-control mt-2"
                v-model="name_immediate_boss"
                disabled
              />
              <p
                v-if="name_immediate_boss == '' || !name_immediate_boss"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                * El campo Nombre de Jefe Inmediato es requerido.
              </p>
            </div>
          </div>
          <div class="col-xl-6 mt-0">
            <p></p>
            <div class="form-group">
              <label style="font-weight: 500">E-mail de Jefe Inmediato</label>
              <input
                type="text"
                class="form-control mt-2"
                v-model="data.USRID_LONGJ"
                disabled
              />
              <p
                v-if="data.USRID_LONGJ == '' || !data.USRID_LONGJ"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                * El campo E-mail de Jefe Inmediato es requerido.
              </p>
            </div>
          </div>
          <div class="col-xl-6 mt-0"></div>
          <div class="col-xl-6">
            <p></p>
            <div>
              <label style="font-weight: 500"
                >Número de Encargado de Personal</label
              >
              <input
                type="text"
                class="form-control mt-2"
                v-model="data.SOBID_EP"
                disabled
              />
              <p
                v-if="data.SOBID_EP == '' || !data.SOBID_EP"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                * El campo Número de Encargado de Personal es requerido.
              </p>
            </div>
          </div>
          <div class="col-xl-6">
            <p></p>
            <div>
              <label style="font-weight: 500"
                >Nombre de Encargado de Personal</label
              >
              <input
                type="text"
                class="form-control mt-2"
                v-model="name_personnel_manager"
                disabled
              />
              <p
                v-if="name_personnel_manager == '' || !name_personnel_manager"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                * El campo Nombre de Encargado de Personal es requerido.
              </p>
            </div>
          </div>
          <div class="col-xl-6">
            <p></p>
            <div>
              <label style="font-weight: 500"
                >E-mail de Encargado de Personal</label
              >
              <input
                type="text"
                class="form-control mt-2"
                v-model="data.USRID_LONGP"
                disabled
              />
              <p
                v-if="data.USRID_LONGP == '' || !data.USRID_LONGP"
                style="font-size: 14px; color: #dc3545; font-weight: 500"
              >
                *El campo E-mail de Encargado de Personal es requerido.
              </p>
            </div>
          </div> -->
          <p></p>
          <div class="row">
            <div class="form-group col-md-6">
              <div class="col-12">
                <label style="font-weight: 500; margin-bottom: 5px"
                  >Número de Jefe Inmediato
                  <span
                    style="font-size: 14px; color: #dc3545; font-weight: 500"
                    v-if="!data.SOBID_EJ"
                    >(*requerido)</span
                  ></label
                >
              </div>
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                <div>{{ data.SOBID_EJ }}</div>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label style="font-weight: 500; margin-bottom: 5px"
                >Nombre de Jefe Inmediato
                <span
                  style="font-size: 14px; color: #dc3545; font-weight: 500"
                  v-if="!name_immediate_boss"
                  >(*requerido)</span
                ></label
              >
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                {{ name_immediate_boss }}
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <div class="form-group col-md-6">
              <label style="font-weight: 500; margin-bottom: 5px"
                >E-mail de Jefe Inmediato
                <span
                  style="font-size: 14px; color: #dc3545; font-weight: 500"
                  v-if="!data.USRID_LONGJ"
                  >(*requerido)</span
                ></label
              >
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                {{ data.USRID_LONGJ }}
              </div>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="form-group col-md-6">
              <label style="font-weight: 500; margin-bottom: 5px"
                >Número de Encargado de Personal
                <span
                  style="font-size: 14px; color: #dc3545; font-weight: 500"
                  v-if="!data.SOBID_EP"
                  >(*requerido)</span
                ></label
              >
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                {{ data.SOBID_EP }}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label style="font-weight: 500; margin-bottom: 5px"
                >Nombre de Encargado de Personal
                <span
                  style="font-size: 14px; color: #dc3545; font-weight: 500"
                  v-if="!name_personnel_manager"
                  >(*requerido)</span
                ></label
              >
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                {{ name_personnel_manager }}
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <div class="form-group col-md-6">
              <label style="font-weight: 500; margin-bottom: 5px"
                >E-mail de Encargado de Personal
                <span
                  style="font-size: 14px; color: #dc3545; font-weight: 500"
                  v-if="!data.USRID_LONGP"
                  >(*requerido)</span
                ></label
              >
              <div
                class="col-12"
                style="height: 35px;display: block;width: 100%;background-color:#e9ecef;1px solid #ced4da;padding:0.375rem 0.75rem;border-radius: 0.25rem;"
              >
                {{ data.USRID_LONGP }}
              </div>
            </div>
          </div>
          <p></p>
          <div class="container">
            <hr />
            <div class="row">
              <div class="col-md-3">
                <span style="font-weight: 500">Director Departamento</span>
              </div>
              <div class="col-md-3">
                <span>{{ name_director }}</span>
              </div>
              <div class="col-md-3">
                <span style="font-weight: 500">E-mail Director</span>
              </div>
              <div class="col-md-3">
                <span>{{ data.USRID_LONG }}</span>
              </div>
            </div>
          </div>
          <p></p>
          <div class="col-xl-12">
            <div class="form-group centerItems">
              <p></p>
              <span
                style="font-size: 16px; color: #dc3545; font-weight: 500"
                v-if="
                  data.SOBID_EJ == '' ||
                  !data.SOBID_EJ ||
                  name_immediate_boss == '' ||
                  !name_immediate_boss ||
                  data.USRID_LONGJ == '' ||
                  !data.USRID_LONGJ ||
                  data.SOBID_EP == '' ||
                  !data.SOBID_EP ||
                  name_personnel_manager == '' ||
                  !name_personnel_manager ||
                  data.USRID_LONGP == '' ||
                  !data.USRID_LONGP ||
                  date_array == '' ||
                  !date_array
                "
              >
                <p></p>
                <div
                  class="alert alert-warning"
                  role="alert"
                  style="font-weight: 600; font-size: 14px"
                >
                  <!-- <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon> -->
                  Uno o más campos requeridos no estan completos; favor de
                  seleccionar días de ausencia o contactar directamente al
                  departamento de RH.
                </div>
              </span>
              <button
                class="btn btn-portal btn-lg"
                @click="saveVacationRequest()"
                v-else
              >
                SOLICITAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p></p>
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
<!-- <script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
export default {
  components: { DatePicker },
  data() {
    return {
      data: null,
      form: {},
      date_today: null,
      date_max: null,
      elaboration_date: null,
      meses: [],
      time1: null,
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
      this.getDateNow();
    },
    getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      let mont_val = parseInt(d.getMonth());
      mont_val = mont_val + 1;
      const month = ("0" + mont_val).slice(-2);
      const year = d.getFullYear();
      var anio = year.toString();
      this.date_today = year + "-" + month + "-" + day;
      this.form.date = this.date_today;
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
      this.elaboration_date =
        day +
        "-" +
        this.meses[mont_val - 1] +
        "-" +
        anio.substr(anio.length - 2);
    },
    calculateDaysMaxVacation(date) {
      this.date_max = null;
      const d = new Date(date);
      d.setDate(d.getDate() + Math.trunc(this.data.ANZHL));
      //validacion con fecha limite de vencimiento
      const fecha_vencimiento = new Date(this.data.DEEND);
      if (d >= fecha_vencimiento) {
        this.date_max = this.data.DEEND;
      } else {
        const day = ("0" + d.getDate()).slice(-2);
        let mont_val = parseInt(d.getMonth());
        mont_val = mont_val + 1;
        const month = ("0" + mont_val).slice(-2);
        const year = d.getFullYear();
        this.date_max = year + "-" + month + "-" + day;
      }
    },
    notBeforeToday(date) {
      if (date.getDay() === 0 || date.getDay() === 6) {
        return date; // Disable all Sundays, but still leave months/years, whose first day is a Sunday, enabled.
      } else {
        return (
          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
          date >= new Date(new Date(this.data.DEEND).setHours(0, 0, 0, 0))
        );
      }
    },
    partirFecha() {
      this.form.schedule_out = this.time1[0];
      this.form.schedule_return = this.time1[1];
    },
    saveVacationRequest() {
      axios
        .post("/saveVacationRequest", {
          form: this.form,
        })
        .then((response) => {
          this.$router.push({ name: "VacationMyRequest" });
          this.$swal({
            title: response.data[0].mesage,
            icon: "success",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script> -->

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
export default {
  components: { DatePicker },
  data() {
    return {
      data: null,
      form: {},
      date: null,
      date_today: null,
      date_max: null,
      elaboration_date: null,
      meses: [],
      date_array: null,
      name_immediate_boss: null,
      name_personnel_manager: null,
      name_director: null,
      schedule_out: null,
      schedule_return: null,
      getFecha: null,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      await axios.get("getGeneralInformation").then((response) => {
        this.data = response.data;
        if (!this.data.VORNAJ || !this.data.NACHNJ || !this.data.NACH2J) {
          this.name_immediate_boss = null;
        } else {
          this.name_immediate_boss = `${this.data.VORNAJ} ${this.data.NACHNJ} ${this.data.NACH2J}`;
        }
        if (!this.data.VORNAP || !this.data.NACHNP || !this.data.NACH2P) {
          this.name_personnel_manager = null;
        } else {
          this.name_personnel_manager = `${this.data.VORNAP} ${this.data.NACHNP} ${this.data.NACH2P}`;
        }
        if (!this.data.VORNAD || !this.data.NACHND || !this.data.NACH2D) {
          this.name_director = null;
        } else {
          this.name_director = `${this.data.VORNAD} ${this.data.NACHND} ${this.data.NACH2D}`;
        }
      });
      this.getDateNow();
    },
    getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      let mont_val = parseInt(d.getMonth());
      mont_val = mont_val + 1;
      const month = ("0" + mont_val).slice(-2);
      const year = d.getFullYear();
      var anio = year.toString();
      this.date_today = year + "-" + month + "-" + day;
      this.date = this.date_today;
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
      this.elaboration_date =
        day +
        "-" +
        this.meses[mont_val - 1] +
        "-" +
        anio.substr(anio.length - 2);
    },
    calculateDaysMaxVacation(date) {
      this.date_max = null;
      const d = new Date(date);
      d.setDate(d.getDate() + Math.trunc(this.data.ANZHL));
      //validacion con fecha limite de vencimiento
      const fecha_vencimiento = new Date(this.data.DEEND);
      if (d >= fecha_vencimiento) {
        this.date_max = this.data.DEEND;
      } else {
        const day = ("0" + d.getDate()).slice(-2);
        let mont_val = parseInt(d.getMonth());
        mont_val = mont_val + 1;
        const month = ("0" + mont_val).slice(-2);
        const year = d.getFullYear();
        this.date_max = year + "-" + month + "-" + day;
      }
    },
    notBeforeToday(date) {
      //if (date.getDay() === 0 || date.getDay() === 6) {
      //return date; // Disable all Sundays, but still leave months/years, whose first day is a Sunday, enabled.
      //} else {
      return (
        date <= new Date(new Date().setHours(0, 0, 0, 0)) ||
        date > new Date(new Date(this.data.DEEND).setHours(0, 0, 0, 0))
      );
      //}
    },
    partirFecha() {
      this.schedule_out = this.time1[0];
      this.schedule_return = this.time1[1];
      //obtener fecha maxima conforma a dias a disfrutar
      // vacaciones a disfrutar data.ANZHL
      /* var date_max_ANZHL = new Date(
        new Date(this.time1[0]).setHours(0, 0, 0, 0)
      );
      let i = 0;
      while (i <= this.data.VACDISF) {
        date_max_ANZHL.setTime(date_max_ANZHL.getTime() + 24 * 60 * 60 * 1000);
        if (date_max_ANZHL.getDay() != 6 && date_max_ANZHL.getDay() !== 0) i++;
      }
      var date_end = new Date(new Date(this.time1[1]).setHours(0, 0, 0, 0));
      date_end.setDate(date_end.getDate() + 1);

      if (date_max_ANZHL <= date_end) {
        this.$swal({
          title: "<h4><b>Rango de fechas no permitido.</b></h4>",
          icon: "error",
          html:
            "<h5><b>Días de vacaciones a disfrutar: </b>" + "<span style='color:red;font-weight:700'>" + this.data.VACDISF +"</span></h5>",
        });
        this.form.schedule_out = null;
        this.form.schedule_return = null;
        this.time1 = null;
      } */
    },
    saveVacationRequest() {
      if (this.date_array.length >= this.data.VACDISF) {
        this.$swal({
          title:
            "<h4><b>Los días seleccionados exceden sus días de vacaciones a disfrutar.</b></h4>",
          icon: "error",
          html:
            "<h5><b>Días de vacaciones a disfrutar: </b>" +
            "<span style='color:#36bc27;font-weight:700;font-size:22px;'>" +
            this.data.VACDISF +
            "</span></h5>",
        });
      } else {
        axios
          .post("/saveVacationRequest", {
            elaboration_date: this.date,
            schedule_out: this.schedule_out,
            schedule_return: this.schedule_return,
            number_immediate_boss: this.data.SOBID_EJ,
            name_immediate_boss: this.name_immediate_boss,
            email_immediate_boss: this.data.USRID_LONGJ,
            number_personnel_manager: this.data.SOBID_EP,
            name_personnel_manager: this.name_personnel_manager,
            email_personnel_manager: this.data.USRID_LONGP,
            date_array: this.date_array,
          })
          .then((response) => {
            this.$router.push({ name: "VacationMyRequest" });
            this.$swal({
              title: response.data[0].mesage,
              icon: "success",
            });
          })
          .catch((e) => {
            console.log(e);
          });
        //alert("solicitud enviada");
      }
    },
    formatter(date) {
      let date_format = date.split("-").reverse().join("/");
      return date_format;
    },
  },
};
</script>

<style></style>
