<script lang="ts" setup>
import { ref } from 'vue';
import { users } from './userInfo';
import Display from './Display.vue';


const user = ref(users)
const tabs = ref(["Posts", "Reels", "Tagged"])
const active = ref("Posts")

function changeActive(tab:string) {
    if (active.value !== tab) {
        active.value = tab
    }
}
</script>

<template>
    <section>
        <div>
            <button v-for="tab in tabs" :key="tab" @click="changeActive(tab)">{{ tab }}</button>
        </div>
        <Display :active />
    </section>
</template>

<style lang="css" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
            width: 100%;
            height: 2rem;
            box-shadow: 0 10px 10px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        button {
            background-color: inherit;
            border: none;
            cursor: pointer;
        }
    }
</style>