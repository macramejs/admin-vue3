<template>
    <Main>
        <MainBody>
            <component
                :is="getComponent()"
                :form="page.form"
                v-if="page.form && page.page"
            >
                <div class="flex justify-end mb-4">
                    <button
                        @click="hideSections = !hideSections"
                        class="flex space-x-2 hover:font-semibold"
                    >
                        <template v-if="hideSections">
                            <span class="text-xs uppercase">show all</span>
                            <IconExpand class="w-4 h-4" />
                        </template>
                        <template v-if="!hideSections">
                            <span class="text-xs uppercase">collapse all</span>
                            <IconCollapse class="w-4 h-4" />
                        </template>
                    </button>
                </div>
                <Sections v-model="page.form.content" :sections="sections" />
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
import { onMounted, ref } from 'vue';
import { Main, MainBody, MainSidebar } from '@/ui';
import DrawerSection from '@/modules/content/components/DrawerSection.vue';
import { Cabinet } from '@macramejs/macrame-vue3';
import { Drawers, sections, Sections, hideSections } from '@/modules/content';
import { SectionBlocks, DrawerBlocks } from '@/modules/blocks';
import IconExpand from '@/ui/Icons/IconExpand.vue';
import IconCollapse from '@/ui/Icons/IconCollapse.vue';

import { usePage } from './temp';
import { templates } from './templates';

const page = usePage();

const getComponent = () => {
    return page.page?.template in templates
        ? templates[page.page?.template]
        : 'div';
};

// allow drawing all registered sections
let drawsSections = {};
for (let key in sections) drawsSections[key] = true;

const isOpen = ref(true);
</script>
