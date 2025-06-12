<script setup lang="ts">
import { ref } from 'vue';
import { changePortal, signUp } from './store';

    let details = ref({
        email: "",
        user: "",
        pass: "",
    })
</script>


<template>
    <form @submit.prevent="signUp(details.user)">
        <div class="input">
            <label for="email">Email: </label>
            <input type="email" name="email" placeholder="enter email" 
                v-model="details.email"/>
        </div>
        <div class="input">
            <label for="username">Username: </label>
            <input type="text" name="username" placeholder="enter username" 
                v-model="details.user" />
        </div>
        <div class="input">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="enter password" 
                v-model="details.pass" />
        </div>
        <div class="controls">
            <button type="submit">Sign Up</button>
            <button type="reset">Cancel</button>
        </div>
        <div>
            Already have an account? <button class="toggle" type="button" @click="changePortal">Log In</button>
        </div>
    </form>
</template>

<style lang="css">
    form {
        .input {
            display: flex;
            justify-content: space-between;
        }

        .toggle {
            background-color: inherit;
            color: blue;
            border: none;
            text-decoration: underline;
        }
    }
</style>