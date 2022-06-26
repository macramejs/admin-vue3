<template>
    <MainBody>
        <MainContent topPosition="80">
            <div class="flex justify-end pb-5 mr-32">
                <AddOrEditItemModal :menu="menuState.value" />
            </div>
            <MenuTree :tree="menuItemTree" />
        </MainContent>
        <MainSidebar v-model:open="isOpen" />
    </MainBody>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useOriginal } from '@macramejs/macrame-vue3';
import MenuTree from './components/MenuTree.vue';
import AddOrEditItemModal from './components/AddOrEditItemModal.vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { updateMenuItemTree } from '@/modules/api';
import { saveQueue } from '@/modules/save-queue';
import { menuItemTree, menuState } from '@/modules/state';

const isOpen = ref<boolean>(false);
</script>
