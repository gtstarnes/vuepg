<script setup lang="ts">

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
            <button type="button">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css">
</style>