<script lang="ts" setup>
import Cart from './Cart.vue';

</script>

<template>
    <button>
        <Cart />
        Add to Cart
    </button>
</template>

<style lang="css" scoped>
    button {
        background-color: green;
        border: none;
        border-radius: 6px;
        height: 3.2rem;
        width: 100%;
        color: white;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem
    }
</style>