<script lang="ts" setup>
    const links = ['Collections', 'Men', 'Women', 'About', 'Contact']
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
            <div class="profilePic"></div>
        </span>
    </nav>
</template>

<style lang="css" scoped></style>