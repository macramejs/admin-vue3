<template>
    <FormFieldLabel>Vimeo-ID</FormFieldLabel>
    <Input v-model="model.id" label="Vimeo-ID" />
</template>
<script setup lang="ts">
import { FormFieldLabel, Input } from '@/ui';

import { watch, reactive, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            id: '',
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
