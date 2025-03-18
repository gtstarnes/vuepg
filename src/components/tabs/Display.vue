<script lang="ts"></script>

<template>
    <section>
        <div v-if="active === 'Posts'">Posts</div>
        <div v-else-if="active === 'Reels'">Reels</div>
        <div v-else-if="active === 'Tagged'">Tagged</div>
    </section>
</template>

<style lang="css"></style>