<template>
    <Main>
        <FileDropzone></FileDropzone>
        <Topbar>
            <div class="font-semibold">{{ $t('media.media') }}</div>
            <AddMediaCollectionModal />
        </Topbar>
        <MainBody>
            <MainContent>
                <FilesGrid />
            </MainContent>
            <MainSidebar :title="$t('media.filter')" v-model:open="isOpen">
                <MainSidebarSection :title="$t('media.filter')">
                    <FilesFilters />
                </MainSidebarSection>
                <MainSidebarSection :title="$t('media.collections')">
                    <!-- TODO: -->
                    <pre>{{ mediaCollectionIndex }}</pre>
                </MainSidebarSection>
            </MainSidebar>
        </MainBody>
    </Main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Topbar } from '@/layout';
import {
    Main,
    MainBody,
    MainContent,
    MainSidebar,
    MainSidebarSection,
} from '@/layout';
import { mediaIndex, mediaCollectionIndex } from '@/entities';

import FileDropzone from './components/FileDropzone.vue';
import FilesGrid from './components/FilesGrid.vue';
import FilesFilters from './components/FilesFilters.vue';
import AddMediaCollectionModal from './components/AddMediaCollectionModal.vue';

mediaIndex.load();
mediaCollectionIndex.load();

const isOpen = ref(true);
</script>
