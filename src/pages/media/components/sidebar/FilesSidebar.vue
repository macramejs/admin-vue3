<template>
    <MainSidebarSection :title="$t('media.filter')">
        <FilesFilters />
    </MainSidebarSection>
    <MainSidebarSection :title="$t('media.collections')">
        <FileCollections />
    </MainSidebarSection>
</template>
<script lang="ts" setup>
import { MainSidebarSection } from '@/layout';

import FilesFilters from './FilesFilters.vue';
import FileCollections from './FileCollections.vue';
</script>
