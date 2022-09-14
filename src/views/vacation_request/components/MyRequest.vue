<template>
  <div class="row">
    <div class="col-xl-8"></div>
    <div class="col-xl-4">
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Folio"
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
    <div
      class="alert alert-info"
      role="alert"
      v-if="loading == true"
      style="font-weight: 600"
    >
      <!-- <font-awesome-icon icon="sync-alt"></font-awesome-icon> -->
      Cargando...
    </div>
    <div
      class="alert alert-warning"
      role="alert"
      v-if="data && data.length === 0"
      style="font-weight: 600"
    >
      <!-- <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon> -->
      Sin resultados
    </div>
    <div class="col-xl-12" v-if="data && data.length !== 0">
      <table
        id="datatablesSimple"
        class="table table-sm table-striped table-hover"
      >
        <thead>
          <tr>
            <th style="font-weight: 700">Folio</th>
            <th style="font-weight: 700">Días Solicitados</th>
            <th style="font-weight: 700" class="text-center">Total de días</th>
            <!-- <th style="font-weight: 700; font-style: italic">Fecha Regreso</th> -->
            <th style="font-weight: 700; text-align: center">Detalle</th>
            <th style="font-weight: 700; text-align: center">Estatus</th>
          </tr>
        </thead>
        <tbody v-if="data">
          <tr v-for="reservation in filteredRows" :key="reservation.id_request">
            <td
              class="text-red-cancel"
              style="font-size: 16px; font-weight: 600; font-weight: 500"
            >
              {{ reservation.folio }}
            </td>
            <!-- <td class="text-red-cancel" style="font-size: 16px">
              <span v-for="date in newFormat" :key="date.id">
                <i>{{ formatter(date) }}, </i>
              </span>
            </td> -->
            <td
              class="text-red-cancel"
              style="font-size: 16px; font-weight: 600"
            >
              {{ formatter(reservation.extra_days) }}
            </td>
            <td
              class="text-red-cancel text-center"
              style="font-size: 16px; font-weight: 600"
            >
              {{ counter(reservation.extra_days) }}
            </td>
            <!-- <td class="text-red-cancel" style="font-size: 16px">
              {{ reservation.dateReturn }}
            </td> -->
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
                  style="font-size: 16px; width: 110px"
                  v-if="reservation.id_status == 1"
                >
                  {{ reservation.status }}
                </span>
                <span
                  class="badge bg-success"
                  style="font-size: 16px; width: 110px"
                  v-if="reservation.id_status == 2"
                >
                  {{ reservation.status }}
                </span>
                <span
                  class="badge bg-danger"
                  style="font-size: 16px; width: 110px"
                  v-if="reservation.id_status == 3"
                >
                  {{ reservation.status }}
                </span>
              </div>
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
<style scoped></style>
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
      loading: true,
      errored: null,
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
          return folio.includes(searchTerm);
        })
      );
    },
  },
  methods: {
    async getMyVacationRequest() {
      this.data = null;
      this.pages = [];
      await axios
        .get("getMyVacationRequest")
        .then((response) => {
          this.data = response.data;
          /* let str = this.data[0].extra_days;
          let arr = str.split(",");
          this.newFormat = arr.map((a) => a.split("-").reverse().join("/")); */
        })
        .catch((error) => {
          this.errored = error;
          alert(this.errored);
        })
        .finally(() => (this.loading = false));
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
    formatter(date) {
      //console.log(date);
      let arr = date.split(",");
      let newFormat = arr.map((a) => a.split("-").reverse().join("/"));
      this.newFormatString = newFormat.toString();
      return this.newFormatString;
    },
    counter(date) {
      let arr = date.split(",");
      return arr.length;
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
