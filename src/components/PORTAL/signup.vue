<script setup lang="ts">
    import { toggle, loggedIn } from './store';
</script>

<template>
    <form>
        <div>
            <label for="username">Username: </label>
            <input name="username" id="username" 
                placeholder="enter username" type="text" />
        </div>
        <div>
            <label for="email">Email: </label>
            <input name="email" id="email" 
            placeholder="enter email" type="email" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input name="password" id="password" 
            placeholder="enter password" type="password" />
        </div>
        <div>
            <button type="submit">Sign Up</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggle.state = !toggle.state">Login</button>
        </div>
    </form>
</template>

<style lang="css">
</style>