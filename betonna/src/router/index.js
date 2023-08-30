import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RealestatesViewVue from "@/views/RealestatesView.vue";
import RealestateInfoVue from "@/views/RealestateInfo.vue";
import FavouriteRealestatesVue from "@/views/FavouriteRealestates.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/real-estates",
    name: "Real Estates",
    component: RealestatesViewVue,
  },
  {
    path: "/real-estate-info",
    name: "Real Estate Info",
    component: RealestateInfoVue,
  },
  {
    path: "/favourite-list",
    name: "favoutire Real Estates",
    component: FavouriteRealestatesVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
