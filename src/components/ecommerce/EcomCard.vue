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
        <span>
            <h4>{{ company }}</h4>
            <h1>{{ name }}</h1>
        </span>
        <p>{{ des }}</p>
        <span>
            <span class="price">
                <div class="price-price">${{ price }}</div>
                <div class="price-discount">{{ discount * 100 }}%</div>
            </span>
            <span class="price-og">${{ ogPrice }}</span>
        </span>
        <span class="controls">
            <EcomCount />
            <EcomButton />
        </span>
    </article>
</template>

<style lang="css" scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        .price {
            display: flex;
            gap: 1rem;
            align-items: center;

            .price-price {
                font-size: 2rem;
                font-weight: bold;
            }
            .price-discount {
                background-color: black;
                color: white;
                width: 2.5rem;
                border-radius: 2px;
                text-align: center;
            }
            .price-og {
                color:grey;
                text-decoration: line-through;
            }
        }

        .controls {
            display: flex;
            gap: 1rem;
        }
    }
</style>