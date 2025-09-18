<script lang="tsx" setup>
    import { ref } from 'vue';
import { drumInfo } from './drumInfo';
import DrumButton from './DrumButton.vue';

</script>

<template>
    <section>
        <div>
            <ul>
                <li v-for="d in drumInfo">
                    <DrumButton :letter="d.key" :text="d.text"  />
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="css" scoped>
    section {
        background: linear-gradient(white, grey);
        height: 96vh;
        width: 99vw;
        margin: -5px;

        ul {
            list-style: none;
            display: flex;
            gap: 0.5rem;
        }
    }
</style>