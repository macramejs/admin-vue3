<template>
    <template v-if="!isLoading && isLoaded">
        <Topbar>
            <MenusTopbarLeft />
            <MenusTopbarRight />
        </Topbar>
        <router-view />
    </template>
    <template v-else> Busy </template>
</template>

<script setup lang="ts">
import { PropType, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MenusTopbarRight from './components/MenusTopbarRight.vue';
import MenusTopbarLeft from './components/MenusTopbarLeft.vue';
import { Topbar } from '@/layout';
import { menuState, useMenuItemTree, menuItemTree } from '@/modules/state';
import { updateMenuItemTree } from '@/modules/api';

const route = useRoute();

const menuId = computed(() => parseInt(route.params.menu as string));

const isLoading = computed(() => {
    return menuState.isLoading;
});

const isLoaded = computed(() => {
    return menuState.isLoaded && menuItemTree.value;
});

const loadData = () => {
    menuState.load(menuId.value).then(menu => {
        menuItemTree.value = useMenuItemTree(menu);

        menuItemTree.value.onOrderChange(order => {
            updateMenuItemTree(menuState.value, { order }, undefined);
        });

        menuItemTree.value.load();
    });
};

watch(() => menuId.value, loadData, { immediate: true });
</script>
