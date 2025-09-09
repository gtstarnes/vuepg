<script lang="ts" setup>
import { ref } from 'vue';


let name = ref("")
</script>

<template>
  <p></p>
  <input type="text" placeholder="What's your name?" v-model="name" />
</template>

<style lang="css" scoped></style>