<template>
    <SidebarSecondary>
        <!-- <PagesTree :tree="tree" /> -->
        <router-link to="/pages/1"> Page 1 </router-link>
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import Main from '@/layout/components/Main.vue';
import PagesTree from './components/PagesTree.vue';

const tree = [];
</script>
