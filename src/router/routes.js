import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../components/HomePage.vue"),
  },
  {
    name: "Destination",
    path: "/Destination",
    component: () => import("../components/Destination.vue"),
  },

  {
    name: "Crew",
    path: "/Crew",
    component: () => import("../components/Crew.vue"),
  },
  // autre crew

  {
    name: "Technology",
    path: "/Technology",
    component: () => import("../components/Technology.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;