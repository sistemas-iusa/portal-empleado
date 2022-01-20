<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4"></h3>
      <h4 class="mt-4">
        ADMINISTRADOR <span style="font-weight: 200"> / SALAS FÍSICAS</span>
      </h4>
      <!-- <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          ADMINISTRADOR
        </li>
        <li class="breadcrumb-item">SALAS FÍSICAS</li>
      </ol> -->
      <p></p>
      <div class="row">
        <div class="col-xl-8">
          <router-link :to="{ name: 'CalendarReservations' }" class="nav-link"
                >
          <button
            type="button"
            class="btn btn-success"
            @click="showModal = true"
            style="padding: 10px 15px "
          >
            <i class="fas fa-calendar-alt fa-lg"></i>
          </button>
          </router-link>
        </div>
        <div class="col-xl-4">
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="search-addon"
              v-model="filter"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <p></p>
        <div class="col-xl-12">
          <table
            id="datatablesSimple"
            class="table table-sm table-striped table-hover"
          >
            <thead>
              <tr>
                <th style="font-weight: 700; font-style: italic">Folio</th>
                <th style="font-weight: 700; font-style: italic">Reunión</th>
                <th style="font-weight: 700; font-style: italic">
                  Solicitado por
                </th>
                <th style="font-weight: 700; font-style: italic">Fecha</th>
                <th style="font-weight: 700; font-style: italic">Horario</th>
                <th style="font-weight: 700; font-style: italic">Detalle</th>
                <th
                  style="
                    font-weight: 700;
                    font-style: italic;
                    text-align: center;
                  "
                >
                  Estatus
                </th>
                <th colspan="4" style="font-weight: 700; font-style: italic">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody v-if="data">
              <tr
                v-for="reservation in filteredRows"
                :key="reservation.id_request"
              >
                <td
                  class="text-red-cancel"
                  style="font-size: 16px; font-weight: 600"
                >
                  {{ reservation.folio }}
                </td>
                <td class="text-red-cancel" style="font-size: 16px">
                  {{ reservation.meeting_name }}
                </td>
                <td class="text-red-cancel" style="font-size: 16px">
                  {{ reservation.user_request }}
                </td>
                <td class="text-red-cancel" style="font-size: 16px">
                  {{ reservation.date_meeting }}
                </td>
                <td class="text-red-cancel" style="font-size: 16px">
                  {{ reservation.hour_meeting }}
                </td>
                <td class="centerItems">
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="seeDetail(reservation.detail)"
                    style="padding: 0px 10px 0px 10px"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                </td>
                <td>
                  <div class="centerItems">
                    <span
                      class="badge bg-warning text-dark"
                      style="font-size: 16px"
                      v-if="reservation.id_status == 1"
                    >
                      {{ reservation.status }}
                    </span>
                    <span
                      class="badge bg-success"
                      style="font-size: 16px"
                      v-if="reservation.id_status == 2"
                    >
                      {{ reservation.status }}
                    </span>
                    <span
                      class="badge bg-danger"
                      style="font-size: 16px"
                      v-if="reservation.id_status == 3"
                    >
                      {{ reservation.status }}
                    </span>
                    <span
                      class="badge bg-warning text-dark"
                      style="font-size: 16px"
                      v-if="reservation.id_status == 4"
                    >
                      {{ reservation.status }}
                    </span>
                  </div>
                </td>
                <td
                  v-for="accion in reservation.actions[0]"
                  :key="accion.id_status"
                >
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="statusChange(reservation.id_request, 2)"
                    v-if="accion.id_status == 2 && reservation.id_status == 1"
                  >
                    <i
                      class="fas fa-calendar-check"
                      data-toggle="tooltip"
                      data-placement="top"
                      style="color: #198754"
                      :title="accion.status"
                    ></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="statusChange(reservation.id_request, 3)"
                    v-if="accion.id_status == 3 && reservation.id_status == 1"
                  >
                    <i
                      class="fas fa-calendar-times"
                      data-toggle="tooltip"
                      data-placement="top"
                      style="color: #dc3545"
                      :title="accion.status"
                    ></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-light"
                    v-if="
                      (accion.id_status == 4 && reservation.id_status == 1) ||
                      (accion.id_status == 4 && reservation.id_status == 2)
                    "
                    @click="reprograming(reservation.detail)"
                  >
                    <i
                      class="fas fa-clock"
                      style="color: #ffc107"
                      data-toggle="tooltip"
                      data-placement="top"
                      :title="accion.status"
                    ></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-xl-12 d-flex flex-row-reverse">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  v-if="page != 1"
                  @click="page--"
                >
                  Previous
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  v-for="pageNumber in pages.slice(page - 1, page + 5)"
                  :key="pageNumber.id"
                  @click="page = pageNumber"
                >
                  {{ pageNumber }}
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  @click="page++"
                  v-if="page < pages.length"
                  class="page-link"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "Reservations",
  data() {
    return {
      data: null,
      error: null,
      filter: "",
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async mounted() {
    let self = this;
    self.MRoomsMyRequest();
  },
  computed: {
    filteredRows() {
      return this.paginate(
        this.data.filter((row) => {
          const folio = row.folio.toString().toLowerCase();
          const meeting_name = row.meeting_name.toLowerCase();
          const searchTerm = this.filter.toLowerCase();

          return (
            folio.includes(searchTerm) || meeting_name.includes(searchTerm)
          );
        })
      );
    },
  },
  methods: {
    MRoomsMyRequest() {
      this.data = null;
      this.pages = [];
      axios
        .get("/MRoomsAdminRequest")
        .then((response) => {
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    seeDetail(id) {
      this.$router.push({ path: "reservation_detail/" + id });
    },
    reprograming(id) {
      this.$router.push({ path: "reservation_reprogram/" + id });
    },
    statusChange(request, status) {
      axios
        .post("/MRoomsStatusChange", {
          id_request: request,
          id_status: status,
        })
        .then((response) => {
          alert(response.data[0].mesage);
          this.MRoomsMyRequest();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.data.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
  },
  watch: {
    data() {
      this.setPages();
    },
    filter() {
      this.page = 1;
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
button.page-link {
  display: inline-block;
}
</style>
