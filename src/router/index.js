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
    component: () => import(/* webpackChunkName: "test" */ '@/views/common/e404')
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
        path: '/resource',
        component: () => import(/* webpackChunkName: "test" */ '@/views/resource'),
        meta: { name: '资源管理' },
        children: [
          {
            path: '/resource',
            name: 'resource',
            component: () => import(/* webpackChunkName: "test" */ '@/views/resource/overview'),
            meta: { name: '综合数据' },
          },
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "test" */ '@/views/order'),
        meta: { name: '订单管理' },
        children: [
          {
            path: '/order',
            name: 'order-inquire',
            component: () => import(/* webpackChunkName: "test" */ '@/views/order/inquire'),
            meta: { name: '订单查询' },
          },
        ]
      },
      {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "test" */ '@/views/product'),
        meta: { name: '产品管理' },
        children: [
          {
            path: '/product',
            name: 'product-inquire',
            component: () => import(/* webpackChunkName: "test" */ '@/views/product/inquire'),
            meta: { name: '产品数据查询' },
          },
        ]
      },
      {
        path: '/banner',
        name: 'banner',
        component: () => import(/* webpackChunkName: "test" */ '@/views/banner'),
        meta: { name: '广告管理' },
        children: [
          {
            path: '/banner',
            name: 'banner-manage',
            component: () => import(/* webpackChunkName: "test" */ '@/views/banner/list'),
            meta: { name: '广告管理' },
            children: [
              {
                path: '/banner',
                name: 'banner-list',
                component: () => import(/* webpackChunkName: "test" */ '@/views/banner/list/list'),
                meta: { name: '广告列表' },
              },
              {
                path: '/banner/editor',
                name: 'banner-editor',
                component: () => import(/* webpackChunkName: "test" */ '@/views/banner/list/editor'),
                meta: { name: '广告编辑' },
              }
            ]
          }
        ]
      },
      {
        path: '/log',
        name: 'log',
        component: () => import(/* webpackChunkName: "test" */ '@/views/log'),
        meta: { name: '日志管理' },
        children: [
          {
            path: '/log',
            name: 'log-inquire',
            component: () => import(/* webpackChunkName: "test" */ '@/views/log/inquire'),
            meta: { name: '日志查询' },
          },
        ]
      },
      {
        path: '/system',
        component: () => import(/* webpackChunkName: "test" */ '@/views/system'),
        meta: { name: '账号管理' },
        children: [
          {
            path: '/system',
            name: 'system-account',
            component: () => import(/* webpackChunkName: "test" */ '@/views/system/account'),
            meta: { name: '账号管理' },
          },
        ]
      },
      ...otherRouter
    ]
  },

];




const router = new VueRouter({ routes: [...routes, ...dynamicStRouter] });

export default router
