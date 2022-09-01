<template>
    <Card class="mb-3">
        <Input v-model="model.text" label="H2 Überschrift" />
    </Card>
</template>
<script setup lang="ts">
import { Card, Input } from '@/ui';

import { watch, reactive } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            text: '',
        }),
    },
});

const model = reactive(props.modelValue);

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
