<template>
    <Card>
        <Select
            label="Form"
            v-model="model.form"
            :options="formOptions"
            label-key="name"
            value-key="id"
        />
    </Card>
</template>
<script setup lang="ts">
import { formsState } from '@/entities';
import { Card, Select } from '@/ui';

import { watch, reactive, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            form: null,
        }),
    },
});

const model = reactive(props.modelValue);

const formOptions = computed(() => {
    return formsState.value?.map(form => {
        return {
            id: form.id,
            name: form.name,
        };
    });
});

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
