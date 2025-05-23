<script lang="ts" setup></script>


<template>
    <form>
        <div>
            <label for="user">
                Username: 
                <input type="text" name="user" id="user" placeholder="username" />
            </label>
        </div>
        <div>
            <label for="password">
                Password: 
                <input type="password" name="password" id="password" placeholder="password" />
            </label>
        </div>
        <div>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
            <button type="button">Sign Up</button>
        </div>
    </form>
</template>

<style lang="css" scoped></style>