import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import VueHome from "../views/VueHome.vue";
import ProjectDetails from "../views/ProjectDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project/:id",
    name: "ProjectDetails",
    props: true,
    component: ProjectDetails
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
  {
    path: "/videos",
    name: "videos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideoGallery.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/vuehome",
    name: "VueHome",
    component: VueHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
