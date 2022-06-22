<template>
    <div class="flex w-screen h-screen max-h-screen" v-if="isAuthenticated">
        <SidebarPrimary :locked="locked">
            <template v-slot="{ expanded }">
                <SidebarSection
                    :title="section.title"
                    :expanded="expanded"
                    v-for="section in sidebarPrimarySections"
                >
                    <router-link
                        :to="item.to"
                        v-slot="{ isActive }"
                        v-for="(item, index) in section.items"
                        :key="index"
                    >
                        <Link :hide-title="!expanded" :active="isActive">
                            <template v-slot:icon>
                                <component :is="item.icon" class="w-4 h-4" />
                            </template>
                            {{ item.title }}
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
import IconPage from '@/ui/Icons/IconPage.vue';
import IconSettings from '@/ui/Icons/IconSettings.vue';
import { isAuthenticated } from '@/modules/auth';
import IconMediaImageFolder from '@/ui/Icons/IconMediaImageFolder.vue';
import IconList from '@/ui/Icons/IconList.vue';
import IconReportColumns from '@/ui/Icons/IconReportColumns.vue';
import IconLayoutLeft from '@/ui/Icons/IconLayoutLeft.vue';

const locked = computed(() => {
    if (localStorage.hasOwnProperty('sideBarLocked')) {
        return JSON.parse(localStorage.getItem('sideBarLocked') as string);
    }
    return false;
});

type SidebarSection = {
    title: string;
    items: SidebarSectionItem[];
};
type SidebarSectionItem = {
    title: string;
    to: string;
    icon: any; // TODO
};

const sidebarPrimarySections: SidebarSection[] = [
    {
        title: 'CMS',
        items: [
            {
                title: 'Seiten',
                to: '/pages',
                icon: IconPage,
            },
            {
                title: 'Medien',
                to: '/media',
                icon: IconMediaImageFolder,
            },
            {
                title: 'Navigation',
                to: '/menus',
                icon: IconList,
            },
            {
                title: 'Blöcke',
                to: '/blocks',
                icon: IconReportColumns,
            },
            {
                title: 'Bereiche',
                to: '/partials',
                icon: IconLayoutLeft,
            },
        ],
    },
];
</script>
