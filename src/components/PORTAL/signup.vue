<script setup lang="ts">
import { changePortal } from './store';

</script>


<template>
    <form>
        <div>
            <label for="email">Email: </label>
            <input type="email" name="email" placeholder="enter email" />
        </div>
        <div>
            <label for="username">Username: </label>
            <input type="text" name="username" placeholder="enter username" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input type="passwrod" id="password" name="password" placeholder="enter password" />
        </div>
        <div>
            <button type="submit">Sign Up</button>
            <button type="reset">Cancel</button>
        </div>
        <div>
            Already have an account? <button type="button" @click="changePortal">Log In</button>
        </div>
    </form>
</template>

<style lang="css">
</style>