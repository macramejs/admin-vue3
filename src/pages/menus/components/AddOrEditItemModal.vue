<template>
    <slot name="button" :open="() => (isOpen = true)">
        <Button square secondary @click="isOpen = true" @keyup.esc="isOpen = false">
            <IconPlus class="w-5 h-5" />
        </Button>
    </slot>
    <Modal :open="isOpen" @close="isOpen = false" v-bind="$attrs" md>
        <h2>Add Navigation Item</h2>
        <div>
            <FormField>
                <Input label="Title" v-model="form.title" />
            </FormField>
            <FormField>
                <Select
                    label="Link"
                    v-model="form.link"
                    :options="links.value"
                    label-key="title"
                    value-key="link"
                />
            </FormField>
        </div>
        <Button @click="submit"> Save </Button>
    </Modal>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import {
    Modal,
    Input,
    Select,
    Button,
    FormField,
} from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';
import { useMenuItemForm } from '@/modules/forms';
import { Menu, MenuItem } from '@/types';
import { links } from '@/modules/state';

const isOpen = ref<boolean>(false);

const props = defineProps({
    menu: {
        type: Object as PropType<Menu>,
        required: true
    },
    menuItem: {
        type: Object as PropType<MenuItem>,
        required: false,
        default: () => ({})
    }
});

links.loadIfNotLoaded();

const form = useMenuItemForm(props.menu, {});

const submit = () => {
    form.submit().then(() => {
        isOpen.value = false;
    })
}
</script>
