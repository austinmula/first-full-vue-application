import * as VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/login", name: "login", component: Login },
];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
});

export default router;