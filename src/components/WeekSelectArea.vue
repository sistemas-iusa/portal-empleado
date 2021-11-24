<template>
  <div class="form-group">
    <select
      v-model="week_select"
      class="form-control"
      @change="return_week_number()"
    >
      <option v-for="week in weeks_array" :key="week.id" :value="week.id_poll">
        {{ week.name_poll.toUpperCase() }} [ {{ week.date.toUpperCase() }} ]
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "WeekSelect",
  props: {
    warn: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      week_select: {},
      weeks_array: [],
    };
  },
  async mounted() {
    let self = this;
    self.getArray();
  },
  methods: {
    getArray() {
      axios
        .get("hoAreaReview")
        .then((response) => {
          this.weeks_array = response.data;
          this.week_select = this.weeks_array[0]["id_poll"];
          this.return_week_number();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    return_week_number() {
      let data = this.week_select;
      this.warn(data);
    },
  },
};
</script>
