<template>
    <BaseSection wrap>
        <template v-slot:title>
            <DrawerInfoBoxLoud preview />
        </template>
        <SectionInfoBoxLoudForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import SectionInfoBoxLoudForm from './SectionInfoBoxLoudForm.vue';
import DrawerInfoBoxLoud from '././DrawerInfoBoxLoud.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            title: '',
            text: '',
            link: {
                link: '',
                text: '',
                new_tab: false,
            },
            icon: '',
        }),
    },
});
</script>
