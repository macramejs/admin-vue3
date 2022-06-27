<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader :title="$t('pages.pages')">
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
import { SidebarSecondary, SidebarSecondaryHeader } from '@/layout';
import { Main } from '@/layout';
import IconPage from '@/ui/Icons/IconPage.vue';
import PagesTree from './../components/Tree/PagesTree.vue';
import AddPageModal from './../components/AddPageModal.vue';

import { pageTree } from '@/modules/state';
import PagesHelp from './components/PagesHelp.vue';

onMounted(() => {
    pageTree.load();
});
</script>
