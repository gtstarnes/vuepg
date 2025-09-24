<script lang="tsx" setup>
import { onMounted, onUnmounted } from 'vue';


    const {letter, text, sound} =defineProps<{
        letter: string,
        text: string,
        sound: string
    }>()


    const playSound = (path:string) => {
        try {
            const audio = new Audio(path)
            audio.play()
        } catch (error) {
            console.error("Error playing audio", error)
            return
        }
    }

    const handleKeydown = (e: KeyboardEvent) => {
        const key = e.key.toLowerCase();
        if (key === letter.toLowerCase()) {
            playSound(sound)
        }
    }

    onMounted(() => {
        window.addEventListener("keydown", handleKeydown)
    })
    onUnmounted(()=> {
        window.removeEventListener("keydown", handleKeydown)
    })
</script>

<template>
    <button 
        @click="playSound(sound)" :key="letter">
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
        background-color: inherit;

        span {
            font-size: 0.5rem;
            font-weight: lighter;
            color: orange
        }
    }

    button:active {
        transform: scale(125%);
        border-color: orange;
        box-shadow: 0px 0px 10px rgba(255, 165, 0, 75%);
    }
</style>