<template>
  <div class="form-group">
    <br />
    <label for="exampleFormControlSelect1" class="">Área:</label>
    <select
      class="form-control"
      v-model="area_select"
      id="exampleFormControlSelect1"
      @change="return_area_number()"
    >
      <option disabled :value="null">Seleccionar</option>
      <option v-for="area in data" :key="area.id_area" :value="area">
        {{ area.area.toUpperCase() }}
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AreaSelect",
  props: {
    warn: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      area_select: null,
      data: null,
      error: null,
    };
  },
  async mounted() {
    let self = this;
    self.getAreaArray();
  },
  methods: {
    getAreaArray() {
      axios
        .get("MRoomsAreas")
        .then((response) => {
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    return_area_number() {
      let data = this.area_select;
      this.warn(data);
    },
  },
};
</script>

<style></style>
