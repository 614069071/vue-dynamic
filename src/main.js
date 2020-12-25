import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/locale';
import NProgress from "nprogress"
import './initialize'
import "nprogress/nprogress.css"

NProgress.inc(0.2)
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

new Vue({ router, store, i18n, render: h => h(App) }).$mount('#app')