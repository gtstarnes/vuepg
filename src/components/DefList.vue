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
    <h3 id="steps">Steps</h3>
    <ol aria-labelledby="steps">
        <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>

    <h3 id="vocab">Vocab List</h3>
    <dl aria-labelledby="vocab">
        <template v-for="(def, term) in words" :key="term">
            <dt>{{ term }}</dt>
            <dd>{{ def }}</dd>
        </template>
    </dl>

    <h3 id="stuff">Stuff and Things</h3>
    <ul aria-labelledby="stuff">
        <li v-for="thing in things" :key="thing"> {{ thing }}</li>
    </ul>
</template>

<style lang="css" scoped>
    ol {
        list-style: lower-roman;
    }
    dl {
        display: grid;
        grid-template-columns: auto 1fr;
        margin-left: 1.5rem;

        dt {
            font-weight: bold;
        }
        dt::after {
            content: ':';
        }
        dd {
            font-style: italic;
        }
    }
    ul {
        list-style: circle;
    }
</style>