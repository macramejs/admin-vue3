<template>
    <MainBody>
        <MainContent topPosition="80">
            <FilesGrid :collection="collection" :collections="collections" />
        </MainContent>
        <MainSidebar v-model:open="isSidebarOpen" topPosition="80">
            <FilesFilters />
        </MainSidebar>
    </MainBody>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { MediaCollection } from '@/types';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import FilesGrid from './FilesGrid.vue';
import FilesFilters from './FilesFilters.vue';

const props = defineProps({
    collections: {
        type: Array as PropType<MediaCollection[]>,
        required: true,
    },
    collection: {
        type: Object as PropType<MediaCollection>,
        required: false,
    },
});

const isSidebarOpen = ref(true);
</script>
