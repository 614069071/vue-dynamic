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
  {
    path: '/album',
    name: 'Album',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Album/Album')
  }
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

const router = new VueRouter({ routes })

export default router
