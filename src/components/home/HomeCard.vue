<script setup lang="ts">
    const props = defineProps<{
        route: string,
        name: string
    }>()
</script>

<template> 
    <RouterLink :to="props.route">
        <button>
                {{ props.name }}
        </button>
    </RouterLink>
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
        border: none;
        font-size: 2rem;
        color: black;
    }

    button:hover {
        border: 0.25rem solid;
        border-image: linear-gradient(var(--angle), rgba(0,0,0,0) 70%, black) 1;
        animation: rotate 3s linear infinite;
    }
    a {
        text-decoration: none;
        
        
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