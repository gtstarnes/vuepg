<script lang="ts" setup>
import { ref } from 'vue';

    const a = ref(0);
    const b = ref(0);
</script>

<template>
    <meter max="100" min="0" value="50">50</meter>
    <meter max="100" min="0" value="50">50</meter>
</template>


<style lang="css" scoped></style>