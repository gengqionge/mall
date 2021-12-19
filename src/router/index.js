import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/Home";

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
