<script setup lang="ts">
import { computed, ref } from 'vue';

    const count = ref(0);
    const square = computed(() => {
        return count.value * count.value
    })
</script>

<template>
    <span>{{ count }}</span>
    <div>
        <button></button>
        <button></button>
        <button></button>
    </div>
    <span>{{ square }}</span>
</template>

<style lang="css" scoped>
</style>