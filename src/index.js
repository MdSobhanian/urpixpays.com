import MeterPan from "./components/MyChallenge/MeterPan/MeterPan";
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vt-meter-pan", MeterPan);
}
const plugin = {
  install
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

MeterPan.install = install;

export default MeterPan;
