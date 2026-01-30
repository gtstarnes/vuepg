<script lang="ts" setup>
    import { getPortal } from './store';

</script>

<template>
    <div v-if="getPortal() === 'login'">
        Login
    </div>
    <div v-else-if="getPortal() === 'signup'">
        signup
    </div>
    <div v-else>
        something went wrong
    </div>
</template>

<style lang="css" scoped>

</style>