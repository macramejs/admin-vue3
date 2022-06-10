<template>
    <div class="flex w-screen h-screen max-h-screen">
        <SidebarPrimary locked>
            <SidebarLink href="#">Foo</SidebarLink>
            <SidebarLink href="#">Bar</SidebarLink>
        </SidebarPrimary>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import SidebarPrimary from './components/SidebarPrimary.vue';
import SidebarLink from './components/SidebarLink.vue';
</script>
