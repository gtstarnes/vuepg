<script setup lang="ts">
import { ref } from 'vue';


  const name = ref('')
</script>

<template>
  <input type="text" placeholder="enter a name" v-model="name" />  
  <h1 v-if="name !== ''">Hello, {{ name }}</h1>
</template>

<style scoped>

</style>
