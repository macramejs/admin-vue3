<template>
    <BaseSection>
        <SectionServicesForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import SectionServicesForm from './SectionServicesForm.vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            headline: '',
            text: '',
            link: {
                link: '',
                text: '',
                new_tab: false,
            },
            items: [],
        }),
    },
});
</script>
