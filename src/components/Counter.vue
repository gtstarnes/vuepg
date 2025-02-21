<script lang="ts">
    import {ref, computed} from 'vue';

    const count = ref<number>(0);
    const square = computed(() => {
        return count.value * count.value
    })
</script>

<template>

</template>

<style lang="css" scoped>
</style>