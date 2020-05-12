// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon  components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(AOS)
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAlW_Q0_x1qDSP-okh6fhPerGn3j6Sk1LU",
  authDomain: "urpixpays2020.firebaseapp.com",
  databaseURL: "https://urpixpays2020.firebaseio.com",
  projectId: "urpixpays2020",
  storageBucket: "urpixpays2020.appspot.com",
  messagingSenderId: "415070639966",
  appId: "1:415070639966:web:e115c5f66277eadd23e1cf",
  measurementId: "G-6C0RDFRE31"
};
firebase.initializeApp(firebaseConfig) ;
import store from "./store";
firebase.auth().onAuthStateChanged(user => {
  if (user){
    store.dispatch("fetchUser", user);
  }

});
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
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
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
Vue.use(vuesax)
import Loader from "./components/Loader";
Vue.component('loader',Loader)
/* eslint-disable no-new */
window.Event = new Vue();
Vue.prototype.$getResourceUrl=function getResourceUrl(val){
  return process.env.VUE_APP_R_URL+val;
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
