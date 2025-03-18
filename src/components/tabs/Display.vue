<script lang="ts" setup>
import { ref } from 'vue';
import { users } from './userInfo';

    const props = defineProps({
        active: String,
    })
    const user = ref(users)
</script>

<template>
    <ul v-if="active === 'Posts'">
        <li v-for="item in user[0].posts" :key="item.id">
            <button :style="{backgroundColor: item.img}"></button>
        </li>
    </ul>
    <ul v-else-if="active === 'Reels'">
        <li v-for="item in user[0].reels" :key="item.id">
            <button :style="{backgroundColor: item.img}"></button>
        </li>
    </ul>
    <ul v-else-if="active === 'Tagged'">
        <li v-for="item in user[0].tagged" :key="item.id">
            <button :style="{backgroundColor: item.img}"></button>
        </li>
    </ul>
</template>

<style lang="css" scope>
    ul {
        width: 100%;
        display: grid;
        grid-template-columns: 12rem 12rem 12rem;
        gap:1rem;
        list-style:none;
        margin: 0;
        margin-top: 1rem;
        padding-left: 0;
        justify-content: center;
        button {
            height: 16rem;
            width: 12rem;
            cursor: pointer;
        }
    }
</style>