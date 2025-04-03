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
            active.value
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


</style>