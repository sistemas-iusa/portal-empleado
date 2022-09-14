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
                  <AreaSelect :warn="catchCapturedArea"></AreaSelect>
                  <ZoneSelect
                    :capturedArea="capturedArea.id_area"
                    :warn="catchCapturedZone"
                  ></ZoneSelect>
                  <LocationSelect
                    :capturedZone="capturedZone.id_zone"
                    :warn="catchCapturedLocation"
                  ></LocationSelect>
                  <RoomSelect
                    :capturedLocation="capturedLocation.id_location"
                    :warn="catchCapturedRoom"
                  ></RoomSelect>
                  <p></p>
                  <RoomAccesoriesSelect
                    :capturedRoom="capturedRoom.id_mrooms"
                    :warn="catchCapturedRoomAccesories"
                  ></RoomAccesoriesSelect>
                  <p></p>
                  <div class="form-group">
                    <label for="3" class="">Nombre de la reunión: </label>
                    <input
                      v-model="meeting_name"
                      type="text"
                      class="form-control"
                      placeholder="Nombre de la reunión"
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
                          :min="date_today"
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
                          :capturedRoom="capturedRoom"
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
                      :disabled="!meeting_name"
                      class="btn btn-portal btn-lg"
                      @click="MRoomSaveRequest()"
                    >
                      RESERVAR
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
import AreaSelect from "./components/AreaSelect.vue";
import ZoneSelect from "./components/ZoneSelect.vue";
import LocationSelect from "./components/LocationSelect.vue";
import RoomSelect from "./components/RoomSelect.vue";
import RoomAccesoriesSelect from "./components/RoomAccesoriesSelect.vue";
import RoomReservationCalendar from "./components/RoomReservationCalendar.vue";

import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  name: "RoomsReserve",
  components: {
    AreaSelect,
    ZoneSelect,
    LocationSelect,
    RoomSelect,
    RoomAccesoriesSelect,
    RoomReservationCalendar,
    VueTimepicker,
  },
  data() {
    return {
      capturedArea: {},
      capturedZone: {},
      capturedLocation: {},
      capturedRoom: {},
      capturedRoomAccesories: {},
      meeting_name: null,
      no_assistants: null,
      date: null,
      hour_start: "00:00",
      hour_end: "00:00",
      date_today: null,
      time_diference: null,
    };
  },
  async mounted() {
    let self = this;
    self.getDateNow();
  },
  methods: {
    catchCapturedArea(data) {
      this.capturedArea = data;
    },
    catchCapturedZone(data) {
      this.capturedZone = data;
    },
    catchCapturedLocation(data) {
      this.capturedLocation = data;
    },
    catchCapturedRoom(data) {
      this.capturedRoom = data;
    },
    catchCapturedRoomAccesories(data) {
      this.capturedRoomAccesories = data;
    },
    /* getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      this.date_today = year + "-" + month + "-" + day;
    },*/
    /* getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      const month = ("0" + d.getMonth() + 1).slice(-2);
      const year = d.getFullYear();
      this.date_today = year + "-" + month + "-" + day;
      this.date = year + "-" + month + "-" + day;
    },*/
    getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      let mont_val = parseInt(d.getMonth());
      mont_val = mont_val + 1;
      const month = ("0" + mont_val).slice(-2);
      const year = d.getFullYear();
      this.date_today = year + "-" + month + "-" + day;
      this.date = year + "-" + month + "-" + day;
    },
    hourFilter() {
      if (
        (this.hour_start != null && this.hour_end != null) ||
        (this.hour_start != "00:00" && this.hour_end != "00:00")
      ) {
        if (this.hour_end != "00:00") {
          this.time_diference =
            (new Date(this.date_today + " " + this.hour_end) -
              new Date(this.date_today + " " + this.hour_start)) /
            60000;
          if (this.time_diference >= 61) {
            this.hour_end = null;
            this.hour_end = "00:00";
          }
          if (this.time_diference <= 1) {
            this.hour_end = null;
            this.hour_end = "00:00";
          }
        }
      }
    },
    MRoomSaveRequest() {
      if (this.hour_start != "00:00" && this.hour_end != "00:00") {
        const date1 = this.date + " " + this.hour_start;
        const date2 = this.date + " " + this.hour_end;
        axios
          .post("/MRoomSaveRequest", {
            id_mrooms: this.capturedRoom.id_mrooms,
            meeting_name: this.meeting_name,
            schedule_from: date1,
            schedule_to: date2,
            no_assistants: this.no_assistants,
            area: this.capturedArea.area,
            zone: this.capturedZone.zone,
            location: this.capturedLocation.location,
            mroom: this.capturedRoom.m_name,
            room_accesories: this.capturedRoomAccesories,
            date: this.date,
            hour_start: this.hour_start,
            hour_end: this.hour_end,
          })
          .then((response) => {
            if (
              response.data[0].mesage ==
              "Solicitud exitosa de la Reservación de Sala."
            ) {
              this.$router.push({ name: "Reservations" });
              this.$swal({
                title: response.data[0].mesage,
                icon: "success",
              });
            } else {
              //ojo
              alert(response.data[0].mesage);
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
