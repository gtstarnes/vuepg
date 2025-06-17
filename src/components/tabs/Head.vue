<script lang="ts" setup>
    import { ref } from 'vue';
import { getUser } from './userInfo';
    
    const user = ref(getUser())
</script>

<template>
    <div class="profPic" :style="{background: user.pic}"></div>
    <div>
        <div>
            <button>Follow</button>
            <button>Message</button>
        </div>
        <div>
            <span>post</span>
            <span>followers</span>
            <span>following</span>
        </div>
        <div></div>
    </div>
</template>

<style lang="css" scoped>
    .profPic {
        height: 80px;
        width: 80px;
        border-radius: 50px;
    }
</style>