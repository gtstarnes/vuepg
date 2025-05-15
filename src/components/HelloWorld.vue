<script lang="ts" setup>
import { ref } from 'vue';

let name = ref('')
</script>

<template>
  <input type="text" placeholder="who are you,stranger??" v-model="name"/>
  <h1> Hello, {{ name || 'Stranger' }}</h1>
</template>

<style lang="css" scoped>
</style>