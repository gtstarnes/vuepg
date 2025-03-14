<script setup lang="ts">
    const props = defineProps<{
        route: string,
        name: string
    }>()
</script>

<template>
    <article>
        <RouterLink to="{{props.route}}">{{ props.name }}</RouterLink>
    </article>
</template>

<style lang="css" scoped></style>