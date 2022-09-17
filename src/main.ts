import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import BetterNav from "./components/NavComponents/BetterNav.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("BetterNav", BetterNav);
app.mount("#app");
