<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4"></h3>
      <h4 class="mt-4">
        DETALLE <span style="font-weight: 200"> / SALAS FÍSICAS</span>
      </h4>
      <p></p>
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          DETALLE
        </li>
        <li class="breadcrumb-item">SALAS FÍSICAS</li>
      </ol> -->
      <div class="row">
        <div class="col-xl-12">
          <table
            id="datatablesSimple"
            class="table table-striped table-sm"
            v-if="data"
          >
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-red-cancel">Folio</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.folio
                  }}</span>
                </td>
                <td class="text-red-cancel">Reunión</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.meeting_name
                  }}</span>
                </td>
              </tr>
              <tr>
                <td class="text-red-cancel">Solicitado por</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.user_name
                  }}</span>
                </td>
                <td class="text-red-cancel">Fecha</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.date_meeting
                  }}</span>
                </td>
              </tr>
              <tr>
                <td class="text-red-cancel">Horario</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.hour_meeting
                  }}</span>
                </td>
                <td class="text-red-cancel">Área</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.area
                  }}</span>
                </td>
              </tr>
              <tr>
                <td class="text-red-cancel">Zona</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.zone
                  }}</span>
                </td>
                <td class="text-red-cancel">Ubicación</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.location
                  }}</span>
                </td>
              </tr>
              <tr>
                <td class="text-red-cancel">Sala</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.meeting_room
                  }}</span>
                </td>
                <td class="text-red-cancel">No. Asistentes</td>
                <td class="text-red-cancel">
                  <span style="font-weight: 700; font-style: italic">{{
                    data.no_assistants
                  }}</span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="text-red-cancel">Estatus</td>
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
                    <span
                      class="badge bg-warning text-dark"
                      style="font-size: 16px"
                      v-if="data.id_status == 4"
                    >
                      {{ data.status }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <RoomAccesoriesSelect
            v-if="data"
            :capturedRoom="data.meeting_room_id"
          ></RoomAccesoriesSelect>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import RoomAccesoriesSelect from "./components/RoomAccesoriesSelect.vue";
export default {
  name: "ReservationDetail",
  components: {
    RoomAccesoriesSelect,
  },
  data() {
    return {
      data: null,
      error: null,
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
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style>
.btn-pending {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
  border-radius: 24px !important;
}
.btn-pending:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-pending,
.btn-pending:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-pending,
.btn-check:active + .btn-pending,
.btn-pending:active,
.btn-pending.active,
.show > .btn-pending.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-pending:focus,
.btn-check:active + .btn-pending:focus,
.btn-pending:active:focus,
.btn-pending.active:focus,
.show > .btn-pending.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-pending:disabled,
.btn-pending.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-confirm {
  color: #000;
  background-color: #36bc27;
  border-color: #36bc27;
  border-radius: 24px !important;
}
.btn-confirm:hover {
  color: #000;
  background-color: #53d844;
  border-color: #36bc27;
}
.btn-check:focus + .btn-confirm,
.btn-confirm:focus {
  color: #000;
  background-color: #53d844;
  border-color: #36bc27;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-confirm,
.btn-check:active + .btn-confirm,
.btn-confirm:active,
.btn-confirm.active,
.show > .btn-confirm.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #36bc27;
}
.btn-check:checked + .btn-confirm:focus,
.btn-check:active + .btn-confirm:focus,
.btn-confirm:active:focus,
.btn-confirm.active:focus,
.show > .btn-confirm.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-confirm:disabled,
.btn-confirm.disabled {
  color: #000;
  background-color: #36bc27;
  border-color: #36bc27;
}

.btn-cancel {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  border-radius: 24px !important;
}
.btn-cancel:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-cancel,
.btn-cancel:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-cancel,
.btn-check:active + .btn-cancel,
.btn-cancel:active,
.btn-cancel.active,
.show > .btn-cancel.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-cancel:focus,
.btn-check:active + .btn-cancel:focus,
.btn-cancel:active:focus,
.btn-cancel.active:focus,
.show > .btn-cancel.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-cancel:disabled,
.btn-cancel.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
