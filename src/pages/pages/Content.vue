<template>
    <Main>
        <MainBody>
            <component :is="getComponent()" :form="pageForm">
                <ToggleSections />
                <Sections v-model="pageForm.content" :sections="sections" />
            </component>
        </MainBody>
        <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
            <DrawerSection title="Blöcke">
                <Cabinet>
                    <DrawerBlocks :draws="SectionBlocks" />
                </Cabinet>
            </DrawerSection>
        </MainSidebar>
    </Main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Cabinet } from '@macramejs/macrame-vue3';
import { Main, MainBody, MainSidebar } from '@/ui';
import DrawerSection from '@/modules/content/components/DrawerSection.vue';
import { templates } from '@/modules/content/templates';
import { Drawers, sections, Sections } from '@/modules/content';
import { SectionBlocks, DrawerBlocks } from '@/modules/blocks';
import { pageForm, pageModel } from '@/modules/forms';
import ToggleSections from './components/ToggleSections.vue';

const getComponent = () => {
    if (pageModel.value?.template) {
        return pageModel.value?.template in templates
            ? templates[pageModel.value?.template]
            : 'div';
    }
};

// allow drawing all registered sections
type DrawsSections = {
    [k: string]: boolean;
};
let drawsSections: DrawsSections = {};
for (let key in sections) drawsSections[key] = true;

const isOpen = ref(true);
</script>
