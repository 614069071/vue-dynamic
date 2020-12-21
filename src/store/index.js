import Vue from 'vue';
import router from '@router';
import { storages } from '@utils';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// import router, { dynamicRouter, otherRouter } from '@/router'

// // 将后台返回的菜单列表数据map成新的路由

// /* 
//   @arr1 后端返回的菜单路由
//   @arr2 前端动态路由
//   @return 新的路由列表
// */

// function mapDynamicRouter(arr1 = [], arr2 = []) {
//   let arr = [];

//   arr1.forEach(({ url, children }) => {
//     let item = {};

//     // 方法1 两次循环
//     arr2.forEach(ele => {
//       if (url === ele.path) {
//         item.path = ele.path;
//         item.component = ele.component;
//         item.name = ele.name;
//         item.meta = ele.meta;
//       }
//       if (children && children.length && ele.children && ele.children.length) {
//         item.children = mapDynamicRouter(children, ele.children);
//       }
//     })

//     // 方法2 循环 + find方法
//     // const item2 = arr2.find(ele => ele.path === url);

//     // if (item2) {
//     //   item.path = item2.path;
//     //   item.component = item2.component;
//     //   item.meta = item2.meta;
//     // }

//     // if (children && children.length && item2.children && item2.children.length) {
//     //   item.children = mapDynamicRouter(children, item2.children);
//     // }

//     arr.push(item);
//   })

//   return arr;
// }


// // list为模拟login后台返回的动态菜单列表
// const list = [
//   {
//     url: '/test',
//     name: 'test',
//     children: [
//       {
//         url: '/test1',
//         name: 'test1'
//       }
//     ]
//   },
//   {
//     url: '/about',
//     name: 'about',
//   }
// ];

const cacheRoutes = storages.get('cacheRoutes') || [];
const cacheRoute = storages.get('cacheRoute') || '';

export default new Store({
  state: {
    hasPermission: false,
    breadcrumbRouter: cacheRoutes,
    routerDefaultActive: cacheRoute,
    defaultOpenedsArray: []
  },
  mutations: {
    // 登录成功设置
    setPermission(state, data) {
      // router.addRoutes(dynamicRouterHome);
      state.hasPermission = data;
    },
    // tab 列表
    setBreadcrumbRouter(state, data = []) {
      const list = state.breadcrumbRouter;
      const is = list.find(e => e.url === data.url);
      if (is) return;
      list.push(data);
      storages.set('cacheRoutes', list);
    },
    // tab 删除
    delBreadcrumbRouter(state, i) {
      let list = state.breadcrumbRouter;
      list.splice(i, 1);
      state.breadcrumbRouter = list;
      storages.set('cacheRoutes', list);
      console.log(list, 'list');
      if (list.length) {
        const last = list[list.length - 1];
        this.commit('setRouterDefaultActive', last);
      } else {
        router.push('/');
        this.commit('setDefaultOpenedsArray');
        this.commit('setRouterDefaultActive', { meta: '' });
      }
    },
    // 设置默认展开菜单
    setRouterDefaultActive(state, data = {}) {
      const route = data.url || data.meta.index || '';
      console.log(route)
      state.routerDefaultActive = route;
      storages.set('cacheRoute', route);
    },
    // 设置菜单收起
    setDefaultOpenedsArray(state) {
      state.defaultOpenedsArray = [];
    }
  }
});
