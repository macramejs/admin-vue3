<template>
    <Topbar>
        {{ pageId }}
    </Topbar>
    <Tabs>
        <Tab :to="`/pages/${page.pageId}`">Content</Tab>
        <Tab :to="`/pages/${page.pageId}/meta`">Meta</Tab>
        <Tab :to="`/pages/${page.pageId}/settings`">Settings</Tab>
        <Tab :to="`/pages/${page.pageId}/audits`">Versionen</Tab>
    </Tabs>
    <router-view />
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { PageTreeCollectionResource } from '@/types';
import { Tabs, Tab, Topbar } from '@/layout';

import { usePage } from '../temp';

const page = usePage();

defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
