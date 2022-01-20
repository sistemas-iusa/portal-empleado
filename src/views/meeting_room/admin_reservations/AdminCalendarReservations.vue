<template>
  <main>
    <div class="container-fluid px-4">
      <h4 class="mt-4">
        CALENDARIO <span style="font-weight: 200"> / SALAS FÍSICAS</span>
      </h4>
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          CALENDARIO DE SALAS
        </li>
        <li class="breadcrumb-item">SALAS FÍSICAS</li>
      </ol> -->
      <br />
      <div class="row">
        <div class="col-xl-12">
          <div class="form-group">
            <label
              for="exampleFormControlSelect2"
              style="font-weight: 500; margin-bottom: 10px"
              >Seleccionar Sala:</label
            >
            <select
              v-model="mrooms_select"
              @change="MRoomsCalendar()"
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option
                v-for="mrooms in user_mrooms"
                :key="mrooms.id_mrooms"
                :value="mrooms.id_mrooms"
              >
                {{ mrooms.m_name }}
              </option>
            </select>
          </div>
        </div>
        <p></p>
        <div class="col-xl-12">
          <vue-cal
            v-if="data != null"
            active-view="month"
            :disable-views="['day', 'years', 'year']"
            :time-step="30"
            locale="es"
            :events="events"
            style="height: 400px"
            :on-event-click="verDetalle"
          />
        </div>
      </div>
      <p></p>
    </div>
    <!-- Modal -->
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ event_select.title }}</h5>
                  <!-- <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="showModal = false"
                      >&times;</span
                    >
                  </button> -->
                </div>
                <div class="modal-body">
                  <ul>
                    <li>Inicio: {{ event_select.schedule_from }}</li>
                    <li>Fin: {{ event_select.schedule_to }}</li>
                  </ul>
                  <div class="center_item">
                    <p>
                      Estatus: <strong>{{ event_select.status }}</strong>
                    </p>
                  </div>

                  <!-- <button
                    class="btn btn-secondary"
                    @click="seeDetail(event_select.id_request)"
                  >
                    Ver Detalle
                  </button> -->
                  <button
                    class="btn btn-success"
                    v-if="event_select.id_status == 1"
                    @click="statusChange(event_select.id_request, 2)"
                    style="margin-right: 5px"
                  >
                    Confirmar
                  </button>
                  <button
                    class="btn btn-danger"
                    v-if="event_select.id_status == 1"
                    @click="statusChange(event_select.id_request, 3)"
                    style="margin-right: 5px"
                  >
                    Cancelar
                  </button>
                  <button
                    class="btn btn-warning"
                    v-if="
                      event_select.id_status == 1 || event_select.id_status == 2
                    "
                    @click="reprograming(event_select.id_request)"
                  >
                    Reprogramar
                  </button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="showModal = false"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/es.js";
import "vue-cal/dist/vuecal.css";
export default {
  name: "AdminCalendarReservations",
  components: {
    VueCal,
  },
  data() {
    return {
      data: null,
      error: null,
      events: [],
      mrooms_select: null,
      showModal: false,
      event_select: null,
      user_mrooms: [],
    };
  },
  mounted() {
    this.MRoomsSelectByAdm();
  },
  methods: {
    MRoomsSelectByAdm() {
      axios
        .get("MRoomsSelectByAdm")
        .then((response) => {
          this.user_mrooms = response.data;
          this.mrooms_select = this.user_mrooms[0].id_mrooms;
          this.MRoomsCalendar();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    MRoomsCalendar() {
      this.data = null;
      this.events = [];
      axios
        .post("/MRoomsCalendarByAdm", {
          id_mrooms: this.mrooms_select,
        })
        .then((response) => {
          this.data = response.data;
          for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];

            element.start = element.schedule_from;
            element.end = element.schedule_to;
            element.title = element.meeting_name;
            element.content = element.status;
            element.class = element.status;
            element.deletable = false;
            element.resizable = false;
            element.draggable = false;

            this.events.push(element);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    verDetalle(event, e) {
      this.event_select = event;
      this.showModal = true;
      e.stopPropagation();
    },
    seeDetail(id) {
      this.$router.push({ path: "meeting-room/reservation_detail/" + id });
    },
    reprograming(id) {
      this.$router.push({ path: "meeting-room/reservation_reprogram/" + id });
    },
    statusChange(request, status) {
      axios
        .post("/MRoomsStatusChange", {
          id_request: request,
          id_status: status,
        })
        .then((response) => {
          alert(response.data[0].mesage);
          this.showModal = false;
          this.MRoomsCalendar();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.Pendiente {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.Confirmada {
  background-color: #4eb254;
  border: 1px solid #4eb254;
  color: #fff;
}
.Cancelada {
  background-color: #bb3434;
  border: 1px solid #bb3434;
  color: #fff;
}
.Reprogramada {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__cell-events-count {
  background: #4eb254;
}

.vuecal__title-bar {
  background-color: #e4f5ef;
}

.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #42b983;
  color: #fff;
}

.vuecal__cell-events-count {
  left: 50%;
  top: 68%;
  transform: translateX(-50%);
  min-width: 14px;
  height: 14px;
  line-height: 12px;
  padding: 0 3px;
  background-color: rgba(66, 163, 185, 0.8);
  color: #fff;
  border-radius: 10px;
  font-size: 10px;
}
</style>
