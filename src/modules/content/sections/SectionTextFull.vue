<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerTextFull preview />
        </template>
        <Card>
            <Wysiwyg v-model="text" class="w-full" :key="locale"/>
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import { Wysiwyg, Section as BaseSection, Card } from '@macramejs/admin-vue3';
import { translatable } from '@macramejs/macrame-vue3';
import { locale } from '@admin/modules/localize';
import DrawerTextFull from './../drawers/DrawerTextFull.vue';
import { watch, reactive } from 'vue';

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

const text = translatable<string>(
    locale, props.modelValue.text, 
    (value) => emit('update:modelValue', { text: value })
);
</script>
