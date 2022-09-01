<template>
    <Card class="mb-3">
        <Input v-model="model.headline" label="Überschrift" />
    </Card>
    <hr class="mb-3" />
    <div class="pb-6 space-y-3">
        <Draggable
            tag="div"
            :list="model.items"
            handle=".drag-card"
            item-key="_draggableKey"
        >
            <template #item="{ element, index }">
                <Card class="mb-3" :key="index">
                    <Header class="mb-6">
                        <div class="flex items-center space-x-4">
                            <InteractionButton
                                class="cursor-move drag-card"
                                gray
                            >
                                <IconDraggable class="w-2.5 h-2.5" />
                            </InteractionButton>
                            <div class="text-lg font-semibold">
                                {{
                                    peopleState?.value?.find(
                                        item => item.id == element.id
                                    )?.name || 'Person'
                                }}
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
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <Select
                                label="Person"
                                v-model="element.id"
                                :options="peopleOptions"
                                label-key="name"
                                value-key="id"
                            />
                        </div>
                    </div>
                </Card>
            </template>
        </Draggable>
    </div>
    <div class="flex justify-center">
        <AddItemButton @click="addItem"> Person hinzufügen </AddItemButton>
    </div>
</template>
<script setup lang="ts">
import {
    AddItemButton,
    Card,
    Input,
    Select,
    Header,
    ContextMenu,
    ContextMenuItem,
    InteractionButton,
} from '@/ui';
import IconMoreHoriz from '@/ui/Icons/IconMoreHoriz.vue';
import IconDraggable from '@/ui/Icons/custom/IconDraggable.vue';
import IconTrash from '@/ui/Icons/IconTrash.vue';

import { peopleState } from '@/entities';
import { watch, reactive, computed } from 'vue';
import { v4 as uuid } from 'uuid';
import Draggable from 'vuedraggable';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            headline: '',
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
    items: props.modelValue.items.map((item: any) => {
        return { ...item, _draggableKey: uuid() };
    }),
});

const peopleOptions = computed(() => {
    return peopleState.value?.map(person => {
        return {
            id: person.id,
            name: person.name,
        };
    });
});

function addItem() {
    model.items.push({
        id: null,
        _draggableKey: uuid(),
    });
}

function removeItem(index: any) {
    model.items.splice(index, 1);
}

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
