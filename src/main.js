import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFullPage from "vue-fullpage.js";

import "./assets/styles.scss";
import "wowjs/css/libs/animate.css";
import "animate.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
