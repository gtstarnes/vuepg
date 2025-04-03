<script lang="ts" setup>
import { ref } from 'vue';


    const count = ref(0);
</script>

<template>
    <div>
        <button>-</button>
        <div>{{ count }}</div>
        <button>+</button>
    </div>
</template>

<style lang="css" scoped></style>