<script lang="ts" setup>
import { ref } from 'vue';
import { productInfo } from './ecomInfo';


    const pics = productInfo.pics
    const active = ref(0)
</script>

<template>
    <section>
        <div class="main" :style="{backgroundColor: pics[active]}"></div>
        <div class="row">
            <div class="other" :class="index===active ? 'active': ''"
             v-for="(pic, index) in pics" :key="index"
             :style="{backgroundColor: pic}"></div>
        </div>
    </section>

</template>

<style lang="css" scoped>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        .main {
            height: 20rem;
            width: 20rem;
            border-radius: 10px;
        }
        .row {
            display: flex;
            gap: 1rem;

            .other {
                height: 4rem;
                width: 4rem;
                border-radius: 4px;
                cursor: pointer;
            }
        }
        .active {
            opacity: 0.5;
            border: 2px solid orange
        }

    }

</style>