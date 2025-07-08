<script lang="ts" setup>
import EcomCart from './EcomCart.vue';



</script>

<template>
    <button>
        <EcomCart />
        Add to Cart
    </button>
</template>

<style lang="css" scoped>
    button {
        background-color: orange;
        color: black;
        border: none;
        width: 14em;
        height: 2.5em;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        gap: 1.5em;
    }
</style>