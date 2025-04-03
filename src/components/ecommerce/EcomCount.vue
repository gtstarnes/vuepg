<script lang="ts" setup>
import { ref } from 'vue';


    const count = ref(0);

    function add() {
        count.value += 1
    }

    function subtract(){
        if (count.value > 0){
            count.value -= 1
        }
    }
</script>

<template>
    <div class="container">
        <button @click="subtract">-</button>
        <div class="count">{{ count }}</div>
        <button @click="add">+</button>
    </div>
</template>

<style lang="css" scoped>
    .container {
        display: flex;
        background-color: rgb(199, 198, 198);
        width: 8rem;
        align-items: center;
        justify-content: space-evenly;
        font-weight: bold;
        border-radius: 4px;

        button {
            background-color: inherit;
            border:none;
            color: orange;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
        }
    }
</style>