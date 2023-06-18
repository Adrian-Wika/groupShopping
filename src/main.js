import Vue from "vue"
import { BootstrapVue, } from 'bootstrap-vue'
import App from "./App.vue"
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/main.css"

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)  // import IconsPlugin

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
