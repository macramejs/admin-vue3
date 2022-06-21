<template>
    <Main>
        <MainBody class="mx-auto max-w-7xl">
            <BadgeSection />
            <CardSection />
            <ChipSection />
            <ChipInputSection />
            <DatePickerSection />
            <DateRangeSection />
            <FileUploadSection />
            <ModalSection />
            <ImageSection />
        </MainBody>
    </Main>
</template>

<script setup lang="ts">
import { Main, MainBody } from '@/ui';
import {
    BadgeSection,
    CardSection,
    ChipSection,
    ChipInputSection,
    DatePickerSection,
    DateRangeSection,
    FileUploadSection,
    ModalSection,
    ImageSection,
} from './sections';
</script>
