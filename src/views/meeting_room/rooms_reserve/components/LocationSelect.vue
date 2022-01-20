<template>
  <div class="form-group">
    <br />
    <label for="exampleFormControlSelect3" class="">Ubicación:</label>
    <select
      class="form-control"
      v-model="location_select"
      id="exampleFormControlSelect3"
      @change="return_location_number()"
    >
      <option disabled :value="null">Seleccionar</option>
      <option
        v-for="location in data"
        :key="location.id_location"
        :value="location"
      >
        {{ location.location }}
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LocationSelect",
  props: {
    warn: {
      type: Function,
      default: null,
    },
    capturedZone: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      location_select: null,
      data: null,
      error: null,
    };
  },
  methods: {
    return_location_number() {
      let data = this.location_select;
      this.warn(data);
    },
  },
  watch: {
    capturedZone: function (val) {
      this.data = null;
      axios
        .post("/MRoomsLocation", {
          id_zone: val,
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
