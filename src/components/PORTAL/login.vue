<script setup lang="ts">
import { ref } from 'vue';
import { changePortal, login } from './store';


const inputs = ref({
    username: '',
    password: ''
})

function handleSubmit() {
    login(inputs.value.username)
}
</script>


<template>
    <form @submit.prevent="handleSubmit">
        <div class="inputs">
            <label for="username">Username: </label>
            <input type="username" id="username" aria-required="true" 
                placeholder="username" v-model="inputs.username" />
        </div>
        <div class="inputs">
            <label for="password">Password: </label>
            <input type="password" id="password" aria-required="true" 
                placeholder="password" v-model="inputs.password" />
        </div>
        <div class="controls">
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
        </div>
        <p>Don't have an account? <button type="button" @click="changePortal">Sign Up</button></p>
    </form>
</template>

<style lang="css">
    form {
        max-width: 16rem;
        .inputs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.25rem;
        }
        .controls {
            margin-top: 0.5rem;
            display: flex;
            gap: .1rem;

            button {
                cursor: pointer;
            }
        }
        p {
            button {
                border: none;
                background-color: inherit;
                color: blue;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
</style>