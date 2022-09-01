<template>
    <div class="pb-6 space-y-3">
        <Card class="mb-3">
            <div class="grid grid-cols-2 gap-5">
                <section class="mb-4 col-span-full">
                    <h3 class="mb-2">Icon</h3>
                    <ContextMenu class="w-fit">
                        <template #button>
                            <button
                                class="p-1.5 text-sm uppercase bg-gray-200 rounded"
                            >
                                <div
                                    v-if="model.icon"
                                    v-html="model.icon"
                                ></div>
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
                </section>
                <div>
                    <Input v-model="model.street" label="Straße" />
                </div>
                <div>
                    <Input v-model="model.postal_code" label="Postleitzahl" />
                </div>
                <div>
                    <Input v-model="model.city" label="Stadt" />
                </div>
                <div>
                    <Input v-model="model.phone" label="Telefonnummer" />
                </div>
                <div>
                    <Input v-model="model.fax" label="Faxnummer" />
                </div>
                <div>
                    <Input v-model="model.email" label="E-mail Adresse" />
                </div>
            </div>
        </Card>
    </div>
</template>
<script setup lang="ts">
import {
    AddItemButton,
    Card,
    InteractionButton,
    Input,
    Header,
    ContextMenu,
    ContextMenuItem,
} from '@/ui';
import { iconsState } from '@/entities';

import Link from '@/modules/link/Link.vue';
import IconMoreHoriz from '@/ui/Icons/IconMoreHoriz.vue';
import IconDraggable from '@/ui/Icons/custom/IconDraggable.vue';
import IconTrash from '@/ui/Icons/IconTrash.vue';
import { watch, reactive, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
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
    wrap: {
        type: Boolean,
        default: true,
    },
});

const model = reactive({
    icon: props.modelValue.icon,
    headline: props.modelValue.headline,
    street: props.modelValue.street,
    postal_code: props.modelValue.postal_code,
    city: props.modelValue.city,
    phone: props.modelValue.phone,
    fax: props.modelValue.fax,
    email: props.modelValue.email,
});

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
