import { createRouter, createWebHistory } from "vue-router";

const createPath = (path, name, component, options = {}) => ({
  path,
  name,
  component,
  ...options,
});

const router = createRouter({
  history: createWebHistory(), // Không có base path
  routes: [
    createPath("/", "index", null, { redirect: "/main" }),
    createPath("/index.html", "index.html", null, { redirect: "/main" }),
    createPath("/main", "main", () => import("../pages/Mainpage.vue")),
    createPath("/:pathMatch(.*)*", "404", () => import("../pages/Notfound.vue")),
  ],
});

export default router;
