<template>
  <div class="form-group">
    <br />
    <label for="exampleFormControlSelect2" class="">Zona:</label>
    <select
      class="form-control"
      v-model="zone_select"
      id="exampleFormControlSelect2"
      @change="return_zone_number()"
    >
      <option disabled :value="null">Seleccionar</option>
      <option v-for="zone in data" :key="zone.id_zone" :value="zone">
        {{ zone.zone }}
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ZoneSelect",
  props: {
    warn: {
      type: Function,
      default: null,
    },
    capturedArea: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      zone_select: null,
      data: null,
      error: null,
    };
  },
  methods: {
    return_zone_number() {
      let data = this.zone_select;
      this.warn(data);
    },
  },
  watch: {
    capturedArea: function (val) {
      this.data = null;
      axios
        .post("/MRoomsZone", {
          id_area: val,
        })
        .then((response) => {
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
