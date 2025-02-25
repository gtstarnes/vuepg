<script setup lang="ts">
import { ref } from 'vue';

  const name = ref('')
</script>

<template>
  <input type="text" v-model="name" placeholder="introduce yourself" />
</template>

<style scoped>

</style>
