<template>
    <Card>
        <FormGroup>
            <ContextMenu class="w-fit">
                <template #button>
                    <button class="p-1.5 text-sm uppercase bg-gray-200 rounded">
                        <div v-if="model.icon" v-html="model.icon"></div>
                        <span v-else>Icon auswählen</span>
                    </button>
                </template>
                <div class="grid grid-cols-4 gap-4">
                    <button
                        @click="model.icon = icon"
                        v-for="icon in icons"
                        class="p-1.5 hover:bg-gray-200 rounded"
                        :class="{
                            'bg-gray-200': icon == model.icon,
                        }"
                    >
                        <div v-html="icon"></div>
                    </button>
                </div>
            </ContextMenu>
            <Input v-model="model.title" class="w-full" label="Titel" />
            <Textarea v-model="model.text" class="w-full" label="Text" />
            <Link v-model="model.link" />
        </FormGroup>
    </Card>
</template>
<script setup lang="ts">
import { Card, Input, FormGroup, Textarea, ContextMenu } from '@/ui';
import Link from '@/modules/link/Link.vue';
import { iconsState } from '@/entities';

import { watch, reactive, computed } from 'vue';

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

const model = reactive(props.modelValue);

const icons = computed(() => {
    return iconsState.value?.map(icon => {
        return icon;
    });
});

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
