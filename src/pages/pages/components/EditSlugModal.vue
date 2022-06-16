<template>
    <button
        @click="isOpen = true"
        class="p-1 bg-white text-gray hover:bg-black rounded-xs group-hover:opacity-100 hover:text-white"
    >
        <IconEditPencil />
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
import { Modal, Input, Button, IconEditPencil } from '@/ui';
import { slugify } from '@/modules/helpers';
import { PageContentForm } from '@/types/forms';

const isOpen = ref<boolean>(false);

const props = defineProps({
    form: {
        type: Object as PropType<PageContentForm>,
        required: false,
    },
});
</script>
