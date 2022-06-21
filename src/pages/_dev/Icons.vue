<template>
    <Main>
        <MainBody class="mx-auto max-w-7xl">
            <h2 class="mb-4 text-xl font-semibold">Icons</h2>
            <div class="flex gap-5 mb-10">
                <IconAddMediaImage />
            </div>
        </MainBody>
    </Main>
</template>

<script setup lang="ts">
import { Main, MainBody } from '@/ui';
import IconAddMediaImage from '@/ui/Icons/IconAddMediaImage.vue';
</script>
