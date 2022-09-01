<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerTeaserBoxesIcon preview />
        </template>
        <SectionTeaserBoxesIconForm
            v-bind="$attrs"
            :model-value="modelValue"
            @update:model-value="e => emit('update:modelValue', e)"
        />
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import DrawerTeaserBoxesIcon from './DrawerTeaserBoxesIcon.vue';
import SectionTeaserBoxesIconForm from './SectionTeaserBoxesIconForm.vue';

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
