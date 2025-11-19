<script lang="ts" setup>
import { getPortal } from './store';

const portal = getPortal()

</script>

<template>
    <form>
        <div v-for="input in portal?.inputs">
            <label :for="input.name">{{ input.label }}: </label>
            <input :type="input.type" :placeholder="input.placeholder"  />
        </div>
        <div>
            <button>Submit</button>
            <button>Cancel</button>
        </div>
    </form>

</template>

<style lang="css" scoped>

</style>