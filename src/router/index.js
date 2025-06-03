import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TaskListView from "@/views/TaskListView.vue";
import TaskFormView from "@/views/TaskFormView.vue";
import AboutView from "@/views/AboutView.vue";
import CategoryManager from "@/views/CategoryManager.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskListView,
    props: () => ({ key: Date.now() }),
  },
  { path: "/tasks/new", name: "task-new", component: TaskFormView },
  {
    path: "/tasks/edit/:id",
    name: "task-edit",
    component: TaskFormView,
    props: true,
  },
  { path: "/about", name: "about", component: AboutView },
  { path: "/categorias", name: "categorias", component: CategoryManager },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
