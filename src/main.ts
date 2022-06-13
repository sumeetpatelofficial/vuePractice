import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/scss/bootstrap.scss'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/scss/app.scss";
import "material-icons/iconfont/material-icons.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
