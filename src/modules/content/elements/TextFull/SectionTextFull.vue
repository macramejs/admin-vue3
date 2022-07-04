<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerTextFull preview />
        </template>
        <Card>
            <Wysiwyg v-model="model.text" class="w-full" />
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import { Wysiwyg, Card } from '@/ui';
import DrawerTextFull from './DrawerTextFull.vue';
import { reactive, watch } from 'vue';

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

// TODO: fix any
const text = translatable<string>(locale as any, props.modelValue.text, value =>
    emit('update:modelValue', { text: value })
);
</script>
