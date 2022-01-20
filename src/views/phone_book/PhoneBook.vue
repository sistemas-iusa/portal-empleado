<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">DIRECTORIO TELEFÓNICO Y DE EXTENSIONES</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="card" style="padding: 20px">
        <div class="row">
          <p></p>
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
            <table id="tableBook" class="table">
              <thead>
                <tr>
                  <th style="font-weight: 700; font-style: italic">Persona</th>
                  <th style="font-weight: 700; font-style: italic">Ext.</th>
                  <th style="font-weight: 700; font-style: italic">
                    Departamento
                  </th>
                  <th style="font-weight: 700; font-style: italic">
                    Ubicación
                  </th>
                </tr>
              </thead>
              <tbody v-if="data">
                <tr
                  v-for="reservation in filteredRows"
                  :key="reservation.id_request"
                >
                  <td>{{ reservation.user }}</td>
                  <td>
                    <span class="badge bg-secondary">{{
                      reservation.ext
                    }}</span>
                  </td>
                  <td>{{ reservation.area }}</td>
                  <td>{{ reservation.location }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p></p>
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
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "PhoneBook",
  data() {
    return {
      data: null,
      error: null,
      filter: "",
      page: 1,
      perPage: 15,
      pages: [],
    };
  },
  async mounted() {
    let self = this;
    self.PhoneBook();
  },
  computed: {
    filteredRows() {
      return this.paginate(
        this.data.filter((row) => {
          let user = " ";
          let ext = " ";
          let area = " ";
          let location = " ";

          const searchTerm = this.filter.toLowerCase();
          if (row.user != null) {
            user = row.user.toString().toLowerCase();
          }

          if (row.ext != null) {
            ext = row.ext.toString().toLowerCase();
          }

          if (row.area != null) {
            area = row.area.toString().toLowerCase();
          }

          if (row.location != null) {
            location = row.location.toString().toLowerCase();
          }

          return (
            user.includes(searchTerm) ||
            ext.includes(searchTerm) ||
            area.includes(searchTerm) ||
            //director.includes(searchTerm) ||
            location.includes(searchTerm)
          );
        })
      );
    },
  },
  methods: {
    PhoneBook() {
      this.data = null;
      this.pages = [];
      axios
        .get("/PhoneBook")
        .then((response) => {
          this.data = response.data;
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

      if (posts) {
        this.pages = [];
        let numberOfPages = Math.ceil(posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      }

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
button.page-link {
  display: inline-block;
}
</style>
