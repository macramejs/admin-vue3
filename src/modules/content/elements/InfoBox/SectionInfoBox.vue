<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerInfoBox preview />
        </template>
        <Card>
            <FormGroup>
                <Input v-model="model.title" class="w-full" label="Titel" />
                <Textarea v-model="model.text" class="w-full" label="Text" />
                <Link v-model="model.link" />
            </FormGroup>
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import Link from '@/modules/link/Link.vue';
import { Card, Textarea, Input, FormGroup } from '@/ui';
import DrawerInfoBox from '././DrawerInfoBox.vue';
import { watch, reactive } from 'vue';

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
        }),
    },
});

const model = reactive(props.modelValue);

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
