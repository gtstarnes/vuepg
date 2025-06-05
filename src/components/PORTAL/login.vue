<script setup lang="ts">
import { ref } from 'vue';


const inputs = ref({
    username: '',
    password: ''
})
</script>


<template>
    <form>
        <div class="inputs">
            <label for="username">Username: </label>
            <input name="username" id="username" placeholder="username" v-model="inputs.username" />
        </div>
        <div class="inputs">
            <label for="password">Password: </label>
            <input name="password" id="password" placeholder="password" v-model="inputs.password" />
        </div>
        <div class="controls">
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
        </div>
        <p>Don't have an account? <button>Sign Up</button></p>
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