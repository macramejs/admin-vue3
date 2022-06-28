<template>
    <template v-if="!isLoading && isLoaded">
        <Topbar>
            <PagesTopbarLeft />
            <PagesTopbarRight />
        </Topbar>
        <Tabs>
            <Tab :to="`/pages/${pageId}`">{{ $t('pages.content') }}</Tab>
            <Tab :to="`/pages/${pageId}/meta`">Meta</Tab>
            <Tab :to="`/pages/${pageId}/settings`">{{
                $t('pages.settings')
            }}</Tab>
            <Tab :to="`/pages/${pageId}/audits`">{{
                $t('pages.versions')
            }}</Tab>
        </Tabs>

        <router-view />
    </template>
    <Loading v-else />
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import PagesTopbarRight from './components/PagesTopbarRight.vue';
import PagesTopbarLeft from './components/PagesTopbarLeft.vue';
import { Tabs, Tab, Topbar, Loading } from '@/layout';
import { usePageForm, pageForm } from '@/entities';
import { pageState } from '@/entities';

const route = useRoute();

const pageId = computed(() => parseInt(route.params.page as string));

const isLoading = computed(() => {
    return pageState.isLoading;
});

const isLoaded = computed(() => {
    return pageState.isLoaded && !!pageForm.value;
});

const loadData = () => {
    pageState.load(pageId.value).then(page => {
        if (Array.isArray(page.attributes)) {
            page.attributes = {};
        }
        pageForm.value = usePageForm(page);
    });
};

// watch the route param in order to load data
watch(
    () => pageId.value,
    id => {
        // should not be loaded when namespace is left
        if (id) {
            loadData();
        }
    },
    { immediate: true }
);
</script>
