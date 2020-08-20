import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.scss';
import './css/common.scss';

Vue.use(ElementUI);

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to, from, 'to');
  if (!store.state.hasPermission) {
    store.commit('setPermission', true);
    next({ ...to, replace: true });
  } else {
    next();
  }
})

router.afterEach((to, from) => {
  console.log(to, 'afterEach');
  var routerList = to.matched
  console.log(routerList);
  store.commit('setBreadcrumbRouter', routerList);
  store.commit('setRouterDefaultActive', to.name)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
