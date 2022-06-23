<template>
    <MainBody>
        <MainContent>
            <Sections v-model="form.content" :sections="sections" />
        </MainContent>
        <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
        </MainSidebar>
    </MainBody>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { Drawers, sections, Sections } from '@/modules/content';
import { useBlockForm } from '@/modules/forms';
import { useRoute } from 'vue-router';

const route = useRoute();
const blockId: number = route.params.block as number;

const form = useBlockForm({}, blockId);

// allow drawing all registered sections
type DrawsSections = {
    [k: string]: boolean;
};
let drawsSections: DrawsSections = {};
for (let key in sections) if (key != 'blocks') drawsSections[key] = true;

const isOpen = ref(true);
</script>
