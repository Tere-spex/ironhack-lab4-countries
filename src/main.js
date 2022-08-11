import { createApp } from "vue";
import App from "./App.vue";
import './tailwind.css';
import { routes } from "./routes.js";
import { createPinia } from "pinia";

const pinia = createPinia();

import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(pinia);
app.mount("#app");
