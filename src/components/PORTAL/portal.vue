<script setup lang="ts">
import Login from './Login.vue';
import Signup from './Signup.vue';
import { loggedIn, getSignUp} from './store';


</script>

<template>
    <section>
        <template v-if="loggedIn === false">
            <template v-if="getSignUp().value === false">
                <Login />
            </template>
            <template v-else-if="getSignUp().value === true">
                <Signup />
            </template>
        </template>
        <template v-else>
            Hello
        </template>
    </section>
</template>

<style lang="css">
</style>