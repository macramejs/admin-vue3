<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerBlock preview />
        </template>
        <Card>
            <Select
                label="Block"
                v-model="model.block"
                :options="blockOptions"
                label-key="name"
                value-key="id"
            />
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from './BaseSection.vue';
import { Card, Select } from '@/ui';
import DrawerBlock from '../drawers/DrawerBlock.vue';
import { watch, reactive, computed } from 'vue';
import { blocksState } from '@/entities';

const blockOptions = computed(() => {
    return blocksState.value?.map(block => {
        return {
            id: block.id,
            name: block.name,
        };
    });
});

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            block: null,
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
