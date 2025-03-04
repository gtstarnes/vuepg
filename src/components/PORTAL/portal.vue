<script setup lang="ts">
    import Signup from './signup.vue';
import { loggedIn } from './store'
</script>

<template>
    <section>
        <div v-if="loggedIn.status">
            Hello, {{ loggedIn.user }}
            <button>Log Out</button>
        </div>
    </section>
</template>

<style lang="css">
</style>