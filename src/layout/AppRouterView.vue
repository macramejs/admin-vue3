<template>
    <div class="flex w-screen h-screen max-h-screen" v-if="isAuthenticated">
        <SidebarPrimary locked>
            <Link to="/pages">
                <template v-slot:icon>
                    <IconPage class="w-4 h-4" />
                </template>
                Pages
            </Link>
        </SidebarPrimary>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import SidebarPrimary from './components/SidebarPrimary/SidebarPrimary.vue';
import Link from './components/SidebarPrimary/Link.vue';
import IconPage from '@/ui/icons/IconPage.vue';
import { isAuthenticated } from '@/modules/auth';
</script>
