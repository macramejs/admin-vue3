<template>
     <MainBody>
         <MainContent topPosition="80">
             <div class="flex justify-end mr-32 pb-5">
                 <AddOrEditItemModal :menu="menu" />
            </div>
            <MenuTree :tree="tree" />
        </MainContent>
        <MainSidebar v-model:open="isOpen" topPosition="80">
        </MainSidebar>
    </MainBody>
</template>

<script lang="ts" setup>
import { useOriginal } from '@macramejs/macrame-vue3';
import { saveQueue } from '@/modules/save-queue';
import MenuTree from './MenuTree.vue';
import AddOrEditItemModal from './AddOrEditItemModal.vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { useMenuItemTree } from '@/modules/state';
import { updateMenuItemTree } from '@/modules/api';
import { menu } from '@/modules/state';

const tree = useMenuItemTree(menu);

const originalOrder = useOriginal(tree.getOrder());

const treeQueueKey = `menu.${menu.type}.item-tree`;

tree.onOrderChange(order => {
    if (originalOrder.matches(order)) {
        saveQueue.remove(treeQueueKey);
    } else {
        saveQueue.add(treeQueueKey, async () => {
            originalOrder.update(order);
            updateMenuItemTree(menu, {order}, undefined);
        });
    }
});
</script>
