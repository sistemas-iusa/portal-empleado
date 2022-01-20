<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">RECIBOS DE NÓMINA</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-6">
          <span class="huge-3">DA CLICK SOBRE EL PDF O XML A VISUALIZAR.</span>
        </div>
      </div>
      <br />
      <div class="row cellContainer">
        <div class="col-xl-3" v-for="(item, index) in data" :key="index">
          <div class="card mb-3">
            <div
              class="
                card-header
                text-white
                bg-secondary
                centerItems
                card-icon-text-3
              "
            >
              {{ item.month_name }} {{ item.year }}
            </div>
            <table>
              <tbody>
                <tr
                  class="card-bg-stripe"
                  style="background: rgba(0, 0, 0, 0.075)"
                >
                  <td class="centerItems pad-tbl-card">
                    {{ item.fortnight_2 }}a Quincena
                  </td>
                  <td
                    class="huge-3 pad-tbl-card"
                    @click="getPayroll(item, item.fortnight_2, 'pdf')"
                  >
                    <i class="far fa-file-pdf"></i> PDF
                  </td>
                  <td
                    class="huge-3 pad-tbl-card"
                    @click="getPayroll(item, item.fortnight_2, 'xml')"
                  >
                    <i class="far fa-file-excel"></i> XML
                  </td>
                </tr>
                <tr class="card-bg-stripe">
                  <td class="centerItems pad-tbl-card">
                    {{ item.fortnight_1 }}a Quincena
                  </td>
                  <td
                    class="huge-3 pad-tbl-card"
                    @click="getPayroll(item, item.fortnight_1, 'pdf')"
                  >
                    <i class="far fa-file-pdf"></i> PDF
                  </td>
                  <td
                    class="huge-3 pad-tbl-card"
                    @click="getPayroll(item, item.fortnight_1, 'xml')"
                  >
                    <i class="far fa-file-excel"></i> XML
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getMonths();
  },
  methods: {
    async getMonths() {
      await axios
        .get("getMonths")
        .then((response) => (this.data = response.data.reverse()));
    },
    async getPayroll(item, fortnight, type) {
      await axios
        .post("getPayroll", {
          fortnight: fortnight,
          month: item.month,
          year: item.year,
          type: type,
        })
        .then(function (response) {
          window.open(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
