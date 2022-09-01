<template>
    <BaseSection>
        <SectionHeadquartersForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import SectionHeadquartersForm from './SectionHeadquartersForm.vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            icon: '',
            headline: '',
            street: '',
            postal_code: '',
            city: '',
            phone: '',
            fax: '',
            email: '',
        }),
    },
});
</script>
