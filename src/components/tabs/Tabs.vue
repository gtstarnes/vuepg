<script lang="ts" setup>
import { ref } from 'vue';
import { users } from './userInfo';


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
        <section>
            <div v-if="active === 'Posts'">Posts</div>
            <div v-else-if="active === 'Reels'">Reels</div>
            <div v-else-if="active === 'Tagged'">Tagged</div>
        </section>
    </section>
</template>

<style lang="css" scoped>
</style>