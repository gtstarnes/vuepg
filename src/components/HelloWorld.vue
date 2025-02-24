<script setup lang="ts">
import { ref } from 'vue';


  const name = ref('')
</script>

<template>
  <input type="text" placeholder="enter name" v-model="name" />
  <div v-if="name !== ''">
    Hello, {{ name }}
  </div>
  <div v-else>
    Please introduction yourself
  </div>
</template>

<style scoped>

</style>
