import Vue from 'vue';
import NProgress from "nprogress";
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/locale';

import "nprogress/nprogress.css";
import 'normalize.css';
import './styles/base.scss';
import './styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  NProgress.start();

  next();
});

router.afterEach(({ matched = [] }) => {
  const route = matched[matched.length - 1];
  const exclude = ['/login', '/error'];
  const isExclude = exclude.includes(route.path);

  !isExclude && store.commit('UPDATE_CACHE_ROUTER', { path: route.path, title: route.meta.name });
  !isExclude && store.commit('UPDATE_DEFAULT_ACTIVE', route.path);

  NProgress.done();
});

new Vue({ router, store, i18n, render: h => h(App) }).$mount('#app');
