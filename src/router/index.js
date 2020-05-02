import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
const About = () => import(/* webpackChunkName: "test" */ '@/views/About.vue')
const Album = () => import(/* webpackChunkName: "test" */ '@/views/Album/Album')
const Test = () => import(/* webpackChunkName: "test" */ '@/views/Test.vue')
const Test1 = () => import(/* webpackChunkName: "test" */ '@/views/Test1.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  }
]

export const dynamicRouter = [
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      name: '关于'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      name: '测试'
    },
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: Test1,
        meta: {
          name: '测试1'
        },
      }
    ]
  }
];

const router = new VueRouter({ routes })

export default router
