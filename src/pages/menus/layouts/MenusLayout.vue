<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Menus">
                <template v-slot:icon>
                    <!-- TODO -->
                </template>
                <template v-slot:help>
                    <!-- TODO -->
                </template>
            </SidebarSecondaryHeader>
        </template>
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { SidebarSecondaryHeader, SidebarSecondary } from '@/layout';
import { Main } from '@/layout';
import { menus } from '@/modules/state';

onMounted(() => {
    // TODO:
    menus.load();
});
</script>
