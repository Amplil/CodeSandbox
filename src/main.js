import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueClipboard from 'vue-clipboard2'

import App from "./App.vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueClipboard)
/*
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
*/
/*
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue' //追加
Vue.use(BootstrapVue) //追加
Vue.use(IconsPlugin) //追加
import 'bootstrap/dist/css/bootstrap.css' //追加
import 'bootstrap-vue/dist/bootstrap-vue.css' //追加
import App from './App.vue'
*/

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#App");
