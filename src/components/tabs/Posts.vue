<script lang="ts" setup>

</script>

<template>
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

<style lang="css" scoped></style>