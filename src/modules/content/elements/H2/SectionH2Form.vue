<template>
    <Card class="flex flex-col gap-8 mb-3">
        <Toggle v-model="model.centered" label="Content zentrieren" />
        <Input v-model="model.text" label="H2 Überschrift" />
    </Card>
</template>
<script setup lang="ts">
import { Card, Toggle, Input } from '@/ui';

import { watch, reactive } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            text: '',
            centered: false,
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
