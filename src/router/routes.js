import * as VueRouter from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    { path: "/", component: Home },
];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
});

export default router;