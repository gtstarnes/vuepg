<script lang="ts" setup></script>

<template>
    <progress value="70" max="100" min="0"></progress>
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
    }
</style>