<template>
    <div class="flex items-center space-x-3">
        <ButtonMidGray @click="init()">
            {{ $t('content.chose_link') }}
        </ButtonMidGray>
        <IconArrowRight class="w-4 h-4" v-if="model.link" />
        <div v-if="model.link" class="text-sm text-orange">
            {{ model.link }}
        </div>
    </div>
    <Modal v-model:open="isOpen" sm :title="$t('content.chose_link')" localize>
        <FormGroup>
            <Input v-model="model.text" class="w-full" label="Linktext" />

            <div class="flex items-center space-x-2">
                <span> Externer link </span><Toggle v-model="external" />
            </div>
            <Select
                v-if="!external"
                label="Link"
                v-model="model.link"
                :options="linkOptions"
                label-key="title"
                value-key="link"
            />

            <Input
                v-else
                v-model="model.link"
                class="w-full"
                label="Externer Link"
            />

            <div class="flex items-center space-x-2">
                <span> In neuem Tab öffnen </span>
                <Toggle v-model="model.new_tab" />
            </div>
        </FormGroup>
        <template v-slot:footer>
            <Button @click="submit()">
                {{ $t('content.confirm') }}
            </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import {
    Input,
    Button,
    ButtonMidGray,
    Modal,
    Select,
    Toggle,
    FormGroup,
} from '@/ui';
import { linkOptions } from '@/modules/state';
import IconArrowRight from '@/ui/Icons/IconArrowRight.vue';

const emit = defineEmits(['update:modelValue']);

interface Link {
    link: string;
    text: string;
    new_tab: string;
}

const props = defineProps({
    modelValue: {
        type: Object as PropType<Link>,
        required: true,
    },
});

const external = ref<boolean>(props.modelValue.link?.startsWith('http'));
const model = ref<Link>(props.modelValue);

watch(
    () => external.value,
    val => {
        model.value.link = '';
    }
);

const isOpen = ref<boolean>(false);

const init = () => {
    model.value = props.modelValue;
    isOpen.value = true;
};

const submit = () => {
    emit('update:modelValue', model.value);
    isOpen.value = false;
};
</script>
