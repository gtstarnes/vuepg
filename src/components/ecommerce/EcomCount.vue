<script lang="ts" setup>
import { ref } from 'vue';

    let count = ref(0);

    function add(){
        count.value++
    }
    function minus(){
        if (count.value !== 0){
            count.value--
        } else {
            return
        }
    }
</script>

<template>
    <div class="container">
        <button @click="minus">-</button>
        <span>{{ count }}</span>
        <button @click="add">+</button>
    </div>
</template>

<style lang="css" scoped>
    button {
        border: none;
        background-color: inherit;
        color: orange;
        font-weight: bold;
        cursor: pointer;
    }

    .container {
        background-color: lightgrey;
        width: 5em;
        height: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        padding-left: 1em;
        padding-right: 1em;
    }
</style>