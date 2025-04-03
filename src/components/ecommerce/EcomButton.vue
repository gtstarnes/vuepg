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
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        height: 2rem;
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>