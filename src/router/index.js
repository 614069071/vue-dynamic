import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

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
    name: 'Login',
    component: Login
  },
]

export const dynamicRouter = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "test" */ '@/views/About.vue'),
    meta: {
      name: '关于'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue'),
    meta: {
      name: '测试'
    },
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: () => import(/* webpackChunkName: "test" */ '@/views/Test1.vue'),
        meta: {
          name: '测试1'
        },
      }
    ]
  }
];

export const dynamicStRouter = [
  {
    path: '/',
    name: 'layout',
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
        component: () => import(/* webpackChunkName: "test" */ '@/views/product/index'),
        meta: { name: '生产系统' },
        children: [
          {
            path: '/product/order',
            name: 'order',
            component: () => import(/* webpackChunkName: "test" */ '@/views/product/order'),
            meta: { name: '订单管理' },
          }
        ]
      },
    ]
  },

];

// 其他路由
export const otherRouter = [
  {
    path: '*',
    name: 'E404',
    component: import(/* webpackChunkName: "test" */ '@/views/E404')
  }
]

const router = new VueRouter({ routes: [...routes, ...dynamicStRouter] })

export default router
