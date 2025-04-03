<script lang="ts" setup>
import { computed } from 'vue';
import EcomButton from './EcomButton.vue';
import EcomCount from './EcomCount.vue';
import { productInfo } from './ecomInfo';

    const {company, name, des, price, discount} = productInfo;
    const ogPrice = computed( () => {
        return price / discount
    })
</script>

<template>
    <article>
        <h6></h6>
        <h1></h1>
        <p></p>
        <span>
            <div></div>
            <div></div>
        </span>
        <div></div>
        <span class="controls">
            <EcomCount />
            <EcomButton />
        </span>
    </article>
</template>

<style lang="css" scoped>
    article {

        .controls {
            display: flex;
            gap: 1rem;
        }
    }
</style>