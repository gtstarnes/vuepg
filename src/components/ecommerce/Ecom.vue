<script lang="ts" setup>
import EcomCard from './EcomCard.vue';
import EcomNav from './EcomNav.vue';
import EcomPics from './EcomPics.vue';

</script>

<template>
    <EcomNav />
    <section>
        <EcomPics />
        <EcomCard />
    </section>
</template>

<style lang="css" scoped>
    section {
        display: grid;
        grid-template-columns: auto auto;
        gap: 2rem;
        justify-items: center;
        padding-top: 4rem;
        padding-left: 2rem;
    }
</style>