<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerContactPeople preview />
        </template>
        <SectionContactPeopleForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import DrawerContactPeople from './DrawerContactPeople.vue';
import SectionContactPeopleForm from './SectionContactPeopleForm.vue';

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
