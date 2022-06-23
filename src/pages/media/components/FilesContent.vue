<template>
    <Main>
        <MainBody>
            <FilesGrid :collection="collection" :collections="collections" />
        </MainBody>
        <MainSidebar v-model:open="isSidebarOpen">
            <FilesFilters />
        </MainSidebar>
    </Main>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { MediaCollection } from '@/types';
import { Main, MainBody, MainSidebar } from '@/ui';
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
