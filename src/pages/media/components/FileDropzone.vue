<template>
    <div
        class="absolute top-0 left-0 z-50 w-full h-full bg-black pointer-events-none filedropzone"
        :class="{
            'opacity-100': show,
            'opacity-0': !show,
        }"
        @drop="handleDrop"
    >
        lll
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref<boolean>(false);

window.addEventListener('dragover', (event: Event) => {
    show.value = true;
    event.preventDefault();
});
window.addEventListener('dragleave', (event: Event) => {
    setTimeout(() => {
        show.value = false;
    }, 300);
    event.preventDefault();
});

const handleDrop = (event: Event) => {
    event.preventDefault();
    console.log('handle drop…');

    show.value = false;
};
</script>
