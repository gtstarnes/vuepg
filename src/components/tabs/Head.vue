<script lang="ts" setup>
    import { ref } from 'vue';
import { getUser } from './userInfo';
    
    const user = ref(getUser())
</script>

<template>
    <div class="flex">
        <div class="profPic" :style="{background: user.pic}"></div>
        <div class="topFlex">
            <div class="top">
                <span class="bold">{{ user.username }}</span>
                <button class="bold">Follow ^</button>
                <button class="bold">Message</button>
            </div>
            <div class="mid">
                <span><span class="bold">{{user.posts.length}}</span> post</span>
                <span><span class="bold">{{user.followers}}</span> followers</span>
                <span><span class="bold">{{user.following}}</span> following</span>
            </div>
            <div>
                <span class="bold">{{ user.name }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .profPic {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }
    .flex {
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
    }
    .topFlex {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .top {
        display: flex;
        gap: 0.5rem;
    }
    .mid {
        display: flex;
        gap:0.5rem
    }
    .bold {
        font-weight: bold;
    }
    button {
        border: none;
        border-radius: 10%;
        height: 30px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: blueviolet;
        color: white
    }
</style>