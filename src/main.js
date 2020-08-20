import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import paration from './paration'

import 'element-ui/lib/theme-chalk/index.css';
import './css/base.scss';
import './css/common.scss';

Vue.use(paration);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
