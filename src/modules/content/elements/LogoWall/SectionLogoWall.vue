<template>
    <BaseSection wrap>
        <template v-slot:title>
            <DrawerLogoWall preview />
        </template>
        <SectionLogoWallForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import DrawerLogoWall from './DrawerLogoWall.vue';
import SectionLogoWallForm from './SectionLogoWallForm.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            headline: '',
            items: [],
        }),
    },
});
</script>
