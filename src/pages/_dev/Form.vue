<template>
    <Main>
        <MainBody class="mx-auto max-w-7xl">
            <InputSection />
            <FormFieldSection />
            <CheckboxSection />
            <CheckboxSwitchSection />
            <ToggleSection />
            <RadioSection />
            <SelectSection />
            <SliderSection />
            <TextareaSection />
            <WysiwygSection />
        </MainBody>
    </Main>
</template>

<script setup lang="ts">
import { Main, MainBody } from '@/ui';
import {
    InputSection,
    FormFieldSection,
    CheckboxSection,
    CheckboxSwitchSection,
    ToggleSection,
    RadioSection,
    SelectSection,
    SliderSection,
    TextareaSection,
    WysiwygSection,
} from './sections';
</script>
