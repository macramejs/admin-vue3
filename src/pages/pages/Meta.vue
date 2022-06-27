<template>
    <MainBody>
        <MainContent>
            <span class="inline-block pb-8 text-xl font-medium">
                {{ $t('pages.meta_information') }}
            </span>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-full md:col-span-9">
                    <Card class="flex flex-col gap-5">
                        <FormField no-label>
                            <Input
                                class="w-full"
                                :label="$t('pages.title')"
                                v-model="pageForm.meta.title"
                            />
                        </FormField>
                        <FormField>
                            <FormFieldLabel>{{
                                $t('pages.description')
                            }}</FormFieldLabel>
                            <Textarea
                                :placeholder="$t('pages.description')"
                                v-model="pageForm.meta.description"
                            />
                        </FormField>
                        <div class="mt-4 max-w-[600px]">
                            <span class="inline-block pb-4 text-lg">
                                {{ $t('pages.preview') }}
                            </span>

                            <div class="text-base flex text-[#202124]">
                                <span class="inline-block">
                                    {{ origin }}
                                </span>
                                <span class="inline-block" v-html="pageState.value.full_slug" />
                            </div>
                            <div class="text-[20px] text-[#1a0dab]">
                                {{ pageForm.meta.title }}
                            </div>
                            <div class="text-base text-[#4d5156]">
                                {{
                                    descriptionPreview
                                        ? descriptionPreview
                                        : '...'
                                }}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </MainContent>
    </MainBody>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MainBody, MainContent } from '@/layout';
import { Card, FormField, FormFieldLabel, Input, Textarea } from '@/ui';
import { pageForm, pageState } from '@/entities';

const origin = window.location.origin;

const descriptionPreview = computed(() => {
    if (pageForm.value.meta.description?.length > 160) {
        let trimmed = pageForm.value.meta.description
            ?.substr(0, 160)
            .substr(0, 160);

        // re-trim if we are in the middle of a word
        trimmed = trimmed.substr(
            0,
            Math.min(trimmed.length, trimmed.lastIndexOf(' '))
        );

        return `${trimmed} \u2026`;
    }

    return pageForm.value.meta.description;
});
</script>
