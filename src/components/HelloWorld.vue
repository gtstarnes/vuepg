<script setup lang="ts">
import { ref } from 'vue';

  const name = ref('')
</script>

<template>
  <input type="text" placeholder="introduce yourself" v-model="name" />
</template>

<style scoped>

</style>
