<script setup lang="ts">
import { computed, ref } from 'vue';

    const count = ref(0)
    const square = computed(()=> {
        return count.value * count.value
    })
</script>

<template>

</template>

<style lang="css" scoped>
</style>