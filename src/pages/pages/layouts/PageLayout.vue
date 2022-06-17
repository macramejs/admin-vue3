<template>
    <Topbar>
        <div>Foo</div>
        <PagesTopbarRight> </PagesTopbarRight>
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
import { PropType, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PagesTopbarRight from './components/PagesTopbarRight.vue';
import { Tabs, Tab, Topbar } from '@/layout';
import { pageForm } from '@/modules/forms';
import { PageTreeCollectionResource } from '@/types';

const route = useRoute();

onMounted(() => {
    pageForm.load(route.params.page as string);
});

const pageId = computed(() => {
    return route.params.page as string;
});

defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
