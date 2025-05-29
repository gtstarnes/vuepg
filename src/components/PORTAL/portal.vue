<script setup lang="ts">
    import { getPortal, getStatus } from './store';

</script>


<template>
    <template v-if="getStatus().value === true">
        <div>Logged In</div>
    </template>
    <template v-else>
        <template v-if="getPortal().value === false">
            <div>Log In</div>
        </template>
        <template v-else>
            <div>Sign Up</div>
        </template>
    </template>
</template>

<style lang="css">
</style>