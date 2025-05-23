<script setup lang="ts">
import { computed } from 'vue';
import Login from './Login.vue';
import Signup from './Signup.vue';
import { loggedIn, getSignUp, signUp } from './store';

</script>

<template>
    <section>
        <div>{{  signUp }}</div>
        <div v-if="loggedIn === false">
            <div v-if="getSignUp() === false">
                <Login />
            </div>
            <div v-else-if="getSignUp() === true">
                <Signup />
            </div>
        </div>
        <div v-else>
            <h1>hello</h1>
        </div>
    </section>
</template>

<style lang="css">
</style>