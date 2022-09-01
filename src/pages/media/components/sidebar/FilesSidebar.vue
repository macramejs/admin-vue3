<template>
    <MainSidebarSection :title="$t('media.filter')">
        <FilesFilters />
    </MainSidebarSection>
</template>
<script lang="ts" setup>
import { MainSidebarSection } from '@/layout';

import FilesFilters from './FilesFilters.vue';
</script>
