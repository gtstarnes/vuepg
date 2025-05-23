<script lang="ts" setup>
import { ref } from 'vue';
import { login, toggleSignUp } from './store';


    let deets = ref({
        username: '',
        password: ''
    })

</script>


<template>
    <form>
        <div>
            <label for="user">
                Username: 
                <input type="text" name="user" id="user" 
                    placeholder="username" v-model="deets.username" />
            </label>
        </div>
        <div>
            <label for="password">
                Password: 
                <input type="password" name="password" id="password" 
                    placeholder="password" v-model="deets.password" />
            </label>
        </div>
        <div>
            <button type="submit" @click="() => login(deets.username)">Login</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggleSignUp">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css" scoped></style>