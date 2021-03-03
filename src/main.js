import Vue from 'vue';
import NProgress from "nprogress";
import ElementUI from 'element-ui';
// import { Menu, MenuItem, Table, TableColumn, Form, FormItem, Radio, Select, Input, InputNumber, DatePicker, Option, Col, Row, Pagination, Popover, Button, Avatar, Dialog, Progress, Carousel, CarouselItem, Upload } from 'element-ui';
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

Vue.use(ElementUI);

// Vue.
//   use(Menu).
//   use(MenuItem).
//   use(Table).
//   use(TableColumn).
//   use(Form).
//   use(FormItem).
//   use(Radio).
//   use(Select).
//   use(Option).
//   use(Col).
//   use(Row).
//   use(Button).
//   use(Avatar).
//   use(Pagination).
//   use(Input).
//   use(InputNumber).
//   use(DatePicker).
//   use(Dialog).
//   use(Progress).
//   use(Carousel).
//   use(CarouselItem).
//   use(Upload).
//   use(Popover);

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
