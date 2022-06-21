<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Seiten">
                <template v-slot:icon>
                    <IconPage class="w-5 h-5" />
                </template>
                <AddPageModal />
            </SidebarSecondaryHeader>
        </template>
        <PagesTree :tree="tree" />
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import SidebarSecondaryHeader from '@/layout/components/SidebarSecondary/SidebarSecondaryHeader.vue';
import Main from '@/layout/components/Main.vue';
import PagesTree from '../components/Tree/PagesTree.vue';
import { ref, watch } from 'vue';
import { loadPagesTree } from '@/modules/api';
import IconPage from '@/ui/Icons/IconPage.vue';
import { useOriginal, useTree } from '@macramejs/macrame-vue3';
import AddPageModal from '../components/AddPageModal.vue';

const tree = ref();

loadPagesTree().then(response => {
    tree.value = useTree(response.data.data);

    // TODO:
    // tree.value.updateOnChange(() => props.pages);

    let originalOrder = useOriginal(tree.value.getOrder());

    watch(
        tree,
        () => {
            const order = tree.value.getOrder();

            if (!originalOrder.matches(order)) {
                originalOrder.update(order);
                // post('/admin/pages/order', { body: { order: order } });
            }
        },
        { immediate: true, deep: true }
    );
});
</script>
