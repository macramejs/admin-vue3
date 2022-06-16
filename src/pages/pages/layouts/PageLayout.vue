<template>
    <Topbar> </Topbar>
    <Tabs>
        <Tab to="/pages/1">Content</Tab>
        <Tab to="/pages/1/meta">Meta</Tab>
        <Tab to="/pages/1/settings">Settings</Tab>
        <Tab to="/pages/1/audits">Versionen</Tab>
    </Tabs>
    <router-view />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { PageTreeCollectionResource } from '@/types';
import { Tabs, Tab, Topbar } from '@/layout';

const props = defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
