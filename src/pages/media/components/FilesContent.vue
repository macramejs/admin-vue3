<template>
    <MainBody>
        <MainContent>
            <FilesGrid />
        </MainContent>
        <MainSidebar v-model:open="isSidebarOpen">
            <FilesFilters />
        </MainSidebar>
    </MainBody>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import FilesGrid from './FilesGrid.vue';
import FilesFilters from './FilesFilters.vue';

const isSidebarOpen = ref(true);
</script>
