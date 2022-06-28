<template>
    <MainBody>
        <MainContent>
            <TransitionSlideFade>
                <div v-if="!pageForm.isLoading">
                    <component :is="getComponent" v-if="!pageForm.isLoading">
                        <ToggleSections />
                        <Content
                            v-model="pageForm.content"
                            :sections="sections"
                        />
                    </component>
                </div>
            </TransitionSlideFade>
        </MainContent>
        <MainSidebar v-model:open="isOpen" :title="$t('pages.sections')">
            <template v-slot:icon>
                <IconGridAdd class="w-4 h-4" />
            </template>
            <Drawers :sections="drawsSections" />
        </MainSidebar>
    </MainBody>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { templates } from '@/modules/content/templates';
import { Drawers, sections, Content } from '@/modules/content';
import { pageForm } from '@/entities';
import ToggleSections from './components/ToggleSections.vue';
import { TransitionSlideFade } from '@/ui';
import IconGridAdd from '@/ui/Icons/IconGridAdd.vue';

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
