<script lang="ts" setup>
    defineProps(['title', 'href'])
</script>

<template>
    <a :href="href"> {{ title }}</a>
</template>

<style lang="css" scoped></style>