<script setup lang="ts">
import { ref } from 'vue';

  const name = ref('')
</script>

<template>
  <input type="text" v-model="name" placeholder="introduce yourself" />
  <div v-if="name===''">
    Please introduce yourself
  </div>
  <div v-else>
    Hello, {{ name }}
  </div>
</template>

<style scoped>

</style>
