<script setup lang="ts">
import { ref } from 'vue';

    const cardInfo = ref([
        {
            id: 1,
            product: 'asdcsca',
            des: 'fsdd acdasd gbs asdcsa.',
            price: '$56.76',
        },
        {
            id: 2,
            product: 'asdcsca',
            des: 'fsdd acdasd gbs asdcsa.',
            price: '$56.76',
        },
        {
            id: 3,
            product: 'asdcsca',
            des: 'fsdd acdasd gbs asdcsa.',
            price: '$56.76',
        },
    ])
</script>

<template>
    <article v-for="{id, product,des,price} in cardInfo" :key="id">
        <h4>{{ product }}</h4>
        <p>{{ des }}</p>
        <div>
            <span>{{ price }}</span>
            <button>Add to Cart</button>
        </div>
    </article>
</template>

<style lang="css">
    article {
        height: 10rem;
        width: 12rem;
        box-shadow: 8px 8px 10px rgba(0,0,0,0.15);
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 1rem;

        h4 {
            margin-bottom: 0;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                color: blueviolet;
                font-size: 1.75rem;
            }

            button {
                background-color: blueviolet;
                color: white;
                border: none;
                border-radius: 2px;
                height: 2rem;
            }
        }
    }
</style>
