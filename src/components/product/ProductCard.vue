<script lang="ts" setup>
    import { getProduct } from './productInfo';


    const {category, name, des, price, ogPrice, img} = getProduct(0)
</script>

<template>
    <section>
        <article>
            <div :style="{backgroundColor: img}"></div>
            <div>
                <h5>{{ category }}</h5>
                <h1>{{ name }}</h1>
                <p>{{ des }}</p>
                <div>
                    <span>{{ price }}</span>
                    <span>{{ ogPrice }}</span>
                </div>
            </div>
        </article>
    </section>
</template>

<style lang="css" scoped>
</style>