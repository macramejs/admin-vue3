<template>
    <div class="flex w-screen h-screen max-h-screen" v-if="isAuthenticated">
        <SidebarPrimary :locked="locked">
            <template v-slot="{ expanded }">
                <SidebarSection title="CMS" :expanded="expanded">
                    <router-link to="/pages" v-slot="{ isActive }">
                        <Link :hide-title="!expanded" :active="isActive">
                            <template v-slot:icon>
                                <IconPage class="w-4 h-4" />
                            </template>
                            Seiten
                        </Link>
                    </router-link>
                </SidebarSection>
                <SidebarSection class="mt-auto" :expanded="expanded">
                    <router-link to="/settings" v-slot="{ isActive }">
                        <Link :hide-title="!expanded" :active="isActive">
                            <template v-slot:icon>
                                <IconSettings class="w-4 h-4" />
                            </template>
                            Einstellungen
                        </Link>
                    </router-link>
                </SidebarSection>
            </template>
        </SidebarPrimary>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import SidebarPrimary from './components/SidebarPrimary/SidebarPrimary.vue';
import SidebarSection from './components/SidebarPrimary/SidebarSection.vue';
import Link from './components/SidebarPrimary/Link.vue';
import IconPage from '@/ui/icons/IconPage.vue';
import IconSettings from '@/ui/icons/IconSettings.vue';
import { isAuthenticated } from '@/modules/auth';

const locked = computed(() => {
    if (localStorage.hasOwnProperty('sideBarLocked')) {
        return JSON.parse(localStorage.getItem('sideBarLocked'));
    }
    return false;
});
</script>
