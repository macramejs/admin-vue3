<template>
    <BaseSection wrap>
        <template v-slot:title>
            <DrawerForm preview />
        </template>
        <SectionFormForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import SectionFormForm from './SectionFormForm.vue';
import DrawerForm from './DrawerForm.vue';

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

</script>
