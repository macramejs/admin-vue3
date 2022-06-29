<template>
    <ContextMenuItem
        @click="isOpen = true"
        :disabled="selection.files.length == 0"
    >
        {{ $t('media.add_to_collection') }}
    </ContextMenuItem>
    <Modal lg v-model:open="isOpen" :title="$t('media.add_to_collection')">
        <div class="space-y-3">
            <Select
                :label="$t('media.collection')"
                :options="collectionOptions"
                v-model="collection"
            />
        </div>
        <template v-slot:footer>
            <Button @click="addToCollection" :disabled="!collection">
                {{ $t('media.add') }}
            </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, PropType, computed } from 'vue';
import { Modal, Select, Button, ContextMenuItem } from '@/ui';
import { Selection } from '../modules';
import { MediaCollection } from '@/types/resources';
import { mediaCollectionIndex } from '@/entities';

const isOpen = ref<boolean>(false);

const collection = ref<MediaCollection>();

const props = defineProps({
    selection: {
        type: Object as PropType<Selection>,
        required: true,
    },
});

//

const collectionOptions = computed(() => {
    return mediaCollectionIndex.items.map(collection => ({
        value: collection,
        label: collection.title,
    }));
});

const addToCollection = () => {
    if (!collection.value) return;

    props.selection.addToCollection(collection.value);

    isOpen.value = false;
};
</script>
