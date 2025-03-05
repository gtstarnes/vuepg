<script setup lang="ts">
    import { ref } from 'vue';
import { login, toggle, toggleState, handleSubmit } from './store';

    const username = ref('')
</script>

<template>
    <form @submit="(e) => handleSubmit(e, username)">
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
            <button type="button" @click="toggleState">Sign In</button>
        </div>
    </form>
</template>

<style lang="css">
</style>