<template>
    <SidebarSecondary>
        <template v-slot:header>
            <SidebarSecondaryHeader title="Bereiche">
                <template v-slot:icon>
                    <IconReportColumns class="w-5 h-5" />
                </template>
            </SidebarSecondaryHeader>
        </template>
        <SidebarSecondarySection>
            <SidebarLink v-for="(template, index) in templates">
                <router-link
                    class="flex-1 py-1 cursor-pointer"
                    :to="`/partials/${index}`"
                >
                    {{ template.__name }}
                </router-link>
            </SidebarLink>
        </SidebarSecondarySection>
    </SidebarSecondary>
    <Main>
        <router-view />
    </Main>
</template>

<script setup lang="ts">
import SidebarSecondary from '@/layout/components/SidebarSecondary/SidebarSecondary.vue';
import SidebarSecondaryHeader from '@/layout/components/SidebarSecondary/SidebarSecondaryHeader.vue';
import SidebarSecondarySection from '@/layout/components/SidebarSecondary/SidebarSecondarySection.vue';
import Main from '@/layout/components/Main.vue';
import IconReportColumns from '@/ui/Icons/IconReportColumns.vue';
import { templates } from './../components/templates';
</script>
