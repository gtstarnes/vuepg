<script lang="ts" setup>
import type { Post } from './userInfo';

    const props = defineProps<Post[]>()
</script>

<template>
    <div class="display">
        <button class="post" v-for="({img, likes, comments}) in props" 
            :style="{backgroundColor: img}">
            <div class="PostInfo">
                <span>{{ likes }}</span>
                <span>{{ comments }}</span>
            </div>
        </button>
    </div>
</template>

<style lang="css" scoped></style>