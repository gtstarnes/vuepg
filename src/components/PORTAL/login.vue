<script lang="ts" setup>
    import { changePortal } from './store';
</script>

<template>
    <form>
        <label>Username:
            <input 
                type="text"
                placeholder="username"
                name="username" id="username"
            />
        </label>
        <label>Password
            <input 
                type="text"
                placeholder="password"
                name="password" id="password"
            />
        </label>
        <div>
            <button>Submit</button>
            <button>Cancel</button>
            <div>
                Don't have an account? Create one 
                <button @click="changePortal('signup')">
                    here
                </button>
            </div>
        </div>
    </form>
</template>

<style lang="css" scoped>
    form {
        display: flex;
        flex-direction: column;
        gap:0.25rem;

        button {
            cursor: pointer;
        }
    }
</style>