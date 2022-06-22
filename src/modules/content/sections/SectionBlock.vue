<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerBlocks preview />
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
import DrawerBlocks from '../../blocks/DrawerBlocks.vue';
import { watch, reactive, ref } from 'vue';

// TODO:
// import { blocks } from '../../blocks/index';
// blocks.perPage = 99999999;
// blocks.loadItems();
const blockOptions = ref([]);

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
