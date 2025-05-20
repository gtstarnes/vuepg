<script lang="ts" setup>
import { ref } from 'vue';

    let details = ref({
        user: '',
        password: ''
    })
</script>

<template>
    <form>
        <input type="text" name="user" id="user" placeholder="user"/>
        <input type="password" name="password" id="password" placeholder="password" />
        <div>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
            <button type="button">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css" scoped>

</style>