<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerBlocks preview />
        </template>
        <Card>
            <Select
                label="Block"
                v-model="model.block"
                :options="blocks.items"
                label-key="name"
                value-key="id"
            />
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../content/sections/BaseSection.vue';
import { Card, Select } from '@/ui';
import DrawerBlocks from './DrawerBlocks.vue';
import { watch, reactive } from 'vue';

import { blocks } from './index';

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

blocks.perPage = 99999999;
blocks.loadItems();

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
