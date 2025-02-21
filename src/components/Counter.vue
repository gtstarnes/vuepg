<script setup lang="ts">
    import {ref, computed} from 'vue';

    const count = ref<number>(0);
    const square = computed(() => {
        return count.value * count.value
    }, [count.value])
</script>

<template>
    <section>
        <div> {{ count }}</div>
        <div>
            <button @click="count++">+</button>
            <button>clr</button>
            <button @click="count--">-</button>
        </div>
        <div>{{ square }}</div>
    </section>
</template>

<style lang="css" scoped>
</style>