<script lang="ts" setup>

</script>

<template>
    <div class="container">
        <button>-</button>
        <span>0</span>
        <button>+</button>
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
        justify-content: center;
        gap: 0.75em;
        border-radius: 4px;
    }
</style>