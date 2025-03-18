<script lang="ts" setup>
import { ref } from 'vue';
import { users } from './userInfo';

    const props = defineProps({
        active: String,
    })
    const user = ref(users)
</script>

<template>
    <section>
        <div v-if="active === 'Posts'">
            
        </div>
        <div v-else-if="active === 'Reels'">Reels</div>
        <div v-else-if="active === 'Tagged'">Tagged</div>
    </section>
</template>

<style lang="css" scope></style>