<script lang="ts">
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
</style>