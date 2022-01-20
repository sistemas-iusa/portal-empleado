<template>
  <div class="form-group">
    <br />
    <label for="exampleFormControlSelect4" class="">Sala:</label>
    <select
      class="form-control"
      v-model="room_select"
      id="exampleFormControlSelect4"
      @change="return_room_number()"
    >
      <option disabled :value="null">Seleccionar</option>
      <option v-for="room in data" :key="room.id_mrooms" :value="room">
        {{ room.m_name }}
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RoomSelect",
  props: {
    warn: {
      type: Function,
      default: null,
    },
    capturedLocation: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      room_select: null,
      data: null,
      error: null,
    };
  },
  methods: {
    return_room_number() {
      let data = this.room_select;
      this.warn(data);
    },
  },
  watch: {
    capturedLocation: function (val) {
      this.data = null;
      axios
        .post("/MRooms", {
          id_location: val,
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
