<template>
    <Button @click="emit('save')">
        Save
    </Button>
</template>
<script lang="ts" setup>
import { Button } from '@/ui';

const emit = defineEmits(['save']);

document.addEventListener('keydown', (e) => {
    const modifier = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;

    if (modifier && e.key === 's') {
        e.preventDefault();
        emit('save')
    }
});
</script>
