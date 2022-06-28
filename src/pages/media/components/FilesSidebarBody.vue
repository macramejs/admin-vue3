<template>
    <SidebarSecondarySection v-if="showForm">
        <AddCollectionForm class="mb-4" />
    </SidebarSecondarySection>
    <SidebarSecondarySection>
        <SidebarSecondaryLink
            :active="!collection"
            class="flex-1 py-1 pr-4 cursor-pointer"
            to="/media"
            key="all"
        >
            <div class="flex justify-between">
                {{ $t('media.all') }}
                <!-- <span class="text-gray-300"> {{ mediaIndex.length }}</span> -->
            </div>
        </SidebarSecondaryLink>
        <SidebarSecondaryLink
            v-for="c in collections"
            :key="c.id"
            :active="c.id == collection?.id"
            class="flex-1 py-1 pr-4 cursor-pointer"
            :to="c.id == collection?.id ? `/media` : `/media/${c.id}`"
        >
            <div class="flex justify-between">
                {{ c.title }}
                <!-- <span class="text-gray-300"> {{ c.files_count }}</span> -->
            </div>
        </SidebarSecondaryLink>
    </SidebarSecondarySection>
</template>

<script lang="ts" setup>
import { SidebarSecondaryLink, SidebarSecondarySection } from '@/layout';
import { PropType } from 'vue';
import { MediaCollection } from '@/types';

import { mediaIndex } from '@/entities';
import AddCollectionForm from './AddCollectionForm.vue';

const props = defineProps({
    collections: {
        type: Array as PropType<MediaCollection[]>,
        required: true,
    },
    collection: {
        type: Object as PropType<MediaCollection>,
        required: false,
    },
    showForm: {
        type: Boolean,
        required: true,
    },
});
</script>
