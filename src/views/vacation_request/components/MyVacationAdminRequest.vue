<template>
  <div class="row">
    <div class="col-xl-8"></div>
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
            <th style="font-weight: 700; font-style: italic">Solicitado por</th>
            <th style="font-weight: 700; font-style: italic">Fecha Salida</th>
            <th style="font-weight: 700; font-style: italic">Fecha Regreso</th>
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
              {{ reservation.u_name }}
            </td>
            <td class="text-red-cancel" style="font-size: 16px">
              {{ reservation.dateStart }}
            </td>
            <td class="text-red-cancel" style="font-size: 16px">
              {{ reservation.dateReturn }}
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
              </div>
            </td>
            <td>
            <button
              type="button"
              class="btn btn-light"              
            >
              <i
                class="fas fa-calendar-check"
                data-toggle="tooltip"
                data-placement="top"
                style="color: #198754"
                title="Confirmar"
              ></i>
            </button>
            <button
              type="button"
              class="btn btn-light"
            >
              <i
                class="fas fa-calendar-times"
                data-toggle="tooltip"
                data-placement="top"
                style="color: #dc3545"
                title="Cancelar"
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
</template>
<style scoped>
</style>
<script>
import axios from "axios";
export default {
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
  mounted() {
    this.getMyVacationRequest();
  },
  computed: {
    filteredRows() {
      return this.paginate(
        this.data.filter((row) => {
          const folio = row.folio.toString().toLowerCase();
          //const meeting_name = row.meeting_name.toLowerCase();
          const searchTerm = this.filter.toLowerCase();
          return (
            folio.includes(searchTerm)
          );
        })
      );
    },
  },
  methods: {
    async getMyVacationRequest() {
      this.data = null;
      this.pages = [];
      await axios
        .get("getMyVacationAdminRequest")
        .then((response) => (this.data = response.data));
    },
    seeDetail(id) {
      this.$router.push({ path: "vacation_detail/" + id });
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

<style></style>
