<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerGridGallery preview />
        </template>
        <Card>
            <Draggable
                tag="div"
                class="grid grid-cols-4 gap-5"
                :list="model.items"
                item-key="_draggableKey"
                v-if="model"
            >
                <template #item="{ element, index }">
                    <SelectImage v-model="element.image" />
                </template>
            </Draggable>
        </Card>
        <div class="flex justify-center mt-6">
            <AddItemButton @click="addItem"> Bild hinzufügen </AddItemButton>
        </div>
    </BaseSection>
</template>
<script setup lang="ts">
import Draggable from 'vuedraggable';
import { Card, AddItemButton } from '@/ui';
import BaseSection from './BaseSection.vue';
import { watch, reactive } from 'vue';
import DrawerGridGallery from '../drawers/DrawerGridGallery.vue';
import SelectImage from '@/modules/media/SelectImage.vue';
import { v4 as uuid } from 'uuid';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            items: [],
        }),
    },
});

const model = reactive({
    items: props.modelValue.items.map(item => {
        return { ...item, _draggableKey: uuid() };
    }),
});

function addItem() {
    model.items.push({
        name: '',
        link: '',
        _draggableKey: uuid(),
        image: {
            id: null,
            title: '',
            alt: '',
        },
    });
}

function removeItem(index) {
    model.items.splice(index, 1);
}

watch(
    () => model,
    () => {
        let items = JSON.parse(JSON.stringify(model.items)).map(item => {
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
