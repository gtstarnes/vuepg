import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import Portal from "../components/PORTAL/portal.vue";

const routes = [
    {path: '/hello', component: HelloWorld},
    {path: '/cards?', component: Card},
    {path: '/counter', component: Counter},
    {path: '/portal', component: Portal},
]