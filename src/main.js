import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./music-data.js";

Vue.config.productionTip = false;

let data = {
  products: mock, // this.$root.$data.products
  cart: [],
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
