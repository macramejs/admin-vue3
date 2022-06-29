<template>
    <Main>
        <Topbar>
            <div class="font-semibold">{{ $t('media.media') }}</div>
            <FileSelection />
        </Topbar>
        <MainBody>
            <MainContent>
                <FilesGrid />
            </MainContent>
            <MainSidebar :title="$t('media.filter')" v-model:open="isOpen">
                <template v-slot:icon>
                    <IconInputSearch class="w-4 h-4" />
                </template>
                <FilesSidebar />
            </MainSidebar>
        </MainBody>
    </Main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Topbar } from '@/layout';
import { Main, MainBody, MainContent, MainSidebar } from '@/layout';
import { mediaIndex, mediaCollectionIndex } from '@/entities';

import FileSelection from './components/FileSelection.vue';
import FilesGrid from './components/FilesGrid.vue';
import IconInputSearch from '@/ui/Icons/IconInputSearch.vue';
import FilesSidebar from './components/sidebar/FilesSidebar.vue';

mediaIndex.load();
mediaCollectionIndex.load();

const isOpen = ref(true);
</script>
