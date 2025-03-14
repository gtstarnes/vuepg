import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import Portal from "../components/PORTAL/portal.vue";
import DefList from "../components/DefList.vue";

const routes = [
    {path: '/hello', component: HelloWorld},
    {path: '/card', component: Card},
    {path: '/cards', component: Card},
    {path: '/counter', component: Counter},
    {path: '/portal', component: Portal},
    {path: '/deflist', component: DefList}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router, routes}