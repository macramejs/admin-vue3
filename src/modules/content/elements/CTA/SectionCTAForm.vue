<template>
    <Card>
        <FormGroup>
            <Link v-model="model.link" />
            <div>
                <Toggle
                    label="Besonders hervorheben"
                    v-model="model.important"
                />
                <div class="mt-2 text-xs">
                    Nur aktivieren, wenn es sich um eine wirklich wichtige
                    Aktion handelt.
                </div>
            </div>
        </FormGroup>
    </Card>
</template>
<script setup lang="ts">
import { Card, Toggle, FormGroup } from '@/ui';
import Link from '@/modules/link/Link.vue';
import { iconsState } from '@/entities';

import { watch, reactive, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            important: false,
            link: {
                link: '',
                text: '',
                new_tab: false,
            },
        }),
    },
});

const model = reactive(props.modelValue);

const icons = computed(() => {
    return iconsState.value?.map(icon => {
        return icon;
    });
});

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>
