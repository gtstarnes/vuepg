<script setup lang="ts">
    import { login, toggle} from './store.ts'
</script>

<template>
    <section>
        <div v-if="login.status === true"></div>
        <div v-else-if="toggle.state === false"></div> 
        <div v-else></div>
    </section>
</template>

<style lang="css">
</style>