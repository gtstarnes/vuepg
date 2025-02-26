<script setup lang="ts">
import { ref } from 'vue';

    const cards = ref([
        {
            id: 1,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 1,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 2,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 3,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 4,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 5,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
        {
            id: 6,
            name: 'sdaca sdc',
            des: 'as cdsacd csafds fsa. dsacfdvcdsa . dsdaca sac',
            price: '$17.32',
        },
    ])
</script>

<template>
    <section class="section-cards">
        <article v-for="({id, name, des, price}, index) in cards" :key="id">
            <h4>{{ name }} {{ index }}</h4>
            <div>
                <p>{{ des }}</p>
                <div class="controls">
                    <span>{{ price }}</span>
                    <button>Add to Cart</button>
                </div>
            </div>
        </article>
    </section>
</template>

<style lang="css">
    .section-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        row-gap: 1rem;

        article {
            width: 10rem;
            height: 12rem;
            box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 1rem;

            h4 {
                margin-bottom: 0;
            }

            .controls {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    color: blueviolet;
                    font-size: 1.5rem;
                }

                button {
                    border: none;
                    background-color: blueviolet;
                    color: white;
                    height: 2rem;
                    cursor: pointer;

                    &:active {
                        background-color: purple;
                        scale: 95%;
                    }
                }
            }
        }
    }

    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
</style>
