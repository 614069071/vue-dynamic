import Vue from 'vue'
import Vuex from 'vuex'
import router, { dynamicRouter, otherRouter } from '@/router'
const Layout = () => import(/* webpackChunkName: "test" */ '@/views/layout.vue')


// 将后台返回的菜单列表数据map成新的路由

/* 
  @arr1 后端返回的菜单路由
  @arr2 前端动态路由
  @return 新的路由列表
*/

function mapDynamicRouter(arr1 = [], arr2 = []) {
  let arr = [];

  arr1.forEach(({ url, children }) => {
    let item = {};

    // 方法1 两次循环
    arr2.forEach(ele => {
      if (url === ele.path) {
        item.path = ele.path;
        item.component = ele.component;
        item.name = ele.name;
        item.meta = ele.meta;
      }
      if (children && children.length && ele.children && ele.children.length) {
        item.children = mapDynamicRouter(children, ele.children);
      }
    })

    // 方法2 循环 + find方法
    // const item2 = arr2.find(ele => ele.path === url);

    // if (item2) {
    //   item.path = item2.path;
    //   item.component = item2.component;
    //   item.meta = item2.meta;
    // }

    // if (children && children.length && item2.children && item2.children.length) {
    //   item.children = mapDynamicRouter(children, item2.children);
    // }

    arr.push(item);
  })

  return arr;
}


// list为模拟login后台返回的动态菜单列表
const list = [
  {
    url: '/test',
    name: 'test',
    children: [
      {
        url: '/test1',
        name: 'test1'
      }
    ]
  },
  {
    url: '/about',
    name: 'about',
  }
];


const mapDynamicRouterArr = mapDynamicRouter(list, dynamicRouter);
const menuTree = JSON.stringify(mapDynamicRouterArr);

const dynamicRouterHome = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    meta: {
      name: '首页'
    },
    children: mapDynamicRouterArr
  },
  ...otherRouter
];

localStorage.setItem('menuTree', menuTree);



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasPermission: false,
    breadcrumbRouter: [],
    routerDefaultActive: ''
  },
  mutations: {
    setPermission(state, data = '') {
      router.addRoutes(dynamicRouterHome);
      state.hasPermission = data;
    },
    setBreadcrumbRouter(state, data = []) {
      state.breadcrumbRouter = data;
    },
    setRouterDefaultActive(state, data = '') {
      state.routerDefaultActive = data;
    }
  }
})
