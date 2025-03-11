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
    <ul>
        <li v-for="thing in stuff" :key="thing">
            {{ thing }}
        </li>
    </ul>
    <dl>
        <template v-for="(value, key) in words" :key="key">
            <dt>{{ key }}</dt>
            <dd>{{ value }}</dd>
        </template>
    </dl>

</template>

<style lang="css" scoped>
    ol {
        li {
            list-style: upper-roman;
        }
    }
    ul {
        li {
            list-style: square;
        }
    }
    dl {
        display: grid;
        grid-template-columns: 2rem 1fr;

        dt {
            font-weight: bold;
        }
        dt::after {
            content: ':'
        }
    }
</style>