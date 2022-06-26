<template>
    <slot name="button" :open="() => (isOpen = true)">
        <ButtonRound white sm @click="isOpen = true">
            <IconPlus class="w-4 h-4" />
        </ButtonRound>
    </slot>
    <Modal lg v-model:open="isOpen" :title="$t('pages.new_page')">
        <form @submit.prevent="submit">
            <FormGroup>
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
            </FormGroup>

            <input type="submit" class="hidden" />
        </form>
        <template v-slot:footer>
            <Button @click="submit"> {{ $t('pages.save') }} </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, PropType, watch } from 'vue';
import { Modal, Input, Select, ButtonRound, Button, FormGroup } from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';
import { templateOptions } from '@/modules/content/templates';
import { Page } from '@/types/resources';
import { slugify } from '@/modules/helpers';

// FORM
import { usePageForm } from '@/modules/forms';
import { PageForm } from '@/types';
import { useRouter } from 'vue-router';
import { pageTree } from '@/modules/state';

const props = defineProps({
    parent: {
        type: Object as PropType<Page>,
        required: false,
    },
});

const isOpen = ref<boolean>(false);

const form: PageForm = usePageForm({
    parent_id: props.parent?.id,
});

const isSlugEdited = ref(false);

const router = useRouter();

const submit = function () {
    form.submit().then(response => {
        pageTree.load();
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
