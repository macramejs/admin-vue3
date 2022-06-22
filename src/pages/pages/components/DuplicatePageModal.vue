<template>
    <slot name="button" :open="() => (isOpen = true)">
        <IconCopy class="w-4 h-4" />
    </slot>
    <Modal lg v-model:open="isOpen" :title="$t('pages.duplicate_page')">
        <form @submit.prevent="form.submit()">
            <div class="space-y-3">
                <Input :label="$t('pages.new_page_name')" v-model="form.name" />
            </div>
            <input type="submit" class="hidden" />
        </form>
        <template v-slot:footer>
            <Button @click="form.submit()">
                {{ $t('pages.duclicate') }}
            </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue';
import { Modal, Input, Button } from '@/ui';
import IconCopy from '@/ui/Icons/IconCopy.vue';
import { Page } from '@/types/resources';

const isOpen = ref<boolean>(false);

const props = defineProps({
    page: {
        type: Object as PropType<Page>,
        required: true,
    },
});

// TODO:
// const form = useForm({
//     route: `/admin/pages/${props.page.id}/duplicate`,
//     data: {
//         name: props.page.name,
//     },
//     method: 'post',
//     onSuccess(response) {
//         isOpen.value = false;
//         form.reset();

//         // // Visit the recently created page, to refresh the Page/Show component
//         // // when currently already on a page.
//         Inertia.visit(`/admin/pages/${response.props.page.data.id}`, {
//             only: ['page'],
//         });
//     },
// });
</script>
