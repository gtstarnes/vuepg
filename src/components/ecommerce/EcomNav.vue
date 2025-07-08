<script lang="ts" setup>
import EcomCart from './EcomCart.vue';


</script>

<template>
    <nav>
        <h2>SNEAKERS</h2>
        <ul></ul>
        <span>
            <EcomCart />
            <div></div>
        </span>
    </nav>
</template>

<style lang="css" scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>