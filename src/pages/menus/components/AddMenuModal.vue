<template>
    <slot name="button" :open="() => (isOpen = true)">
        <ButtonRound white sm @click="isOpen = true">
            <IconPlus class="w-4 h-4" />
        </ButtonRound>
    </slot>
    <Modal lg v-model:open="isOpen" :title="$t('menus.new_menu')">
        <form @submit.prevent="submit">
            <FormGroup>
                <Input :label="$t('menus.name')" v-model="form.title" />
                <Input :label="$t('menus.type')" v-model="form.type" />
            </FormGroup>

            <input type="submit" class="hidden" />
        </form>
        <template v-slot:footer>
            <Button @click="submit"> {{ $t('menus.save') }} </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal, Input, ButtonRound, Button, FormGroup } from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';

// FORM
import { useMenuForm } from '@/modules/forms';
import { MenuForm } from '@/types';
import { useRouter } from 'vue-router';

const isOpen = ref<boolean>(false);

const form: MenuForm = useMenuForm({});

const router = useRouter();

const submit = function () {
    form.submit().then(response => {
        router.push(`/menus/${response.data.data.id}`);
        isOpen.value = false;
    });
};
</script>
