<script setup lang="ts">
import { ref } from 'vue';

    const steps = ref(['step 1', 'step 2' ,'step 3'])
    const stuff = ref(['abc', '123', 'ac34'])
    const words = ref({'Hola': 'hello', 'Bonjour': 'hello', 'Salve': 'hello'})
</script>

<template>
    <ol>
        <li v-for="item in steps" :key="item">
            {{ item }}
        </li>
    </ol>

</template>

<style lang="css" scoped>

</style>