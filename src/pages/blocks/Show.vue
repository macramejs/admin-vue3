<template>
    <MainBody>
        <MainContent>
            <Sections v-model="blockForm.content" :sections="sections" />
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
import { blockForm } from '@/entities';

// allow drawing all registered sections
type DrawsSections = {
    [k: string]: boolean;
};
let drawsSections: DrawsSections = {};
for (let key in sections) if (key != 'blocks') drawsSections[key] = true;

const isOpen = ref(true);
</script>
