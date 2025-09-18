<script lang="tsx" setup>

    defineProps<{
        letter: string,
        text: string
    }>()
</script>

<template>
    <button>
        {{ letter }}
        <span>{{ text }}</span>
    </button>
</template>

<style lang="css" scoped>
    button {
        height: 3rem;
        width: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 3px black solid;
        font-weight: bold;

        span {
            font-size: 0.5rem;
            font-weight: lighter;
        }
    }

    button:active {
        transform: scale(125%);
        border-color: orange;
        box-shadow: 0px 0px 10px rgba(255, 165, 0, 75%);
    }
</style>