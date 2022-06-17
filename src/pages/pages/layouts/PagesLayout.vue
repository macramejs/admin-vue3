<template>
    <SidebarSecondary>
        <PagesTree :tree="p.tree" v-if="p.tree" />
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import Main from '@/layout/components/Main.vue';
import PagesTree from '../components/Tree/PagesTree.vue';
import { reactive } from 'vue';
import { loadPagesTree } from '@/modules/api';
import { Page, PageTreeResource } from '@/types';
import { Tree, useTree } from '@macramejs/macrame-vue3';

const usePageTree = () => {
    interface PageTree {
        tree: Tree<Page> | null;
        loadTree(): void;
        setPagesTree(data: PageTreeResource): void;
    }
    let tree = reactive<PageTree>({
        tree: null,
        loadTree() {
            loadPagesTree().then((data: any) => this.setPagesTree(data));
        },
        setPagesTree(data: any) {
            this.tree = useTree<Page>(data.data);
        },
    });

    return tree;
};

const p = usePageTree();
p.loadTree();
</script>
