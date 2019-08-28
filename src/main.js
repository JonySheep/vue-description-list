import DescriptionGroup from './components/DescriptionGroup'
import DescriptionItem from './components/DescriptionItem'
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin);

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

const Components = {
  DescriptionGroup, DescriptionItem
};

export function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("DescriptionGroup", DescriptionGroup);
  Vue.component("DescriptionItem", DescriptionItem);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default Components;
