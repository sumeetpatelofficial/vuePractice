import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component:() => import('@/views/Login.vue'),
  },
  {
    path: "/user",
    name: "user-landign",
    component:() => import('@/views/landingUser.vue')
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
