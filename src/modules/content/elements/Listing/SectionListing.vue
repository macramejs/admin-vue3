<template>
    <SectionListingForm
        v-bind="$attrs"
        :model-value="modelValue"
        @update:model-value="e => emit('update:modelValue', e)"
    />
</template>
<script setup lang="ts">
import SectionListingForm from './SectionListingForm.vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            items: [],
        }),
    },
});
</script>
