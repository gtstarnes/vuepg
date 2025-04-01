<script lang="ts" setup>
    import { getProduct } from './productInfo';


    const {category, name, des, price, ogPrice, img} = getProduct(0)
</script>

<template>
    <section>
        <article>
            <div class="img" :style="{backgroundColor: img}"></div>
            <div class="info">
                <h5 class="cate">{{ category.toUpperCase() }}</h5>
                <h1 class="name">{{ name }}</h1>
                <p class="des">{{ des }}</p>
                <div class="prices">
                    <span class="price">{{ price }}</span>
                    <span class="og">{{ ogPrice }}</span>
                </div>
            </div>
        </article>
    </section>
</template>

<style lang="css" scoped>
    section {
        display: flex;
        justify-content: center;
        height: 95dvh;
        
        article {
            width: 90dvw;
            border-radius: 10px;
            overflow: hidden;
            padding: 0;
            display: flex;
            flex-direction: column;

            .img {
            height: 18rem;
            width: 100%;
            }

            .info {
                padding-left: 1rem;
                padding-right: 1rem;
                background-color: white;
                height: 100%;

                .cate {
                    color: grey;
                }

                .name {
                    font-size: 2.5rem;
                }

                .des {
                    color:grey;
                    font-size: 1.2rem;
                }

                .prices {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;

                    .price {
                        color: green;
                        font-size: 2.2rem;
                        font-weight: bold;
                    }

                    .og {
                        color:grey;
                        text-decoration: line-through;
                    }
                }
            }
        }

    }
</style>