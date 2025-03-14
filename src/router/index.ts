import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import Portal from "../components/PORTAL/portal.vue";
import DefList from "../components/DefList.vue";
import Home from "../components/home/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/hello', name: 'Hello',  component: HelloWorld},
    {path: '/cards', name: 'Cards',  component: Card},
    {path: '/counter', name: 'Counter',  component: Counter},
    {path: '/portal', name: 'Portal',  component: Portal},
    {path: '/deflist', name: 'Lists',  component: DefList}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router, routes}