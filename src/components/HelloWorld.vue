<script setup lang="ts">
import { ref } from 'vue';


  const name = ref('')
</script>

<template>
  <h1>Hello, {{ name }}</h1>
  <input type="text" placeholder="enter a name" v-model="name" />
</template>

<style scoped>

</style>
