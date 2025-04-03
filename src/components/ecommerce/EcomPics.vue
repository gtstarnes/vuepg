<script lang="ts" setup>
import { computed, ref } from 'vue';
import { productInfo } from './ecomInfo';


    const pics = productInfo.pics
    const active = ref(0)
    const activePic = computed(() => {
        return pics[active.value]
    })
    function changeActive(index:number){
        if (active.value !== index) {
            active.value = index
        }
    }
</script>

<template>
    <section>
        <div class="main" :style="{backgroundColor: activePic}"></div>
        <div class="row">
            <div class="other" :class="index===active ? 'active': ''"
             v-for="(pic, index) in pics" :key="index"
             :style="{backgroundColor: pic}" @click="changeActive(index)"></div>
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
            border-radius: 8px;
            transition: background-color 0.5s ease-in;
        }
        .other {
            height: 4rem;
            width: 4rem;
            border-radius: 4px;
            cursor: pointer;
        }
        .row {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: center;
        }
        .active {
            opacity: 0.5;
            border: 2px solid grey;
            transition: opacity .5s ease-in;
            transition: border .5s ease-in;
        }
    }

</style>