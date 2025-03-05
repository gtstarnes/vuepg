<script setup lang="ts">
    import { login, toggle} from './store.ts'
    import Login from './Login.vue';
    import Signup from './Signup.vue';

    function logOut () {
        login.user = ''
        login.status = false
        toggle.state = false
    }
</script>

<template>
    <section>
        <div v-if="login.status === true">
            <span>Hello, {{ login.user }}</span>
            <button @click="logOut">Log Out</button>
        </div>
        <div v-else-if="toggle.state === false">
            <Login />
        </div> 
        <div v-else>
            <Signup />
        </div>
    </section>
</template>

<style lang="css">
</style>