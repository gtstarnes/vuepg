<script lang="ts" setup>
import { ref } from 'vue';
import { toggleState } from './store';

    let details = ref({
        user: '',
        password: ''
    })
</script>

<template>
    <form>
        <input type="text" name="user" id="user" 
            placeholder="user" v-model="details.user"/>
        <input type="password" name="password" id="password" 
            placeholder="password" v-model="details.password" />
        <div>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
            <button type="button" @click="toggleState">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css" scoped>

</style>