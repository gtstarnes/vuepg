<script setup lang="ts">
import { ref } from 'vue';

  const name = ref('')
</script>

<template>
  <input type="text" placeholder="introduce yourself" v-model="name" />
  <div v-if="name ===''">introduce yourself</div>
  <div v-else="">Hello, {{ name }}</div>
</template>

<style scoped>

</style>
