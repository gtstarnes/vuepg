<script lang="tsx" setup>

    defineProps<{
        key: string,
        text: string
    }>()
</script>

<template>
    <button>
        {{ key }}
        <span>{{ text }}</span>
    </button>
</template>

<style lang="css" scoped></style>