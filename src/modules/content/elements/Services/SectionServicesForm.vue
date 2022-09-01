<template>
    <div class="pb-6 space-y-3">
        <Card>
            <div class="grid grid-cols-1 gap-4">
                <FormGroup>
                    <Input v-model="model.headline" label="Titel" />
                </FormGroup>
                <FormFieldLabel> Text </FormFieldLabel>
                <FormGroup>
                    <Textarea v-model="model.text" />
                </FormGroup>
            </div>
        </Card>
        <Draggable
            tag="div"
            class="grid grid-cols-4 gap-5"
            :list="model.items"
            handle=".drag-card"
            item-key="_draggableKey"
        >
            <template #item="{ element, index }">
                <Card :key="index">
                    <Header class="mb-6">
                        <div class="flex items-center space-x-4">
                            <InteractionButton
                                class="cursor-move drag-card"
                                gray
                            >
                                <IconDraggable class="w-2.5 h-2.5" />
                            </InteractionButton>
                            <div class="text-lg font-semibold">
                                {{ element.title || 'Teaser' }}
                            </div>
                        </div>
                        <ContextMenu placement="left">
                            <template #button>
                                <InteractionButton class="cursor-pointer">
                                    <IconMoreHoriz class="w-4 h-4" />
                                </InteractionButton>
                            </template>
                            <ContextMenuItem
                                class="hover:bg-red-signal text-red-signal hover:text-white"
                                @click="removeItem(index)"
                            >
                                <template #icon>
                                    <IconTrash class="origin-left scale-75" />
                                </template>
                                <span>Löschen</span>
                            </ContextMenuItem>
                        </ContextMenu>
                    </Header>
                    <div class="grid grid-cols-1 gap-5">
                        <ContextMenu class="w-fit">
                            <template #button>
                                <button
                                    class="p-1.5 text-sm uppercase bg-gray-200 rounded"
                                >
                                    <div
                                        v-if="element.icon"
                                        v-html="element.icon"
                                    ></div>
                                    <span v-else>Icon auswählen</span>
                                </button>
                            </template>
                            <div class="grid grid-cols-4 gap-4">
                                <button
                                    @click="element.icon = icon"
                                    v-for="icon in icons"
                                    class="p-1.5 hover:bg-gray-200 rounded"
                                    :class="{
                                        'bg-gray-200': icon == element.icon,
                                    }"
                                >
                                    <div v-html="icon"></div>
                                </button>
                            </div>
                        </ContextMenu>
                        <Input v-model="element.title" label="Titel" />
                        <Link v-model="element.link" />
                    </div>
                </Card>
            </template>
        </Draggable>
    </div>
    <div class="flex justify-center">
        <AddItemButton @click="addItem"> Card hinzufügen </AddItemButton>
    </div>
</template>
<script setup lang="ts">
import {
    AddItemButton,
    Card,
    InteractionButton,
    Input,
    Textarea,
    Header,
    ContextMenu,
    ContextMenuItem,
    FormFieldLabel,
    FormGroup,
} from '@/ui';
import { iconsState } from '@/entities';

import Link from '@/modules/link/Link.vue';
import IconMoreHoriz from '@/ui/Icons/IconMoreHoriz.vue';
import IconDraggable from '@/ui/Icons/custom/IconDraggable.vue';
import IconTrash from '@/ui/Icons/IconTrash.vue';
import { watch, reactive, computed } from 'vue';
import Draggable from 'vuedraggable';
import { v4 as uuid } from 'uuid';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            headline: '',
            text: '',
            items: [],
        }),
    },
    wrap: {
        type: Boolean,
        default: true,
    },
});

const model = reactive({
    headline: props.modelValue.headline,
    text: props.modelValue.text,
    link: props.modelValue.link,
    items: props.modelValue.items.map((item: any) => {
        return { ...item, _draggableKey: uuid() };
    }),
});

function addItem() {
    model.items.push({
        title: '',
        link: {
            url: '',
            text: '',
            new_tab: false,
            external: false,
        },
        icon: '',
        _draggableKey: uuid(),
    });
}

function removeItem(index: any) {
    model.items.splice(index, 1);
}

const icons = computed(() => {
    return iconsState.value?.map(icon => {
        return icon;
    });
});

watch(
    () => model,
    () => {
        let items = JSON.parse(JSON.stringify(model.items)).map((item: any) => {
            delete item._draggableKey;

            return item;
        });

        emit('update:modelValue', {
            ...model,
            items,
        });
    },
    { deep: true }
);
</script>
