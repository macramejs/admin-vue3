<template>
    <Topbar>
        <PagesTopbarLeft />
        <PagesTopbarRight />
    </Topbar>
    <Tabs>
        <Tab :to="`/pages/${pageId}`">Content</Tab>
        <Tab :to="`/pages/${pageId}/meta`">Meta</Tab>
        <Tab :to="`/pages/${pageId}/settings`">Settings</Tab>
        <Tab :to="`/pages/${pageId}/audits`">Versionen</Tab>
    </Tabs>
    <router-view />
</template>

<script setup lang="ts">
import { PropType, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import PagesTopbarRight from './components/PagesTopbarRight.vue';
import PagesTopbarLeft from './components/PagesTopbarLeft.vue';
import { Tabs, Tab, Topbar } from '@/layout';
import { pageForm } from '@/modules/forms';
import { PageTreeCollectionResource } from '@/types';

const route = useRoute();

const pageId = computed(() => {
    return route.params.page as string;
});

watch(
    () => pageId.value,
    id => {
        pageForm.load(id);
    },
    {
        immediate: true,
    }
);

defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
