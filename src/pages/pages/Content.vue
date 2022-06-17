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
import { Drawers, sections, Sections } from '@/modules/content';
import { SectionBlocks, DrawerBlocks } from '@/modules/blocks';
import { pageForm, template } from '@/modules/forms';
import ToggleSections from './components/ToggleSections.vue';
import { templates } from './templates';

const getComponent = () => {
    if (template.value) {
        return template.value in templates ? templates[template.value] : 'div';
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
