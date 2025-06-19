<script lang="ts" setup>
import type { Post } from './userInfo';

    const props = defineProps<{posts:Post[]}>()
</script>

<template>
    <div class="display">
        <button class="post" v-for="({img, likes, comments}) in props.posts" 
            :style="{backgroundColor: img}">
            <div class="PostInfo">
                <span>{{ likes }}</span>
                <span>{{ comments }}</span>
            </div>
        </button>
    </div>
</template>

<style lang="css" scoped></style>