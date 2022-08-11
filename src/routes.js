import Home from "./views/Home.vue";
import Countries from "./views/Countries.vue";
import Countrie from "./components/Countrie.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/countries",  name: "countries", component: Countries,
    children: [
      { path: "/countrie/:id",  name: "countrie", component: Countrie,}
    ]
  },
];
