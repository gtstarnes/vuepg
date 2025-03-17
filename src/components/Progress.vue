<script lang="ts" setup>
import { ref } from 'vue';

    const progress = ref(10)
</script>

<template>
    <progress :value="progress" max="100" min="0"></progress>
    <div>
        <button>Start</button>
        <button>Stop</button>
    </div>
</template>

<style lang="css" scoped>
    progress[value] {
        -webkit-appearance: none;
        appearance: none;
        width: 20rem;
        height: 2rem;
    }

    progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.25) inset;
    }

    progress[value]::-webkit-progress-value {
        background-color: blueviolet;
        border-radius: 2px;
    }
</style>