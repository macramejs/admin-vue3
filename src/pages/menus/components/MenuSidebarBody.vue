<template>
    <SidebarSecondarySection>
        <SidebarSecondaryLink
            v-for="menu in menus.value"
            :key="menu.id"
            :title="menu.title" 
            :to="`/media/${menu.id}`"
            secondary 
            class="cursor-pointer"
        />
    </SidebarSecondarySection>
</template>

<script lang="ts" setup>
import { SidebarSecondarySection, SidebarSecondaryLink } from '@/layout';
import { menus } from '@/modules/state';
</script>
