import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import Portal from "../components/PORTAL/portal.vue";
import DefList from "../components/DefList.vue";
import Home from "../components/home/Home.vue";
import Progress from "../components/Progress.vue";
import Tabs from "../components/tabs/Tabs.vue";
import Meter from "../components/meter/Meter.vue"
import Socials from "../components/socials/Socials.vue";
import ProductCard from "../components/product/ProductCard.vue";

export const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/hello', name: 'Hello',  component: HelloWorld},
    {path: '/cards', name: 'Cards',  component: Card},
    {path: '/counter', name: 'Counter',  component: Counter},
    {path: '/portal', name: 'Portal',  component: Portal},
    {path: '/deflist', name: 'Lists',  component: DefList},
    {path: '/progress', name: 'Progress', component: Progress},
    {path: '/tabs', name: 'Tabs', component: Tabs},
    {path: '/meter', name: 'Meter', component: Meter},
    {path: '/socials', name: 'Socials', component: Socials},
    {path: '/product', name: 'Product Card', component: ProductCard},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router