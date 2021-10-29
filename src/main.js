import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

require("@/store/subscriber");

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

//axios.defaults.baseURL = "https://api-empleado.iusa.com.mx/api/";

Vue.config.productionTip = false

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
