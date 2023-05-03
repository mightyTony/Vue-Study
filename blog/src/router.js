import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue';
import Home from './components/home.vue';
import Detail from './components/detail.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;