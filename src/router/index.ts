import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

import store from "../store/index";

const routGuard = (to, from, next) => {
  let isAuthenticated = false;
  const storeState = store.state['currentUser'].loginStatus;

  if (storeState) isAuthenticated = true;
  else isAuthenticated = false;

  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    name: "user-landign",
    beforeEnter: routGuard,
    component: () => import("@/views/landingUser.vue"),
  },
  {
    path: "/profile",
    name: "user-profile",
    beforeEnter: routGuard,
    component: () => import("@/views/userProfile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
