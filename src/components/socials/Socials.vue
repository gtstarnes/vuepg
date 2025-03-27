<script lang="ts" setup>
import { ref } from 'vue';
import {getUser} from './users'


    const user = ref(getUser(0))
    const {pic, name, city, country, bio, links} = user.value
</script>

<template>
    <div class="container">
        <div class="pic" :style="{backgroundColor: pic}"></div>
        <h3>{{name}}</h3>
        <div class="location">{{ city }}, {{ country }}</div>
        <p>{{ bio }}</p>
    </div>
</template>

<style lang="css" scoped>
</style>