<template>
    <MainBody>
        <MainContent>
            <component :is="getComponent()">
                <ToggleSections />
                <Sections v-model="pageForm.content" :sections="sections" />
            </component>
        </MainContent>
        <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
            <!-- <DrawerSection title="Blöcke">
                <Cabinet>
                    <DrawerBlocks :draws="SectionBlocks" />
                </Cabinet>
            </DrawerSection> -->
        </MainSidebar>
    </MainBody>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Cabinet } from '@macramejs/macrame-vue3';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import DrawerSection from '@/modules/content/components/DrawerSection.vue';
import { templates } from '@/modules/content/templates';
import { Drawers, sections, Sections } from '@/modules/content';
// import { SectionBlocks, DrawerBlocks } from '@/modules/blocks';
import { pageForm } from '@/modules/forms';
import ToggleSections from './components/ToggleSections.vue';

const getComponent = () => {
    return pageForm.template in templates
        ? templates[pageForm.template]
        : 'div';
};

// allow drawing all registered sections
type DrawsSections = {
    [k: string]: boolean;
};
let drawsSections: DrawsSections = {};
for (let key in sections) drawsSections[key] = true;

const isOpen = ref(true);
</script>
