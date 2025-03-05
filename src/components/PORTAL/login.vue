<script setup lang="ts">
import { ref } from 'vue';
import { login, toggleState } from './store';

const username = ref('')

const handleSubmit = (e: Event) => {
    e.preventDefault()
    login.user = username.value
    login.status = true;
}
</script>

<template>
    <form @submit="handleSubmit">
        <div>
            <label for="username">Username: </label>
            <input id="username" name="username" 
                placeholder="enter username" type="text" v-model="username" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input id="password" name="password" placeholder="password" type="password" />
        </div>
        <div>
            <button type="submit">Sign In</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggleState">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css">
</style>