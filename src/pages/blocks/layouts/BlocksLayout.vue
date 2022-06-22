<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Blöcke">
                <template v-slot:icon>
                    <IconReportColumns class="w-5 h-5" />
                </template>
                <AddBlockModal />
            </SidebarSecondaryHeader>
        </template>
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import SidebarSecondaryHeader from '@/layout/components/SidebarSecondary/SidebarSecondaryHeader.vue';
import Main from '@/layout/components/Main.vue';
import IconReportColumns from '@/ui/Icons/IconReportColumns.vue';
import AddBlockModal from '../components/AddBlockModal.vue';
</script>
