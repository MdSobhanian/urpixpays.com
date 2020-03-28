// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(AOS)
/*Vue.config.productionTip = false
import VTextMarquee from 'vue-text-marquee';
Vue.use(VTextMarquee);
import VueGoodLinks from 'vue-good-links';

// import the styles
import 'vue-good-links/dist/vue-good-links.css';

Vue.use(VueGoodLinks);
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
Vue.use(Vuesax, {
  // options here
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
