<template>
    <Main>
        <FileDropzone></FileDropzone>
        <Topbar>
            <div class="font-semibold">Medien</div>
        </Topbar>
        <MainBody>
            <MainContent>
                <FilesGrid />
            </MainContent>
            <MainSidebar v-model:open="isOpen">
                <MainSidebarSection title="Filter"> </MainSidebarSection>
                <MainSidebarSection title="Collections"> </MainSidebarSection>
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
import { mediaIndex } from '@/modules/media';

import FileDropzone from './components/FileDropzone.vue';
import FilesGrid from './components/FilesGrid.vue';

mediaIndex.load();

const isOpen = ref(true);
</script>
