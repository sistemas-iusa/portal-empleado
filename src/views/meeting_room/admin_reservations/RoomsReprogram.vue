<template>
  <main>
    <div class="container-fluid px-4">
      <h4 class="mt-4">
        RESERVACIÓN <span style="font-weight: 200"> / SALAS FÍSICAS</span>
      </h4>
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          RESERVACIÓN
        </li>
        <li class="breadcrumb-item">SALAS FÍSICAS</li>
      </ol> -->
      <br />
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-align-justify"></i>
              FORMULARIO DE RESERVACIÓN
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8">
                  <div class="form-group">
                    <p></p>
                    <label for="exampleFormControlSelect1" class=""
                      >Folio:</label
                    >
                    <input
                      v-if="data"
                      v-model="data.folio"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <p></p>
                    <label for="exampleFormControlSelect1" class=""
                      >Área:
                    </label>
                    <input
                      v-if="data"
                      v-model="data.area"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <p></p>
                    <label for="exampleFormControlSelect1" class=""
                      >Zona:
                    </label>
                    <input
                      v-if="data"
                      v-model="data.zone"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <p></p>
                    <label for="exampleFormControlSelect1" class=""
                      >Ubicación:
                    </label>
                    <input
                      v-if="data"
                      v-model="data.location"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <p></p>
                    <label for="exampleFormControlSelect1" class=""
                      >Sala:
                    </label>
                    <input
                      v-if="data"
                      v-model="data.meeting_room"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <p></p>
                  <RoomAccesoriesSelect
                    v-if="data"
                    :capturedRoom="data.meeting_room_id"
                  ></RoomAccesoriesSelect>
                  <p></p>
                  <div class="form-group">
                    <label for="3" class="">Nombre de la reunión: </label>
                    <input
                      v-model="meeting_name"
                      type="text"
                      class="form-control"
                      placeholder="Reunión"
                      disabled
                    />
                  </div>
                  <p></p>
                  <div class="form-group">
                    <label for="exampleFormControlSelect2" class=""
                      >Fecha y horario:
                    </label>
                    <div class="row">
                      <div class="col-xl-4">
                        <label for="exampleFormControlSelect2" class=""
                          >Fecha
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="fecha"
                          name="fecha"
                          :min="date_min"
                          v-model="date"
                        />
                      </div>
                      <div class="col-xl-3">
                        <label for="exampleFormControlSelect2" class=""
                          >Hora Inicio
                        </label>
                        <vue-timepicker
                          format="HH:mm"
                          hide-clear-button
                          close-on-complete
                          v-model="hour_start"
                        ></vue-timepicker>
                      </div>
                      <div class="col-xl-3">
                        <label for="exampleFormControlSelect2" class=""
                          >Hora Final
                        </label>
                        <vue-timepicker
                          format="HH:mm"
                          hide-clear-button
                          close-on-complete
                          v-model="hour_end"
                        ></vue-timepicker>
                      </div>
                      <div
                        class="
                          col-xl-2
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                      >
                        <RoomReservationCalendar
                          v-if="data"
                          :capturedRoom="data"
                        ></RoomReservationCalendar>
                      </div>
                    </div>
                  </div>
                  <p></p>
                  <div class="form-group">
                    <label for="exampleFormControlSelect2" class=""
                      >No. Asistentes:
                      <span
                        class="buzonColor"
                        style="font-weight: 500; color: #ff0000"
                      >
                        (Cupo máximo de 10 asistentes)</span
                      ></label
                    >
                    <select
                      v-model="no_assistants"
                      disabled
                      class="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                  <br />
                  <div class="form-group centerItems">
                    <button
                      class="btn btn-portal btn-lg"
                      @click="MRoomsReasigSchedule()"
                    >
                      REAGENDAR
                    </button>
                  </div>
                </div>
                <div class="col-xl-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import RoomAccesoriesSelect from "./components/RoomAccesoriesSelect.vue";
import RoomReservationCalendar from "./components/RoomReservationCalendar.vue";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  name: "RoomsReserve",
  components: {
    RoomAccesoriesSelect,
    VueTimepicker,
    RoomReservationCalendar,
  },
  data() {
    return {
      data: null,
      error: null,
      meeting_name: null,
      date: null,
      date_min: null,
      date_today: null,
      hour_start: null,
      hour_end: null,
      no_assistants: null,
    };
  },
  async mounted() {
    let self = this;
    self.seeDetail();
  },
  methods: {
    seeDetail() {
      axios
        .post("/MRoomsDetailRequest", {
          id_request: this.$route.params.id,
        })
        .then((response) => {
          this.data = response.data[0];
          this.meeting_name = this.data.meeting_name;
          this.no_assistants = this.data.no_assistants;
          const splitHour = this.data.hour_meeting.split(" ");
          this.hour_start = splitHour[0].slice(0, -3);
          this.hour_end = splitHour[2].slice(0, -3);
          const splitDate = this.data.date_meeting.split("/");
          //get month number
          /* var mes = "";
          let meses = [
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
          for (let index = 0; index < meses.length; index++) {
            const element = meses[index];
            if (element == splitDate[1]) {
              mes = index + 1;
            }
          }
          this.date = "20" + splitDate[2] + "-" + mes + "-" + splitDate[0];
          this.getDateNow(); */
          let mes = "";
          let meses = [
            "En",
            "Febr",
            "Mzo",
            "Abr",
            "My",
            "Jun",
            "Jul",
            "Agt",
            "Sept",
            "Oct",
            "Nov",
            "Dic",
          ];
          for (let index = 0; index < meses.length; index++) {
            const element = meses[index];
            if (element == splitDate[1]) {
              mes = index + 1;
            }
          }
          var formattedMes = ("0" + mes).slice(-2);
          this.date =
            "20" + splitDate[2] + "-" + formattedMes + "-" + splitDate[0];
          this.getDateNow();
          this.date_min = this.date;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      this.date_today = year + "-" + month + "-" + day;
    },
    hourFilter() {
      if (this.hour_start >= this.hour_end) {
        this.hour_end = null;
      }
      if (
        new Date(this.date_today + " " + this.hour_end) -
          new Date(this.date_today + " " + this.hour_start) >
        3600000
      ) {
        this.hour_end = null;
      }
    },
    MRoomsReasigSchedule() {
      if (this.hour_start != "00:00" && this.hour_end != "00:00") {
        const date1 = this.date + " " + this.hour_start;
        const date2 = this.date + " " + this.hour_end;
        axios
          .post("/MRoomsReasigSchedule", {
            id_request: this.$route.params.id,
            schedule_from: date1,
            schedule_to: date2,
          })
          .then((response) => {
            alert(response.data[0].mesage);
            if (response.data[0].mesage == "Operación Exitosa.") {
              this.$router.push({ name: "AdminReservations" });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Rango de hora no válido");
      }
    },
  },
};
</script>
<style>
input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
