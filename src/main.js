import * as Vue from "vue";
import router from "./router/routes";

import App from "./App.vue";

const app = Vue.createApp(App);

app.use(router);
app.mount("#root");