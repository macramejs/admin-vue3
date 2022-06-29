<template>
    <FormGroup>
        <Input v-model="model.text" class="w-full" label="Linktext" />

        <div class="flex items-center space-x-2">
            <span> Externer link </span><Toggle v-model="external" />
        </div>
        <Select
            v-if="!external"
            label="Link"
            v-model="model.link"
            :options="linksState.value"
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
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { Input, Select, Toggle, FormGroup } from '@/ui';
import { linksState } from '@/entities';

const emit = defineEmits(['update:modelValue']);

interface Link {
    link: string;
    text: string;
    new_tab: boolean;
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

watch(
    () => model.value,
    val => {
        emit('update:modelValue', model.value);
    }
);
</script>
