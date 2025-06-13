<script lang="ts" setup>
import { getUser, logout } from './store';

</script>

<template>
    <h4>Hello, {{ getUser() }}</h4>
    <button @click="logout">Sign Out</button>
</template>

<style lang="css" scoped></style>