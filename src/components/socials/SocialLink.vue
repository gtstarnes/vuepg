<script lang="ts" setup>
    defineProps(['title', 'href'])
</script>

<template>
    <button><a :href="href"> {{ title }}</a></button>
</template>

<style lang="css" scoped>
    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        width: 100%;
    }
    button {
        background-color: rgb(80, 80, 80);
        height: 3rem;
        border: none;
        border-radius:  8px;
        width: 15rem;
    }
</style>