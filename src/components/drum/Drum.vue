<script lang="tsx" setup>
import { drumInfo } from './drumInfo';
import DrumButton from './DrumButton.vue';

</script>

<template>
    <section>
        <div>
            <ul>
                <li v-for="d in drumInfo">
                    <DrumButton :letter="d.key" :text="d.text" :sound="d.sound"  />
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="css" scoped>
    section {
        background: linear-gradient(white, grey, black);
        height: 99vh;
        width: 99vw;
        margin: -5px;
        display: flex;
        align-items: center;
        justify-content: center
         ;
        ul {
            list-style: none;
            display: flex;
            gap: 0.5rem;
        }
    }
</style>