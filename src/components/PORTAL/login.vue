<script setup lang="ts">
import { toggleState } from './store';


</script>

<template>
    <form>
        <div>
            <label for="username">Username: </label>
            <input id="username" name="username" 
                placeholder="enter username" type="text" />
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