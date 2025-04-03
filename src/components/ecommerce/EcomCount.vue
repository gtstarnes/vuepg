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
    <div>
        <button @click="subtract">-</button>
        <div>{{ count }}</div>
        <button @click="add">+</button>
    </div>
</template>

<style lang="css" scoped></style>