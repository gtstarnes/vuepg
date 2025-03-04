<script setup lang="ts">
    import Signup from './signup.vue';
    import Login from './login.vue';
import { loggedIn, toggle } from './store'
</script>

<template>
    <section>
        <div v-if="loggedIn.status">
            Hello, {{ loggedIn.user }}
            <button>Log Out</button>
        </div>
        <div v-else-if="!toggle.state">
            <Signup />
        </div>
        <div v-else>
            <Login />
        </div>
    </section>
</template>

<style lang="css">
</style>