<script lang="ts" setup>
import { user } from './ecomInfo';

    const links = ['Collections', 'Men', 'Women', 'About', 'Contact']

    const {username, profilePic} = user
</script>

<template>
    <nav>
        <span>
            <h4>SNEAKERS</h4>
            <ul>
                <li v-for="link in links" :key="link">{{ link }}</li>
            </ul>
        </span>
        <span>
            <span>{{ username }}</span>
            <div class="profilePic" :style="{backgroundColor: profilePic}"></div>
        </span>
    </nav>
</template>

<style lang="css" scoped>
    nav {
        display: flex;
        justify-content: space-between;

        ul {
            display: flex;
        }
    }
</style>