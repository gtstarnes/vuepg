<script lang="ts" setup>
import { computed, ref } from 'vue';

    const a = ref(0);
    const b = ref(0);
    const percentA = computed(() => {
        return a.value / 100; 
    })
</script>

<template>
    <div>
        <span class="option">
            <meter  max="1" value="0.5"></meter>
            <button type="button">Vote for A</button> 
        </span>
        <span class="option">
            <meter  max='1' min="0" value="0.5"></meter>
            <button type="button">Vote for B</button> 
        </span>

    </div>
</template>


<style lang="css" scoped>
    div {
        span {
            display: flex;
            flex-direction: column;

            button, meter {
                width: 50%;
            }

            meter {
                height: 5rem;
            }
        }
    }
</style>