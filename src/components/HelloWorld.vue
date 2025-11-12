<script lang="ts" setup>
import { ref } from 'vue';


let name = ref("")
</script>

<template>
  <input type="text" placeholder="who are you" v-model="name" />
  <div>
    Hello, 
    <span v-if="name">{{ name}}</span>
    <span v-else>Stranger</span>
  </div>
</template>

<style lang="css" scoped>

</style>