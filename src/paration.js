import Vue from 'vue';
import { Dialog, Message, Button, Form, FormItem, Input } from 'element-ui';
import Request from '@/fetch';
import router from '@/router';

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import '@/css/base.css';

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
    Vue.use(Dialog).use(Message).use(Button).use(Form).use(FormItem).use(Input);
    Vue.prototype.$axios = Request;
  }
};
/* eslint-enable*/

router.beforeEach((to, from, next) => {
  next();
})

export default paration;