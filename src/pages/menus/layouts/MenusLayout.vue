<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Menus">
                <template v-slot:icon>
                    <IconList class="w-5 h-5" />
                </template>
                <template v-slot:help>
                    <!-- TODO -->
                </template>
                <AddMenuModal />
            </SidebarSecondaryHeader>
        </template>
        <SidebarSecondarySection>
            <SidebarSecondaryLink
                v-for="menu in menusState.value"
                :key="menu.id"
                :title="menu.title"
                :to="`/menus/${menu.id}`"
                class="cursor-pointer"
            />
        </SidebarSecondarySection>
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {
    SidebarSecondaryHeader,
    SidebarSecondary,
    SidebarSecondarySection,
    SidebarSecondaryLink,
} from '@/layout';

import { Main } from '@/layout';
import { menusState } from '@/modules/state';
import IconList from '@/ui/Icons/IconList.vue';
import AddMenuModal from '../components/AddMenuModal.vue';

onMounted(() => {
    menusState.load();
});
</script>
