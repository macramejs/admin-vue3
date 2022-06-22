<template>
    <MainBody>
        <MainContent> tree </MainContent>
        <!-- <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
            <DrawerSection title="Blöcke">
                <Cabinet>
                    <DrawerBlocks :draws="SectionBlocks" />
                </Cabinet>
            </DrawerSection>
        </MainSidebar> -->
    </MainBody>
</template>

<script setup lang="ts">
import { MainBody, MainContent } from '@/layout';
</script>
