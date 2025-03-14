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

<style lang="css" scoped></style>