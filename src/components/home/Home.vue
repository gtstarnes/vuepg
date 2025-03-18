<script setup lang="ts">
    import { routes } from '../../router';
    import HomeCard from './HomeCard.vue';
</script>
<template>
        <nav>
            <ul>
                <li v-for="({path, name}, index) in routes" :key="index">
                    <template v-if="index !== 0">
                        <HomeCard :route="path" :name="name" />
                    </template>
                </li>
            </ul>
        </nav>
</template>

<style lang="css" scoped>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 99vw;
        height: 100vh;
        padding-top: 1rem;
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
            justify-items: center;
        }
    }
</style>