<script setup lang="ts">
    import { routes } from '../../router';
    import HomeCard from './HomeCard.vue';
</script>
<template>
    <section>
        <nav>
            <ul>
                <li v-for="({path, name}, index) in routes" :key="index">
                    <HomeCard :route="path" :name="name" />
                </li>
            </ul>
        </nav>
    </section>
</template>

<style lang="css" scoped>
    section {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 90vh;

        ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>