<script setup lang="ts">
    import { routes } from '../../router';
    import HomeCard from './HomeCard.vue';
</script>
<template>
    <section>
        <nav>
            <ul>
                <li v-for="({path}) in routes" :key="path">
                    <HomeCard />
                </li>
            </ul>
        </nav>
    </section>
</template>

<style lang="css" scoped></style>