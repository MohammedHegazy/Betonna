import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RealestatesViewVue from "@/views/RealestatesView.vue";
import RealestateInfoVue from "@/views/RealestateInfo.vue";
import FavouriteRealestatesVue from "@/views/FavouriteRealestates.vue";
import Full360PhotosVue from "@/views/Full360Photo.vue";
import RealAgentsVue from "@/views/RealAgents.vue";
import RealAgentVue from "@/views/RealAgent.vue";
import CompanyViewVue from "@/views/CompanyView.vue";
import ServicesViewVue from "@/views/ServicesView.vue";
import ServiceCompaniesVue from "@/views/ServiceCompanies.vue";

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
  {
    path: "/360-photos",
    name: "Full 360 Photos",
    component: Full360PhotosVue,
  },
  {
    path: "/agents",
    name: "Real Estates Agents",
    component: RealAgentsVue,
  },
  {
    path: "/agent",
    name: "Real Estates Agent",
    component: RealAgentVue,
  },
  {
    path: "/company",
    name: "Real Estate Company",
    component: CompanyViewVue,
  },
  {
    path: "/services",
    name: "Services View",
    component: ServicesViewVue,
  },
  {
    path: "/service-companies",
    name: "Service Companies View",
    component: ServiceCompaniesVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
