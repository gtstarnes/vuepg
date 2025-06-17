<script lang="ts" setup>
import { ref } from 'vue';
import { changeTab, getActiveTab, getTabs, getUser } from './userInfo';

    const user = ref(getUser())
    const tabs = ref(getTabs())
    const active = ref(getActiveTab())
    const posts = ref(user.value.posts)
    const reels = ref(user.value.reels)
    const tagged = ref(user.value.tagged)
</script>

<template>
    <section>    
        <div>
            <button v-for="tab in tabs" @click="changeTab(tab)">{{ tab }}</button>
        </div>
        <template v-if="active === 'Posts'">
            <button v-for="post in posts"></button>
        </template>
        <template v-else-if="active === 'Reels'">
            <button v-for="reel in reels"></button>
        </template>
        <template v-else-if="active === 'Tagged'">
            <button v-for="t in tagged"></button>
        </template>  
    </section>
</template>

<style lang="css" scope>
    
</style>