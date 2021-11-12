<template>
  <h6>{{ data }}</h6>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
      error: null,
    };
  },
  async mounted() {
    let self = this;
    self.getPerformance();
  },
  methods: {
    async getPerformance() {
      let self = this;
      await axios
        .post("hoWeek", {
          id_poll: 72,
        })
        .then(function(response) {
          self.data = response.data;
        })
        .catch(function(error) {
          this.error = error;
        });
    },
  },
};
</script>

<style></style>
