<script setup lang="ts">
import { computed, ref } from 'vue';

    const count = ref(0)
    const square = computed(()=> {
        return count.value * count.value
    })
</script>

<template>
    <span>{{ count }}</span>
    <div>
        <button @click="count++">+</button>
        <button @click="count = 0">clr</button>
        <button @click="count--">-</button>
    </div>
    <span>{{square}}</span>
</template>

<style lang="css" scoped>
</style>