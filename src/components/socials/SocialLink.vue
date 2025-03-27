<script lang="ts" setup>
    defineProps(['title', 'href'])
</script>

<template>
    <a :href="href" target="_blank" rel="noopener noreferrer">{{ title }}</a>
</template>

<style lang="css" scoped>
    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        width: 100%;        
        background-color: grey;
        height: 3rem;
        border: none;
        border-radius:  8px;
        width: 15rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    
    }
</style>