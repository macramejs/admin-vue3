<template>
    <Content>
        <ContentBody>
            <component :is="getComponent()" :form="form" v-if="form">
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
                <Sections v-model="form.content" :sections="sections" />
            </component>
        </ContentBody>
        <ContentSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
            <DrawerSection title="Blöcke">
                <Cabinet>
                    <DrawerBlocks :draws="SectionBlocks" />
                </Cabinet>
            </DrawerSection>
        </ContentSidebar>
    </Content>
</template>

<script setup lang="ts">
import {
    Sections,
    Content,
    ContentBody,
    hideSections,
} from '@macramejs/admin-vue3';
import { ContentSidebar, DrawerSection } from '@macramejs/admin-vue3';
import { Cabinet } from '@macramejs/macrame-vue3';
import { PropType } from 'vue';
import { templates } from './templates';
import { Drawers, sections } from '@/modules/content';
import { SectionBlocks, DrawerBlocks } from '@/modules/blocks';
import IconExpand from '@/modules/icons/IconExpand.vue';
import IconCollapse from '@/modules/icons/IconCollapse.vue';
import { Page } from '@/types/resources';
import { PageContentForm } from '@/types/forms';
import { ref } from 'vue';

const props = defineProps({
    page: {
        type: Object as PropType<Page>,
        // required: true,
    },
    form: {
        type: Object as PropType<PageContentForm>,
        // required: true,
    },
});

const getComponent = () => {
    return props.page?.template in templates
        ? templates[props.page.template]
        : 'div';
};

// allow drawing all registered sections
let drawsSections = {};
for (let key in sections) drawsSections[key] = true;

const isOpen = ref(true);
</script>
