<script setup lang="ts">
import { ref } from 'vue';


const inputs = ref({
    username: '',
    password: ''
})
</script>


<template>
    <form>
        <div>
            <label for="username">Username: </label>
            <input name="username" id="username" placeholder="username" v-model="inputs.username" />
        </div>
        <div>
            <label for="password">Password: </label>
            <input name="password" id="password" placeholder="password" v-model="inputs.password" />
        </div>
        <div>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
        </div>
        <p>Don't have an account? <button>Sign Up</button></p>
    </form>
</template>

<style lang="css">
</style>