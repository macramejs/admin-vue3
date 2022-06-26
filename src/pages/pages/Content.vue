<template>
    <MainBody>
        <MainContent>
            <TransitionSlideFade>
                <div v-if="!pageForm.isBusyLoading">
                    <div class="grid grid-cols-2">
                        <pre>{{ pageForm }}</pre>
                        <pre>{{ pageForm.original.raw }}</pre>
                    </div>
                    <component
                        :is="getComponent"
                        v-if="!pageForm.isBusyLoading"
                    >
                        <ToggleSections />
                        <Sections
                            v-model="pageForm.content"
                            :sections="sections"
                        />
                    </component>
                </div>
            </TransitionSlideFade>
        </MainContent>
        <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
        </MainSidebar>
    </MainBody>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { templates } from '@/modules/content/templates';
import { Drawers, sections, Sections } from '@/modules/content';
import { pageForm } from '@/modules/forms';
import ToggleSections from './components/ToggleSections.vue';
import { TransitionSlideFade } from '@/ui';

const getComponent = computed(() => {
    return pageForm.value.template in templates
        ? templates[pageForm.value.template]
        : 'div';
});

// allow drawing all registered sections
type DrawsSections = {
    [k: string]: boolean;
};
let drawsSections: DrawsSections = {};
for (let key in sections) drawsSections[key] = true;

const isOpen = ref(true);
</script>
