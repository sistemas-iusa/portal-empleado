<template>
  <div class="row">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          v-for="seccion in data"
          :key="seccion.id_seccion"
          class="nav-link"
          :class="{ active: tab_select === seccion.id_seccion }"
          :id="seccion.id_seccion + '-tab'"
          data-bs-toggle="tab"
          :data-bs-target="'#' + seccion.nombre_seccion"
          type="button"
          role="tab"
          :aria-controls="seccion.id_seccion"
          aria-selected="true"
          @click="changeSeccion(seccion.id_seccion)"
          style="font-weight: 500; color: #000"
          >{{ seccion.nombre_seccion.toUpperCase() }}</a
        >
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        v-for="seccion in data"
        :key="seccion.id_seccion"
        class="tab-pane fade show"
        :class="{ active: tab_select === seccion.id_seccion }"
        :id="seccion.nombre_seccion"
        role="tabpanel"
        :aria-labelledby="seccion.id_seccion + '-tab'"
      >
        <br />
        <div class="text-center">
          <label v-if="seccion.nombre_seccion != 'Conclusiones'"
            ><span style="font-weight: 500; color: #000">{{
              seccion.nombre_seccion.toUpperCase()
            }}</span></label
          >
        </div>
      </div>
      <div class="row">
        <SelectedOption />
        <Comments />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import SelectedOption from "./SelectedOption.vue";
import Comments from "./Comments.vue";
export default {
  components: {
    SelectedOption,
    Comments,
  },
  computed: {
    ...mapGetters({
      evaluation_select: "evaluation/evaluationSelect",
      seccion_select: "evaluation/seccionSelect",
    }),
  },
  data() {
    return {
      data: null,
      error: null,
      tab_select: null,
    };
  },
  async mounted() {
    let self = this;
    self.getSections();
  },
  methods: {
    ...mapActions({
      changeSeccionSelect: "evaluation/changeSeccionSelect",
    }),
    getSections() {
      this.changeSeccionSelect(null);
      axios
        .get("getSections")
        .then((response) => {
          this.data = response.data;
          this.tab_select = 1;
          this.changeSeccionSelect(this.tab_select);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeSeccion(data) {
      this.tab_select = data;
      this.changeSeccionSelect(this.tab_select);
    },
  },
};
</script>

<style></style>
