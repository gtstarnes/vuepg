<script setup lang="ts">
import Login from './Login.vue';
import { loggedIn, signUp } from './store';


</script>

<template>
    <section>
        <template v-if="loggedIn === false">
            <template v-if="signUp === false">
                <Login />
            </template>
            <template v-else>
                <SignUp />
            </template>
        </template>
    </section>
</template>

<style lang="css">
</style>