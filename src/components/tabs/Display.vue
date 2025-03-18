<script lang="ts" setup>
import { ref } from 'vue';
import { users } from './userInfo';

    const props = defineProps({
        active: String,
    })
    const user = ref(users)
</script>

<template>
    <section>
        <div v-if="active === 'Posts'">
            <ul>
                <li v-for="item in user[0].posts" :key="item.id">
                    <div :style="{backgroundColor: item.img}"></div>
                </li>
            </ul>
        </div>
        <div v-else-if="active === 'Reels'">
            <ul>
                <li v-for="item in user[0].reels" :key="item.id">
                    <div :style="{backgroundColor: item.img}"></div>
                </li>
            </ul>
        </div>
        <div v-else-if="active === 'Tagged'">
            <ul>
                <li v-for="item in user[0].tagged" :key="item.id">
                    <div :style="{backgroundColor: item.img}"></div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="css" scope>
    ul {
        display: grid;
        grid-template-columns: 12rem 12rem 12rem;
        gap:1rem;
        list-style:none;
        div {
            height: 16rem;
            width: 12rem;
        }
    }
</style>