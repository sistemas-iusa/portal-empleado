<template>
  <div class="form-group">
    <label for="3" class="">La sala cuenta con:</label>
    <div class="row">
      <div class="col-xl-4" v-for="room_accesories in data" :key="room_accesories.id_accesories">
        <div class="centerItems" v-if="room_accesories.id_accesories == 1">
          <i class="fas fa-video"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 2">
          <i class="fas fa-desktop"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 3">
          <i class="fas fa-wifi"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 4">
          <i class="fas fa-chalkboard"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 5">
          <i class="fas fa-tty"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 6">
          <i class="fas fa-desktop"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 7">
          <i class="fas fa-pen"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 8">
          <i class="fas fa-briefcase"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 9">
          <i class="fas fa-mug-hot"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 10">
          <i class="fas fa-utensils"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 11">
          <i class="fas fa-glass-whiskey"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
        <div class="centerItems" v-if="room_accesories.id_accesories == 12">
          <i class="fas fa-volume-up"></i>
          <p>{{room_accesories.accesories}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RoomAccesoriesSelect",
  props: {
    capturedRoom:{
      type: Number,
      default: null
    }
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  async mounted() {
    let self = this;
    self.MRoomsAccesories();
  },
  methods: {
    MRoomsAccesories(){
      this.data = null;
      axios
        .post("/MRoomsAccesories", {
          id_mrooms: this.capturedRoom,
        })
        .then((response) => {
          this.data = response.data;          
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>

<style></style>