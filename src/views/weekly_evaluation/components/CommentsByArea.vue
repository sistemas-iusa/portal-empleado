<template>
  <div class="row" v-if="data != null">
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              aria-expanded="true"
              @click="collapse_status = !collapse_status"
            >
              <i class="fas fa-comments"></i>
              <span> COMENTARIOS</span>
            </button>
          </h5>
        </div>
        <div id="collapseOne" v-if="collapse_status">
          <div class="card-body">
            <ul v-for="(item, index) in data" :key="item.id">
              <li>
                <span style="font-weight:bold;">{{ data[index].nombre }}</span>
                <p></p>
                <p class="justify" v-if="data[index].comentarios.length > 0" style="font-style:italic;">
                  - {{ data[index].comentarios }}
                </p>
                <p v-else style="font-style:italic;">- Sin comentarios.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    weekSelect: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      error: null,
      collapse_status: false,
    };
  },
  watch: {
    weekSelect: function (val) {
      this.data = null;
      axios
        .post("/hoWeekAreasComments", {
          id_encuesta: val,
        })
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.justify {
  text-align: justify;
  text-justify: inter-word;
}
.btn-link {
  font-weight: 500 !important;
  color: #000 !important;
  text-decoration: none !important;
}
</style>
