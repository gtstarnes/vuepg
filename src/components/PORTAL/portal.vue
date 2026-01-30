<script lang="ts" setup>
    import Login from './Login.vue';
import Signup from './Signup.vue';
import { getPortal } from './store';

</script>

<template>
    <div v-if="getPortal() === 'login'">
       <Login />
    </div>
    <div v-else-if="getPortal() === 'signup'">
        <Signup />
    </div>
    <div v-else>
        something went wrong
    </div>
</template>

<style lang="css" scoped>

</style>