<template>
    <Admin sidebar-secondary>
        <template v-slot:sidebar-secondary>
            <MenuSidebar />
        </template>
        <template v-slot:topbar-left>
            <slot name="topbar-left" />
        </template>
    </Admin>
</template>

<script setup lang="ts">
import { Admin } from '@/layout';
import MenuSidebar from './components/MenuSidebar.vue';
</script>
