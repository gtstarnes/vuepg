<script setup lang="ts">
    import { getStatus } from './store';

</script>


<template>
    <template v-if="getStatus().value === true">
        <div>Logged In</div>
    </template>
    <template v-else>
        
    </template>
</template>

<style lang="css">
</style>