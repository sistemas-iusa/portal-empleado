import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueGtag from "vue-gtag";

import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts  from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Widgets from 'fusioncharts/fusioncharts.widgets';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme, Widgets);

import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

Vue.use(
  VueGtag,
  {
    config: { id: "G-0F9WQBLP17" },
  },
  router
);

import "../src/css/styles.css";

require("@/store/subscriber");

//axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

axios.defaults.baseURL = "https://dev.api-empleado.iusa.com.mx/api";

Vue.config.productionTip = false;

/* Caché de datos de página */
var _CACHE_OBJS = {};

function _init_cache(comp, key, cache) {
  var obj = cache[key];
  if (obj !== undefined) {
    comp[key] = obj;
  }
  var deep = typeof comp[key] === "object";
  comp.$watch(
    key,
    function (val) {
      // console.log("page " + key + " updated");
      cache[key] = val;
    },
    {
      deep: deep,
    }
  );
}

var _PAGE_CACHE = {
  /*
   * Inicializar los datos de la caché de la página
   * comp: objeto del componente de la página actual
   * ruta: ruta del enrutador vue de la página actual
   * datos: el nombre del objeto de datos que se almacenará en caché, o una matriz de nombres
   */
  cache: function (comp, path, data) {
    if (data == "" || data == undefined || data == null) {
      data = restore(comp._data);
    }
    var cache = _CACHE_OBJS[path];
    if (cache === undefined) {
      cache = {};
      _CACHE_OBJS[path] = cache;
    }
    if (typeof data == "string") {
      _init_cache(comp, data, cache);
    } else {
      var i;
      for (i = 0; i < data.length; ++i) {
        _init_cache(comp, data[i], cache);
      }
    }
    console.log(_CACHE_OBJS, "Caché de datos de página");
  },
  /* Borrar caché de página */
  clear: function (path) {
    delete _CACHE_OBJS[path];
  },
  /* Borrar todos los datos en caché */
  reset: function () {
    // console.log("reset page cache");
    _CACHE_OBJS = {};
  },
  /* Verifique si la caché de la página actual existe de acuerdo con la ruta */
  has_cache: function (path) {
    return _CACHE_OBJS[path] !== undefined && !isEmptyObject(_CACHE_OBJS[path]);
  },
};
Vue.prototype.$cache = _PAGE_CACHE;
/* Fin de la caché de datos de página */

/* eslint-disable no-new */
var restore = function (vueObject) {
  var result = [];
  for (var index in vueObject) {
    result.push(index);
  }
  return result;
};
var isEmptyObject = function (obj) {
  for (var key in obj) {
    return false;
  }
  return true;
};

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
