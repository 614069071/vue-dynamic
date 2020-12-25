import Vue from 'vue';
import NProgress from "nprogress"
import store from '@/store';
import router from '@/router';
import Request from '@/fetch';
import ElementUI, { Message } from 'element-ui';

import "nprogress/nprogress.css"
import 'normalize.css';
import './styles/base.scss';
import './styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$axios = Request;
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.config.productionTip = false
NProgress.inc(0.2)
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

/* eslint-disable */
Message.install = vm => {
  vm.prototype.$message = Message;
};
/* eslint-enable*/

// vue router
router.beforeEach((to, from, next) => {
  NProgress.start()
  next();
});

router.afterEach((to, from) => {
  NProgress.done()

});