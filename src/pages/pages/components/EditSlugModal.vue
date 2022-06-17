<template>
    <button
        @click="isOpen = true"
        class="p-1 bg-white text-gray hover:bg-black rounded-xs group-hover:opacity-100 hover:text-white"
    >
        <IconEditPencil class="w-4 h-4" />
    </button>
    <Modal lg v-model:open="isOpen" title="Edit Slug">
        <div class="space-y-3">
            <Input
                label="Slug"
                :modelValue="form.slug"
                @update:modelValue="slug => (form.slug = slugify(slug))"
                @keyup.enter="isOpen = false"
            />
        </div>
        <template #footer>
            <Button @click="isOpen = false">Ok</Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue';
import { Modal, Input, Button } from '@/ui';
import IconEditPencil from '@/ui/Icons/IconEditPencil.vue';
import { slugify } from '@/modules/helpers';
import { usePageSlugForm } from '@/modules/forms';
import { Page } from '@/types';

const props = defineProps({
    page: {
        type: Object as PropType<Page>,
        required: true,
    },
});

const form = usePageSlugForm(
    {
        slug: props.page.slug,
    },
    props.page?.id
);

const isOpen = ref<boolean>(false);
</script>
