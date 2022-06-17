<template>
    <TreeItem
        :item="page"
        :children="children"
        :is-active="isActive"
        background
    >
        <router-link
            class="flex-1 py-1 cursor-pointer"
            :to="`/pages/${page.id}`"
        >
            <span
                :class="{
                    'opacity-50': !page.is_live,
                }"
            >
                {{ page.name }}
            </span>
        </router-link>
        <div
            class="w-2 h-2 mr-2 rounded-full"
            :class="{
                ' bg-green': page.is_live,
                ' bg-red': !page.is_live,
            }"
            :title="page.is_live ? 'online' : 'offline'"
        ></div>
        <PageContextMenu :page="page" />

        <template v-slot:disclosure>
            <PagesTree :tree="children" />
        </template>
    </TreeItem>
</template>

<script lang="ts" setup>
import { Tree } from '@macramejs/macrame-vue3';
import { Page } from '@/types';
import { TreeItem } from '@/ui';
import PagesTree from './PagesTree.vue';
import PageContextMenu from './PageContextMenu.vue';
import { computed, PropType } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    page: {
        type: Object as PropType<Page>,
        required: true,
    },
    children: {
        type: Object as PropType<Tree<Page>>,
        required: true,
    },
});

const route = useRoute();

const pageId = computed(() => {
    return props.page.id;
});
const routePageId = computed(() => {
    return route.params.page;
});
const isActive = computed(() => {
    if (props.page.id) {
        return `${props.page.id}` == (route.params.page as string);
    }
});
</script>
