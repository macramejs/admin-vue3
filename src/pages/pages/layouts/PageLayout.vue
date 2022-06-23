<template>
    <Topbar>
        <PagesTopbarLeft />
        <PagesTopbarRight />
    </Topbar>
    <Tabs>
        <Tab :to="`/pages/${pageId}`">{{ $t('pages.content') }}</Tab>
        <Tab :to="`/pages/${pageId}/meta`">Meta</Tab>
        <Tab :to="`/pages/${pageId}/settings`">{{ $t('pages.settings') }}</Tab>
        <Tab :to="`/pages/${pageId}/audits`">{{ $t('pages.versions') }}</Tab>
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
        console.log('load page');

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
