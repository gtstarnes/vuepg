<script setup lang="ts">
import { ref } from 'vue';


    const steps = ref(['step 1', 'step 2', 'step 3', 'step 4'])
    const things = ref(['thing', 'thing', 'thing', 'thing'])
    const words = ref({
        'Hola': 'hello',
        'Vale': 'bye',
        'Entschuldigung': 'excuse me',
        'Sezione': 'section',
        'Og': 'and'
    })
</script>

<template>
    <ol>
        <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>
    <dl>
        <template v-for="(def, term) in words" :key="term">
            <dt>{{ term }}</dt>
            <dd>{{ def }}</dd>
        </template>
    </dl>
    <ul>
        <li v-for="thing in things" :key="thing"> {{ thing }}</li>
    </ul>
</template>

<style lang="css" scoped>
    ol {
        list-style: lower-roman;
    }
</style>