<script setup lang="ts">
</script>

<template>
    <dl>
        <dt>Hola</dt>
        <dd>hello</dd>
        <dt>Salve</dt>
        <dd>hello</dd>
        <dt>Hei</dt>
        <dd>hello</dd>
    </dl>
</template>

<style lang="css" scoped>
    dl {
        display: grid;
        grid-template-columns: auto 1fr;
    }
    dt {
        font-weight: bold;
    }
    dt::after {
        content: ":";
    }
</style>