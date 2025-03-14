<script setup lang="ts">
    import { routes } from '../../router';
    import HomeCard from './HomeCard.vue';
</script>
<template>
        <nav>
            <ul>
                <li v-for="({path, name}, index) in routes" :key="index">
                    <HomeCard :route="path" :name="name" />
                </li>
            </ul>
        </nav>
</template>

<style lang="css" scoped>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 90vh;
        
        ul {
            margin: 0;
            list-style: none;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
            justify-items: center;
        }
    }
</style>