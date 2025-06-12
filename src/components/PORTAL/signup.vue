<script setup lang="ts">
import { ref } from 'vue';
import { changePortal } from './store';

    let details = ref({
        email: "",
        user: "",
        pass: "",
    })
</script>


<template>
    <form>
        <div>
            <label for="email">Email: </label>
            <input type="email" name="email" placeholder="enter email" 
                v-model="details.email"/>
        </div>
        <div>
            <label for="username">Username: </label>
            <input type="text" name="username" placeholder="enter username" 
                v-model="details.user" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input type="passwrod" id="password" name="password" placeholder="enter password" 
                v-model="details.pass" />
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