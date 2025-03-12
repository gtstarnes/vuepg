<script setup lang="ts">
import { ref } from 'vue';


    const steps = ref(['step 1', 'step 2', 'step 3'])
    const things = ref(['thing', 'thing', 'thing'])
    const words = ref({
        'Hola': 'hello',
        'Vale': 'bye',
        'Entschuldigung': 'excuse me',
        'Sezione': 'section',
    })
</script>

<template>
    <ol>
        <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>
</template>

<style lang="css" scoped>

</style>