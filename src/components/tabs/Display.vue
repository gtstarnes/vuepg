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
        <div class="tabs">
            <button v-for="tab in tabs" @click="changeTab(tab)">{{ tab }}</button>
        </div>
        <template v-if="active === 'Posts'">
            <div class="display">
            <button class="post" v-for="({img, likes, comments}) in posts" 
                :style="{backgroundColor: img}">
                    <div class="PostInfo">
                        <span>{{ likes }}</span>
                        <span>{{ comments }}</span>
                    </div>
            </button>
            </div>
        </template>
        <template v-else-if="active === 'Reels'">
            <div class="display">
                <button class="post" v-for="({img, likes, comments}) in reels" 
                    :style="{backgroundColor: img}">
                    <div class="PostInfo">
                        <span>{{ likes }}</span>
                        <span>{{ comments }}</span>
                    </div>
                </button>
            </div>
        </template>
        <template  v-else-if="active === 'Tagged'">
            <div class="display">
                <button class="post" v-for="({img, likes, comments}) in tagged" 
                    :style="{backgroundColor: img}">
                    <div class="PostInfo">
                        <span>{{ likes }}</span>
                        <span>{{ comments }}</span>
                    </div>
                </button>
            </div>
        </template>  
    </section>
</template>

<style lang="css" scope>
    .display {
        display:grid;
        grid-template-columns: repeat(3,1fr);
        gap: 1rem;
    }
    .post {
        height: 300px;
        width: 200px;
        border: none;
        padding: 0;
    }
    .post:hover {
        cursor: pointer;
    }
    .PostInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        height: 100%;
        width: 100%;
    }
    .PostInfo:hover {
        background-color: black;
        opacity: 0.5;
        color: white;
        font-weight: bold;
    }
    .tabs {
        
    }
</style>