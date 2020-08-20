import Vue from 'vue';
// import { Dialog, Message, Button, Form, FormItem, Input } from 'element-ui';
import store from '@/store';
import router from '@/router';
import Request from '@/fetch';
import ElementUI, { Message } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';

let files = require.context('@/components', false, /\.vue$/);
files.keys().forEach(path => {
  let componentDefault = files(path).default;
  let componentName = path.split(".")[1].slice(1);
  Vue.component(componentName, componentDefault);
})

/* eslint-disable */
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message;
  Vue.prototype.$ELEMENT = { size: 'mini' };
};

const paration = {
  install(Vue, options) {
    Vue.use(ElementUI);
    Vue.prototype.$axios = Request;
  }
};
/* eslint-enable*/

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

router.afterEach(to => {
  var routerList = to.matched
  store.commit('setBreadcrumbRouter', routerList);
  store.commit('setRouterDefaultActive', to.name)
})

export default paration;