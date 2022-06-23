<template>
    <slot name="button" :open="() => (isOpen = true)">
        <ButtonRound white sm @click="isOpen = true">
            <IconPlus class="w-4 h-4" />
        </ButtonRound>
    </slot>
    <Modal lg v-model:open="isOpen" :title="$t('pages.new_page')">
        <form @submit.prevent="submit">
            <div class="space-y-3">
                <Input label="Name" v-model="form.name" />
                <Input
                    label="Slug"
                    :modelValue="form.slug"
                    @update:modelValue="updateSlug"
                />
                <Select
                    label="Template"
                    :options="templateOptions"
                    v-model="form.template"
                />
            </div>
            <input type="submit" class="hidden" />
        </form>
        <template v-slot:footer>
            <Button @click="submit"> {{ $t('pages.save') }} </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, PropType, watch } from 'vue';
import { Modal, Input, Select, ButtonRound, Button } from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';
import { templateOptions } from '@/modules/content/templates';
import { Page } from '@/types/resources';
import { slugify } from '@/modules/helpers';
import { PageForm } from '@/types';

// FORM
import { usePageForm } from '@/modules/forms';
import { useRouter } from 'vue-router';
import { usePageTree } from '@/modules/state';

const form: PageForm = usePageForm({});

const isOpen = ref<boolean>(false);

defineProps({
    parent: {
        type: Object as PropType<Page>,
        required: false,
    },
});

const isSlugEdited = ref(false);

const router = useRouter();
const submit = function () {
    form.submit().then(response => {
        usePageTree().load();
        router.push(`/pages/${response.data.data.id}`);
        isOpen.value = false;
    });
};

const updateSlug = function (value: string) {
    form.slug = slugify(value);
    isSlugEdited.value = true;
};

watch(
    () => form.name,
    () => {
        if (!isSlugEdited.value) {
            form.slug = slugify(form.name);
        }
    },
    { immediate: true }
);
</script>
