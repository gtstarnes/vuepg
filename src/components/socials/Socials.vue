<script lang="ts" setup>
import { ref } from 'vue';
import {getUser} from './users'
import SocialLink from './SocialLink.vue';


    const user = ref(getUser(0))
    const {pic, name, city, country, bio, links} = user.value
</script>

<template>
    <div class="container">
        <article>
            <div class="pic" :style="{backgroundColor: pic}"></div>
            <h3>{{name}}</h3>
            <div class="location">{{ city }}, {{ country }}</div>
            <p>"{{ bio }}"</p>
            <ul>
                <li v-for="{title, href} in links" :key="title">
                    <SocialLink :title :href />
                </li>
            </ul>
        </article>
    </div>
</template>

<style lang="css" scoped>
    .container {
        background-color: black;
        height: 95vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        article {
            display: flex;
            flex-direction: column;
            width: 16rem;
            height: auto;
            background-color: rgb(49, 48, 48);
            border-radius: 18px;
            padding: 2rem;
            align-items: center;

            .pic {
                height: 4rem;
                width: 4rem;
                border-radius: 50px;
            }

            .location {
                color: greenyellow
            }

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

        }

    }
</style>