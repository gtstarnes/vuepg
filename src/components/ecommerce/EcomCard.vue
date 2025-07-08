<script lang="ts" setup>
import EcomButton from './EcomButton.vue';
import EcomCount from './EcomCount.vue';


</script>

<template>
    <article>
        <h5>company</h5>
        <h1>product</h1>
        <p>des</p>
        <div>
            <div>price</div>
            <div>discount</div>
        </div>
        <div>og price</div>
        <div class="controls">
            <EcomCount />
            <EcomButton />
        </div>
    </article>
</template>

<style lang="css" scoped>
    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em
    }
</style>