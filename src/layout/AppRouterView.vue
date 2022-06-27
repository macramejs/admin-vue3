<template>
    <div
        class="flex w-screen h-screen max-h-screen"
        v-if="true"
        :class="{ filedrag: fileDrag }"
    >
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
                            {{ $t('layout.settings') }}
                        </Link>
                    </router-link>
                </SidebarSection>
            </template>
        </SidebarPrimary>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import SidebarPrimary from './components/SidebarPrimary/SidebarPrimary.vue';
import SidebarSection from './components/SidebarPrimary/SidebarSection.vue';
import Link from './components/SidebarPrimary/Link.vue';
import IconPage from '@/ui/Icons/IconPage.vue';
import IconSettings from '@/ui/Icons/IconSettings.vue';
import { isAuthenticated } from '@/entities';
import IconMediaImageFolder from '@/ui/Icons/IconMediaImageFolder.vue';
import IconList from '@/ui/Icons/IconList.vue';
import IconReportColumns from '@/ui/Icons/IconReportColumns.vue';
import IconLayoutLeft from '@/ui/Icons/IconLayoutLeft.vue';
import IconTestTube from '@/ui/Icons/IconTestTube.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const locked = computed(() => {
    if (localStorage.hasOwnProperty('sideBarLocked')) {
        return JSON.parse(localStorage.getItem('sideBarLocked') as string);
    }
    return false;
});

const fileDrag = ref<boolean>(false);

window.addEventListener('dragover', (event: Event) => {
    fileDrag.value = true;
    event.preventDefault();
});
window.addEventListener('dragleave', (event: Event) => {
    fileDrag.value = false;
    event.preventDefault();
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
                title: t('layout.pages'),
                to: '/pages',
                icon: IconPage,
            },
            {
                title: t('layout.media'),
                to: '/media',
                icon: IconMediaImageFolder,
            },
            {
                title: t('layout.navigations'),
                to: '/menus',
                icon: IconList,
            },
            {
                title: t('layout.blocks'),
                to: '/blocks',
                icon: IconReportColumns,
            },
            {
                title: t('layout.sections'),
                to: '/partials',
                icon: IconLayoutLeft,
            },
        ],
    },
    {
        title: 'Dev',
        items: [
            {
                title: 'Dev',
                to: '/dev',
                icon: IconTestTube,
            },
        ],
    },
];
</script>
