import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import Request from '@/fetch';
import ElementUI, { Message } from 'element-ui';

import 'normalize.css';
import './styles/base.scss';
import './styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$axios = Request;
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.config.productionTip = false

const files = require.context('@components', false, /\.vue$/);

files.keys().forEach(path => {
  const instance = files(path).default;
  const name = path.split(".")[1].slice(1);
  Vue.component(name, instance);
});

/* eslint-disable */
Message.install = vm => {
  vm.prototype.$message = Message;
};
/* eslint-enable*/

// vue router
router.beforeEach((to, from, next) => {
  if (!store.state.hasPermission) {
    store.commit('setPermission', true);
    next({ ...to, replace: true });
  } else {
    next();
  }
});

router.afterEach(to => {
  var routerList = to.matched
  store.commit('setBreadcrumbRouter', routerList); //分页导航
  store.commit('setRouterDefaultActive', to.name); //上一次打开的菜单
});