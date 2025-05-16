<script lang="ts" setup>
import { ref } from 'vue';
import { login, toggleState } from './store';


    let username = ref('')
    function handleSubmit() {
        login.status = true
        login.user = username.value
        username.value = ''
    }
</script>

<template>
    <form @submit.prevent="handleSubmit()">
        <div>
            <label for="username">Username: </label>
            <input name="username" id="username" type="text" placeholder="username" v-model="username" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input name="password" id="password" type="text" placeholder="password" />
        </div>
        <div>
            <button type="submit">Log In</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggleState()">Sign Up</button>
        </div>
    </form>
</template>


<style lang="css" scoped>
</style>