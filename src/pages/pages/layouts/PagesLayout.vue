<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Seiten">
                <template v-slot:icon>
                    <IconPage class="w-5 h-5" />
                </template>
                <template v-slot:help>
                    <PagesHelp />
                </template>
                <AddPageModal />
            </SidebarSecondaryHeader>
        </template>
        <PagesTree :tree="pageTree" />
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import SidebarSecondaryHeader from '@/layout/components/SidebarSecondary/SidebarSecondaryHeader.vue';
import { Main } from '@/layout';
import PagesTree from '../components/Tree/PagesTree.vue';
import IconPage from '@/ui/Icons/IconPage.vue';
import AddPageModal from '../components/AddPageModal.vue';

import { pageTree, usePageTree } from '@/modules/state';
import PagesHelp from './components/PagesHelp.vue';

onMounted(() => {
    usePageTree().load();
});
</script>
