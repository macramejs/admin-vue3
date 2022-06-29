<template>
    <AddMediaCollectionModal />
    <div class="flex flex-wrap w-full gap-3 mt-4">
        <Chip
            v-for="collection in mediaCollectionIndex.items"
            @click="toggle(collection)"
            :isActive="isActive(collection)"
        >
            <span>{{ collection.title }}</span>
            <IconCancel class="w-3 h-3 ml-2" v-if="isActive(collection)" />
        </Chip>
    </div>
</template>
<script lang="ts" setup>
import AddMediaCollectionModal from './AddMediaCollectionModal.vue';
import { mediaIndex, mediaCollectionIndex } from '@/entities';

import { MediaCollection } from '@/types';
import { Chip } from '@/ui';
import IconCancel from '@/ui/Icons/IconCancel.vue';

const isActive = (collection: MediaCollection) => {
    return mediaIndex.filters?.collection?.value == collection.key;
};

const toggle = (collection: MediaCollection) => {
    if (mediaIndex.filters?.collection?.value == collection.key) {
        mediaIndex.removeFilter('collection');
    } else {
        mediaIndex.setFilter('collection', collection.key);
    }
};
</script>
