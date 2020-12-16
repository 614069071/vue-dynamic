import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login';

Vue.use(VueRouter);

//push 
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
}

//replace
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

export const dynamicRouter = [];

// 其他路由
export const otherRouter = [
  {
    path: '/error',
    component: () => import(/* webpackChunkName: "test" */ '@/views/e404')
  },
  {
    path: '*',
    redirect: '/error'
  },
]

export const dynamicStRouter = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "test" */ '@/views/layout'),
    meta: {
      name: '首页'
    },
    children: [
      {
        path: '/',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "test" */ '@/views/welcome'),
        meta: {
          name: '首页'
        }
      },
      {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "test" */ '@/views/product'),
        meta: { name: '生产系统' },
        children: [
          {
            path: '/product',
            name: 'order',
            component: () => import(/* webpackChunkName: "test" */ '@/views/product/order'),
            meta: { name: '订单管理' },
          },
        ]
      },
      ...otherRouter
    ]
  },

];




const router = new VueRouter({ routes: [...routes, ...dynamicStRouter] });

export default router
