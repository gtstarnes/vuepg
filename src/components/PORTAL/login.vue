<script setup lang="ts">
import { ref } from 'vue';
import { toggle, loggedIn } from './store';


    const username = ref('')

    function handleSubmit(e: Event) {
        e.preventDefault()
        loggedIn.user = username.value
        loggedIn.status = true;
    }
</script>

<template>
    <form @submit="handleSubmit">
        <div>
            <label for="username">Username: </label>
            <input name="username" id="username" 
                placeholder="enter username" type="text" v-model="username"/>
        </div>
        <div>
            <label for="password">Password: </label>
            <input name="password" id="password" 
            placeholder="enter password" type="password" />
        </div>
        <div>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggle.state = !toggle.state">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css">
</style>