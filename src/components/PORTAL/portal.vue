<script setup lang="ts">
    import Dash from './Dash.vue';
import Login from './Login.vue';
import Signup from './Signup.vue';
import { getPortal, getStatus } from './store';

</script>


<template>
    <template v-if="getStatus().value === true">
        <Dash />
    </template>
    <template v-else>
        <template v-if="getPortal().value === false">
            <Login />
        </template>
        <template v-else>
            <Signup />
        </template>
    </template>
</template>

<style lang="css">
</style>