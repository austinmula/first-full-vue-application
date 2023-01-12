import * as Vue from "vue";
import router from "./router/routes";
import store from "./store";

import App from "./App.vue";

const app = Vue.createApp(App);


app.use(store);
app.use(router);
app.mount("#root");