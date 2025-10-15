<script lang="ts" setup>
import { ref } from 'vue';


let name = ref("")
</script>

<template>
  <p>
    Hello, 
    <span v-if="name">{{ name }}</span>
    <span v-else>Stranger</span>
  </p>
  <input type="text" placeholder="What's your name?" v-model="name" />
</template>

<style lang="css" scoped>
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>