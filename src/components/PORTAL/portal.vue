<script setup lang="ts">
    import { login, toggle} from './store.ts'
</script>

<template>
    <section>
        <div v-if="login.status === true">
            <span>Hello, {{ login.user }}</span>
            <button>Log Out</button>
        </div>
        <div v-else-if="toggle.state === false"></div> 
        <div v-else></div>
    </section>
</template>

<style lang="css">
</style>