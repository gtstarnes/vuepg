<script lang="ts" setup>
import EcomCart from './EcomCart.vue';
import { user } from './ecomInfo';

    const links = ['Collections', 'Men', 'Women', 'About', 'Contact']

    const {username, profilePic} = user
</script>

<template>
    <nav>
        <span class="span-left">
            <h4>SNEAKERS</h4>
            <ul>
                <li v-for="link in links" :key="link">{{ link }}</li>
            </ul>
        </span>
        <span class="span-right">
            <EcomCart />
            <span>{{ username }}</span>
            <div class="profilePic" :style="{backgroundColor: profilePic}"></div>
        </span>
    </nav>
</template>

<style lang="css" scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid rgba(128, 128, 128, 0.5);
 

        span, ul {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .span-left {
            gap: 2rem;
            ul{
                margin: 0;

                li {
                    color: grey;
                    cursor: pointer;
                }
            }
        }
        .span-right {
            gap: 1rem;
            color: grey;
            .profilePic {
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 50%;
                cursor: pointer;
            }
        }

    }
</style>