<template>
    <Button @click="emit('save')">
        <slot> Save </slot>
        <Spinner v-if="busy" class="w-3 h-3 ml-2" />
    </Button>
</template>
<script lang="ts" setup>
import { Button, Spinner } from '@/ui';

defineProps({
    busy: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['save']);

document.addEventListener('keydown', e => {
    const modifier = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;

    if (modifier && e.key === 's') {
        e.preventDefault();
        emit('save');
    }
});
</script>
