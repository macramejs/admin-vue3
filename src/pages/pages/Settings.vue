<template>
    <span class="inline-block pb-8 text-xl font-medium">
        {{ $t('pages.page_settings') }}
    </span>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full md:col-span-9">
            <Card class="flex gap-5">
                <FormField no-label class="w-2/3">
                    <Input :label="$t('pages.page_name')" v-model="pageForm.name" />
                </FormField>
                <FormField no-label class="w-1/3">
                    <Input
                        :label="$t('pages.page_slug')"
                        v-model="pageForm.slug"
                        @update:modelValue="slug => (form.slug = slugify(slug))"
                    />
                </FormField>
            </Card>
            <Button
                secondary
                class="!bg-red-500 !text-white !border-none flex mt-4"
                @click="deletePage(page.data)"
            >
                <IconTrash class="w-4 h-4 mr-2" />
                {{ $t('pages.delete_page') }}
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { MainBody, MainContent } from '@/layout';
import { PageResource } from '@/types/resources';
import { PageFormData } from '@/types/forms';
import { deletePage } from '@/modules/page';
import { Card, FormField, Input, Button } from '@/ui';
import IconTrash from '@/ui/Icons/IconTrash.vue';
import { slugify } from '@/modules/helpers';
import { pageForm } from '@/modules/forms';

const props = defineProps({
    page: {
        type: Object as PropType<PageResource>,
        required: true,
    },
    form: {
        type: Object as PropType<PageFormData>,
        required: true,
    },
});
</script>
