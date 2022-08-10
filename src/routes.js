import Home from "./views/Home.vue";
import Countries from "./views/Countries.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/countries",  name: "countries", component: Countries },
];
