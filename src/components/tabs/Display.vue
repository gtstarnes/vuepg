<script lang="ts" setup>
import { ref } from 'vue';
import { changeTab, getActiveTab, getTabs, getUser } from './userInfo';

    const user = ref(getUser())
    const tabs = ref(getTabs())
    const active = ref(getActiveTab())
    const posts = ref(user.value.posts)
</script>

<template>
    <h1>Hello</h1>
    <div>
        <button v-for="tab in tabs" @click="changeTab(tab)">{{ tab }}</button>
    </div>
    <section>
        <template v-if="active === 'Posts'">
            <button v-for="post in posts"></button>
        </template>
        
    </section>
    
</template>

<style lang="css" scope>

</style>