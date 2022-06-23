<template>
    <!-- <FilesTopbarLeft />
            <FilesTopbarRight :collections="collections?.data || []" /> -->
    <Main>
        <Topbar>
            <div class="font-semibold">Medien</div>
        </Topbar>
        <MainBody>
            <MainContent>
                <!-- <FilesContent
            :collections="collections?.data || []"
            :collection="collection?.data"
        /> -->
            </MainContent>
            <MainSidebar v-model:open="isOpen" :topPosition="80">
                <!-- <FilesSidebar
            :collections="collections?.data || []"
            :collection="collection?.data"
        /> -->
            </MainSidebar>
        </MainBody>
    </Main>
</template>

<script lang="ts" setup>
import { PropType, watch, ref } from 'vue';

import { Topbar } from '@/layout';
import { Main, MainBody, MainContent, MainSidebar } from '@/layout';
import { mediaIndex } from '@/modules/media';
import {
    MediaCollectionCollectionResource,
    MediaCollectionResource,
} from '@/types';
// import FilesSidebar from './components/FilesSidebar.vue';
// import FilesTopbarLeft from './components/FilesTopbarLeft.vue';
// import FilesTopbarRight from './components/FilesTopbarRight.vue';
// import FilesContent from './components/FilesContent.vue';
// import FilesFilters from './components/FilesFilters.vue';

// const props = defineProps({
//     collections: {
//         type: Object as PropType<MediaCollectionCollectionResource>,
//         requried: true,
//     },
//     collection: {
//         type: Object as PropType<MediaCollectionResource>,
//         requried: false,
//     },
// });

// mediaIndex.filters.collection.update(props.collection?.data);

// watch(
//     props.collection,
//     () => mediaIndex.filters.collection.update(props.collection?.data),
//     { immediate: true }
// );

// // initially load files.
// mediaIndex.loadItems();

const isOpen = ref(true);
</script>
