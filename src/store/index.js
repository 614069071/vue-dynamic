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

const breadcrumbRouter = storages.get('CACHE_ROUTERS') || [];
const routerDefaultActive = storages.get('DEFAULT_ACTIVE') || '';
const __accessToken__ = storages.get('__accessToken__');

export default new Store({
  state: {
    __accessToken__,
    breadcrumbRouter,
    routerDefaultActive,
    defaultOpenedsArray: []
  },
  mutations: {
    // 登录成功设置
    UPDATE_TOKEN(state, toekn) {
      // router.addRoutes(dynamicRouterHome);
      storages.set('__accessToken__', toekn);
      state.__accessToken__ = toekn;
    },
    // 更新 tab 列表
    UPDATE_CACHE_ROUTER(state, data = { meta: '' }) {
      const list = state.breadcrumbRouter;
      const is = list.find(e => e.name === data.name);
      if (is) return;
      list.push(data);
      storages.set('CACHE_ROUTERS', list);
    },
    // 删除 tab 项
    DELETE_CACHE_ROUTER(state, i) {
      let list = state.breadcrumbRouter;
      list.splice(i, 1);
      state.breadcrumbRouter = list;
      storages.set('CACHE_ROUTERS', list);
      if (list.length) {
        const item = list[i - 1];
        router.push(item.path);
        this.commit('UPDATE_DEFAULT_ACTIVE', item.path);
      } else {
        router.push('/');
        this.commit('UPDATE_DEFAULT_OPEN');
        this.commit('UPDATE_DEFAULT_ACTIVE', '');
      }
    },
    // 清除 tab 
    CLEAR_CACHE_ROUTER(state) {
      state.breadcrumbRouter = [];
      storages.set('CACHE_ROUTERS', []);
    },
    // 设置默认展开菜单项
    UPDATE_DEFAULT_ACTIVE(state, data = {}) {
      state.routerDefaultActive = data;
      storages.set('DEFAULT_ACTIVE', data);
    },
    // 设置菜单收起
    UPDATE_DEFAULT_OPEN(state) {
      state.defaultOpenedsArray = [];
    }
  }
});
