<template>
    <Main>
        <MainBody class="mx-auto max-w-7xl"> table </MainBody>
        <!-- <MainSidebar v-model:open="isOpen">
            <Drawers :sections="drawsSections" />
            <DrawerSection title="Blöcke">
                <Cabinet>
                    <DrawerBlocks :draws="SectionBlocks" />
                </Cabinet>
            </DrawerSection>
        </MainSidebar> -->
    </Main>
</template>

<script setup lang="ts">
import { Main, MainBody, MainSidebar } from '@/ui';
</script>
