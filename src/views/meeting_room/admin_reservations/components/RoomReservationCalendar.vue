<template>
  <div class="form-group">
    <button
      type="button"
      class="btn btn-success"
      @click="showModal = true"
      style="padding: 10px"
    >
      <i class="fas fa-calendar-alt fa-2x"></i>
    </button>
    <!-- Modal -->
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div
              class="modal-dialog"
              role="document"
              style="max-width: 1200px; max-heigth: 700px"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-weight: 700">
                    {{ capturedRoom.meeting_room }}
                  </h5>
                </div>
                <div class="modal-body">
                  <vue-cal
                    hide-view-selector
                    active-view="week"
                    :time-step="30"
                    :disable-views="['day', 'month', 'year']"
                    locale="es"
                    :events="events"
                    style="height: 400px"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="showModal = false"
                  >
                    Cerrar
                  </button>
                  <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/es.js";
import "vue-cal/dist/vuecal.css";
export default {
  name: "RoomAccesoriesSelect",
  components: {
    VueCal,
  },
  props: {
    warn: {
      type: Function,
      default: null,
    },
    capturedRoom: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      error: null,
      showModal: false,
      events: [],
    };
  },
  async mounted() {
    let self = this;
    self.MRoomsCalendar();
  },
  methods: {
    MRoomsCalendar() {
      this.data = null;
      this.events = [];
      axios
        .post("/MRoomsCalendarSchedule", {
          id_mrooms: this.capturedRoom.meeting_room_id,
        })
        .then((response) => {
          this.data = response.data;
          for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];
            var calendario = {
              start: element.schedule_from,
              end: element.schedule_to,
              title: element.meeting_name,
              content: element.status,
              class: element.status,
              deletable: false,
              resizable: false,
              draggable: false,
            };
            this.events.push(calendario);
          }
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
  border: 1px solid #ffffff;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
}

.Confirmada {
  background-color: #4eb254;
  border: 1px solid #ffffff;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
}

.Cancelada {
  background-color: #bb3434;
  border: 1px solid #ffffff;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
}

.Reprogramada {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid #ffffff;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
}

.vuecal__title-bar {
  background-color: #42b983;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-size: 1.4em;
  line-height: 1.3;
  min-height: 2em;
}
</style>
