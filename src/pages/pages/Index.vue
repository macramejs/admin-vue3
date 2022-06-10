<template>
    <SidebarSecondrayWrapper>
    </SidebarSecondrayWrapper>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Admin } from '@admin/layout';
import PageSidebar from './components/PagesSidebar.vue';
import { PageTreeCollectionResource } from '@admin/types';

const props = defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
