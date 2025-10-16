<script lang="ts" setup>

</script>

<template>
  <p>Hello <output id="result"></output></p>
  <form oninput="result.value = name.value">
    <input type="text" id="name" name="name" placeholder="who are you"/></input>
    <button>Submit</button>
  </form>
</template>

<style lang="css" scoped>
  output {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>