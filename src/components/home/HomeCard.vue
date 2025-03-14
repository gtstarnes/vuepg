<script setup lang="ts">
    const props = defineProps<{
        route: string,
        name: string
    }>()
</script>

<template>
    <button>
        <RouterLink to="{{props.route}}">
            {{ props.name }}
        </RouterLink>
    </button>
</template>

<style lang="css" scoped>
    button {
        width: 12rem;
        height: 16rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 8px 8px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    button:hover {
        border: 0.25rem solid;
    }
    a {
        text-decoration: none;
        font-size: 2rem;
        color: black;
    }

    @property --angle {
        initial-value: 0deg;
        inherits: false;
        syntax: '<angle>';
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }
</style>