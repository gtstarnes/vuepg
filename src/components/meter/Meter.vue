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
            <button type="button"></button> 
        </span>
            <meter  max='1' min="0" value="0.5"></meter>

    </div>
</template>


<style lang="css" scoped></style>