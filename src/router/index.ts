import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

/** 自动加载【router】目录下其他路由模块 */
const files = require.context('.', true, /\.ts$/);
const modules: Array<RouteRecordRaw> = [];
files.keys().forEach((key) => {
  if (key === './index.ts') return;
  modules.push(files(key).default);
});

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...modules,
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      fullScreen: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
  },
  {
    path: '/e404',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "error" */ '@/views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/e500',
    name: 'Error500',
    component: () => import(/* webpackChunkName: "error" */ '@/views/500.vue'),
    meta: {
      title: '服务器异常',
    },
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import(/* webpackChunkName: "Test" */ '../views/test/Test.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
